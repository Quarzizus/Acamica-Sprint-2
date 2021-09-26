import React from "react";

const Price = ({ price }) => {
  return (
    <article className="Price">
      {Array.from({ length: price }, (i) => {
        return <span key={i}>$</span>;
      })}
      {Array.from({ length: 4 - price }, (i) => {
        return (
          <span key={i} className="Light">
            $
          </span>
        );
      })}
    </article>
  );
};

export default Price;
