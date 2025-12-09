import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    // Backdrop overlay
    <div 
      className="fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center w-full bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div 
          className="relative bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 md:pb-5">
            <h3 className="text-lg font-medium text-gray-900">
              {title}
            </h3>
            <button 
              type="button" 
              className="text-gray-600 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" 
              onClick={onClose}
            >
              <svg 
                className="w-5 h-5" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          
          {/* Modal body */}
          <div className="space-y-4 md:space-y-6 py-4 md:py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;