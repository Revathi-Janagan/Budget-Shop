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
    <div className="input-group w-auto justify-content-start align-items-center">
      <button
        className="button-minus border rounded-circle icon-shape icon-sm mx-1"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <input
        type="number"
        step="1"
        value={quantity}
        className="quantity-field border-0 text-center w-25"
        readOnly
      />
      <button
        className="button-plus border rounded-circle icon-shape icon-sm"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default SetQuantity;
