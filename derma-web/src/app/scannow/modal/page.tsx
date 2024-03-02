import { X } from "react-feather";
import SymptomSelector from "../sysmptoms";

export default function Modal() {
  return (
    // backdrop
    <div
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        "visible bg-black/20 backdrop-blur-lg" : "invisible"
      `}
    >
      {/* modal */}
      <div
      
        className={`
          modal-content bg-white rounded-xl shadow p-6 transition-all
          "scale-100 opacity-100" : "scale-125 opacity-0"
        `}
      >
        <button
     
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <X />
        </button>
        <SymptomSelector></SymptomSelector>
      </div>
    </div>
  );
}
