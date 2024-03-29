import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./Amount.css";
function Amount({ onAmount, changedAmount }) {
  return (
    <div className="amount">
      <RemoveIcon
        onClick={() => {
          if (changedAmount >= 2) onAmount(changedAmount - 1);
        }}
      />
      {
        <input
          type="number"
          min={1}
          className="amount__input"
          value={changedAmount}
          onChange={(e) => {
            let value = +e.target.value;
            if (value > 0) onAmount(value);
          }}
        />
      }
      <AddIcon onClick={() => onAmount(changedAmount + 1)} />
    </div>
  );
}

export default Amount;
