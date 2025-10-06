import { X } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DriveModalProps = {
  show: boolean;
  onClose: () => void;
  fileId: string;
};

export default function DriveModal({ show, onClose, fileId }: DriveModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-50 w-full max-w-6xl bg-[var(--bg-black-50)] rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-6 -right-6 rounded-full p-3 bg-[var(--bg-black-50)] cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} className="text-[var(--text-black-700)]" />
            </button>

            {/* Content */}
            <div className="aspect-video w-full">
              <iframe
                src={fileId}
                className="w-full h-full"
                allow="autoplay"
                title="Google Drive Preview"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
