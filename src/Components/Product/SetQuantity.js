import React, { useState } from "react";

const SetQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="input-group">
      <button
        className="button-minus btn btn-secondary "
        onClick={decreaseQuantity}
        style={{
          padding: "0.2rem 0.4rem",
          fontSize: "0.75rem",
          height: "85px",
          width: "30px",
        }}
      >
        -
      </button>
      <input
        type="number"
        step="1"
        value={quantity}
        className="form-control-quantity text-center w-25 btn-outline-success"
        readOnly
      />
      <button
        className="button-plus btn btn-secondary"
        onClick={increaseQuantity}
        style={{
          padding: "0.2rem 0.4rem",
          fontSize: "0.75rem",
          height: "85px",
          width: "30px",
        }}
      >
        +
      </button>
    </div>
  );
};

export default SetQuantity;
