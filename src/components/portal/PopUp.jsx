import { createPortal } from "react-dom";

const PopUp = ({ copied }) => {
  return createPortal(
    <div>
      {copied && (
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
          }}
        >
          COPIED TO CLIPBOARD
        </div>
      )}
    </div>,
    document.getElementById("portal")
  );
};

export default PopUp;
