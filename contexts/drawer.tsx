// DrawerProvider.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface DrawerData {
  title: string;
  description: string;
  content: ReactNode;
  cancelButtonText?: string;
}

interface DrawerContextType {
  openDrawer: (data: DrawerData) => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

export const DrawerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerData, setDrawerData] = useState<DrawerData | null>(null);

  const openDrawer = (data: DrawerData) => {
    setDrawerData(data);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setDrawerData(null);
  };

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
      {children}

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="w-full max-w-2xl">
          {drawerData && (
            <>
              <DrawerHeader>
                <DrawerTitle>{drawerData.title}</DrawerTitle>
                <DrawerDescription>{drawerData.description}</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                {drawerData.content}
                {drawerData.cancelButtonText && (
                  <DrawerClose>
                    <Button variant="outline">
                      {drawerData.cancelButtonText}
                    </Button>
                  </DrawerClose>
                )}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};
