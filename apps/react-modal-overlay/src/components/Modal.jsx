import React, { useEffect, useRef, useState } from 'react';

const Modal = ({ BackgroundChange, BgWhite }) => {
  const [open, setOpen] = useState(false);
  const [offerAccept, setOfferAccept] = useState(false);
  const modalRef = useRef(null);
  const acceptRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
    setOfferAccept(false);
    BackgroundChange();
  };

  const handleClose = () => {
    setOpen(false);
    setOfferAccept(false);
    BgWhite();
  };

  const handleOffer = () => {
    setOfferAccept(true);
    setOpen(false);
    BgWhite();
  };

  // Close modal or offer box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideModal =
        modalRef.current && !modalRef.current.contains(event.target);
      const clickedOutsideAccept =
        acceptRef.current && !acceptRef.current.contains(event.target);

      if (
        (open && clickedOutsideModal) ||
        (offerAccept && clickedOutsideAccept)
      ) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, offerAccept]);

  return (
    <div>
      {/* Show Offer Button */}
      {!open && !offerAccept && (
        <button
          onClick={handleOpen}
          className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Show Offer
        </button>
      )}

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal Box */}
          <div
            ref={modalRef}
            className="relative bg-white rounded-xl shadow-2xl p-8 w-[400px] flex flex-col items-center gap-6 z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              ×
            </button>

            <h2 className="text-gray-800 text-2xl font-semibold text-center">
              Exclusive Offer Just For You!
            </h2>
            <p className="text-gray-600 text-center">
              Click the button below to accept this amazing deal before it
              expires.
            </p>

            <button
              onClick={handleOffer}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
            >
              Accept Offer
            </button>
          </div>
        </div>
      )}

      {/* Offer Accepted Box */}
      {offerAccept && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div
            ref={acceptRef}
            className="relative bg-white rounded-xl shadow-2xl p-8 w-[400px] flex flex-col items-center gap-6 z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              ×
            </button>

            <h2 className="text-green-600 text-2xl font-bold text-center">
              🎉 Offer Accepted!
            </h2>
            <p className="text-gray-600 text-center">
              Thank you for accepting our exclusive offer.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
