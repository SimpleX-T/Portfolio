import { X } from "lucide-react";
import { useEffect } from "react";

export default function DriveModal({ show, onClose, fileId }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2">
      <div
        className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="bg-white rounded-lg w-full max-w-4xl p-4 relative z-50">
        <button
          onClick={onClose}
          className="absolute top-2 left-2 text-gray-500 hover:text-black text-xl font-bold"
        >
          <X />
        </button>

        <div className="aspect-video w-full">
          <iframe
            src={fileId}
            className="w-full h-full"
            allow="autoplay"
            title="Google Drive Preview"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
