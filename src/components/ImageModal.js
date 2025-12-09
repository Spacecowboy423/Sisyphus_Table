import React from "react";

const ImageModal = ({ isOpen, onClose, image, title, description, details }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="relative m-4 w-11/12 md:w-3/4 lg:w-2/4 max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-sm"
                role="dialog"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-600 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm w-9 h-9 inline-flex justify-center items-center"
                        type="button"
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

                {/* Image section */}
                <div className="relative border-b border-gray-100 p-0">
                    <img
                        alt={title}
                        className="h-96 w-full object-cover object-center"
                        src={image}
                    />
                </div>

                {/* Description section */}
                <div className="p-4">
                    <p className="leading-relaxed text-gray-700">
                        {description}
                    </p>
                </div>

                {/* Details section */}
                <div className="p-4">
                    <p className="leading-relaxed text-gray-700">
                        {details}
                    </p>
                </div>

                {/* Note section */}
                <div className="bg-indigo-50 p-4 rounded">
                    <p className="text-sm text-gray-600">
                        <strong>Note:</strong> This is a detailed view of this build step.
                        More photos and videos will be added as I continue documenting the process.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImageModal;