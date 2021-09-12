import React, { useState } from "react";

const InputDate = ({ filter }) => {
  const [date, setDate] = useState(false);

  return (
    <>
      {date ? (
        <input type="date" onChange={(e) => filter(e.target.valueAsDate)} />
      ) : (
        <input
          type="text"
          placeholder="Fecha de inicio"
          onFocus={() => setDate(!date)}
        />
      )}
    </>
  );
};

export default InputDate;
