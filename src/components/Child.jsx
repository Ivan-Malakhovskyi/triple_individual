import React, { memo } from "react";

export const Child = memo(({ onClick }) => {
  console.log("CHILD RENDER");
  return (
    <button type="button" onClick={onClick}>
      Child Click
    </button>
  );
});
