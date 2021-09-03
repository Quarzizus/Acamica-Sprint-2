import React, { useRef, useState } from "react";

const InputDate = () => {
  const inputRef = useRef();
  const [date, setDate] = useState(false);

  return (
    <>
      {date ? (
        <input type="date" min="2018-01-01" max="2018-12-31" />
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
