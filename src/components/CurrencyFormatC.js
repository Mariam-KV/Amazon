import React from "react";
import CurrencyFormat from "react-currency-format";
function CurrencyFormatC({ value, amount }) {
  return (
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            {/* Part of the homework */}
            Subtotal ({amount} items): <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={value} // Part of the homework
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );
}

export default CurrencyFormatC;
