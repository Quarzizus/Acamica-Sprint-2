import React from "react";

const Price = ({ price }) => {
  return (
    <article className="Price">
      {Array.from({ length: price }, (i) => {
        return <span>$</span>;
      })}
      {Array.from({ length: 4 - price }, (i) => {
        return <span className="Light">$</span>;
      })}
    </article>
  );
};

export default Price;
