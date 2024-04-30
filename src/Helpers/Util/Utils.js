
export const calculateFinalPrice = (price, discountPercentage) => {
    const discountedPrice = price * (1 - discountPercentage / 100);
    const finalPrice = (price * 88.89 - discountedPrice).toFixed(2);
    return finalPrice;
  };
  