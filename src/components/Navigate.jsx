import React from "react";
import { useNavigate } from "react-router-dom";

function Navigate() {
  const navigate = useNavigate();

  const goToPage = (number) => {
    navigate(`/page${number}`);
  };
  return (
    <React.Fragment>
      <div className="position-relative">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => goToPage(1)}
          >
            Go to Page 1
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => goToPage(2)}
          >
            Go to Page 2
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => goToPage(3)}
          >
            Go to Page 3
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navigate;
