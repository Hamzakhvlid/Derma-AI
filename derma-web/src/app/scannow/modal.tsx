import { X } from "react-feather";

export default function Modal({
  open,
  onClose,
  children
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    // backdrop
    <div
      className={`z-10 
        fixed inset-0 flex justify-center items-center transition-colors  px-[5%] 
        ${open ? "visible bg-black/20 backdrop-blur-lg" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          modal-content bg-white rounded-xl shadow p-1 md:p-6 transition-all w-[100%] md:w-[75%]
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
