import React from "react";

import "../styles/ErrorDetailsModal.scss"
import closeSymbol from "../assets/closeSymbol.svg";


const ErrorDetailsModal = (props) => {
  const { state, closeError } =
    props;

  return (
    <div className="error-details-modal">
      <header>
        <button
          className="error-details-modal__close-button"
          onClick={() => closeError()}
          aria-label="close modal button"
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </header>

      <main className="error-details-modal__error">
        <span>{state.error}</span>
      </main>
    </div>
  );
};

export default ErrorDetailsModal ;
