import { X } from "lucide-react";
import React, { useCallback, useState } from "react";

function ComponentWithSheet<P extends object>(
  WrappedComponent: React.ComponentType<
    P & {
      openModal: () => void; 
    }
  >,
  SheetContent : React.FC
) {
  const EnhancedComponent: React.FC<P> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const openModal = useCallback(() => {
      setIsOpen(true);
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    }, []);
    const closeModal = useCallback(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }, []);
    const handleBackdropClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      },
      []
    );
    return (
      <>
        <div className="relative">
          <div
            className={`transition-all duration-300 ease-out ${
              isOpen && isAnimating
                ? "transform -translate-y-5 brightness-75"
                : "transform scale-100 translate-y-0 brightness-100"
            }`}
            style={{ transformOrigin: "center top" }}
          >
            <WrappedComponent {...props} openModal={openModal} />
          </div>
        </div>
        
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end">
            <div
              className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
                isAnimating ? "opacity-100" : "opacity-0"
              }`}
              onClick={handleBackdropClick}
            />
            <div
              className={`relative w-full flex flex-col justify-center items-center
              bg-customBg-main-1 border-t rounded-t-3xl shadow-2xl transition-transform px-[5%]
              pt-6 duration-300 ease-out ${
                isAnimating ? "translate-y-0" : "translate-y-full"
              }`}
              style={{ height: "67vh" }}
            >
              <button
                className="absolute top-6 right-8 p-2 cursor-pointer"
                onClick={closeModal}
              >
                <X />
              </button>
              <SheetContent />
            </div>
          </div>
        )}
      </>
    );
  };
  EnhancedComponent.displayName = "Component with Bottom Sheet";
  return EnhancedComponent;
}

export default ComponentWithSheet;
