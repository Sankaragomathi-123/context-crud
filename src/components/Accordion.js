import React, { useState } from "react";

export default function Accordion({ items }) {
  const [expended, setExpended] = useState(-1);
  const renderedItems = items.map((item, index) => {
    const isExpended = index === expended;
    const { label, content } = item;
    const icon = <span>{expended ? "down" : "Up"}</span>;
    const handleClick = (nextIndex) => {
      if (index === nextIndex) {
        setExpended(-1);
      }
      setExpended(index);
    };
    return (
      <div key={index}>
        <div style={{ display: "flex", gap: "3rem" }}>
          <div>{label} </div>
          <div onClick={() => handleClick(index)}>{icon} </div>
        </div>
        {isExpended && <div>{content} </div>}
      </div>
    );
  });

  return <div>{renderedItems} </div>;
}
