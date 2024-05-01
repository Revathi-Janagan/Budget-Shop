import React, { useState } from "react";

const SetQuantity = ({ quantity: initialQuantity, setQuantity }) => {
  const [quantity, setInternalQuantity] = useState(initialQuantity);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setInternalQuantity(quantity - 1);
      setQuantity(quantity - 1); // Update parent component's quantity state
    }
  };

  const increaseQuantity = () => {
    setInternalQuantity(quantity + 1);
    setQuantity(quantity + 1); // Update parent component's quantity state
  };

  return (
    <div className="input-group">
      <button
        className="button-minus btn btn-secondary"
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
