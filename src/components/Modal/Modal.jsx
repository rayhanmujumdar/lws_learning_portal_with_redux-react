import React from "react";

export default function Modal({ open, control, children }) {
  return (
    <>
      {open && (
        <div className="modal visible opacity-100 pointer-events-auto bg-[rgba(0,0,0,0.5)]">
          <div className="modal-box w-11/12 max-w-5xl bg-[#080E1B]">
            {children}
            <div className="modal-action">
              <button onClick={() => control(false)} className="btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
