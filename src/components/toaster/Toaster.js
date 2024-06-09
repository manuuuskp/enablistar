import { useEffect } from "react";

const Toaster = ({ message, duration, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="absolute bottom-5 left-5 bg-green-600 text-white font-bold p-2 rounded-lg">
      {message}
      <button className="ml-1" onClick={onClose}>
        x
      </button>
    </div>
  );
};

export default Toaster;
