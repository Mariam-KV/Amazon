import React from "react";
import CurrencyFormat from "react-currency-format";
function CurrencyFormatC({ title, value, amount }) {
  return (
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            {title === "payment"
              ? "Order total "
              : `Subtotal (${amount ? amount : 0}) items `}
            :<strong> {value}</strong>
          </p>
        </>
      )}
      decimalScale={2}
      value={value}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );
}

export default CurrencyFormatC;
