import React from "react";

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
      <label>
        Name:
        <input name="name" type="text" />
      </label>
      <label>
        email:
        <input name="email" type="email" />
      </label>

      <button style={{ position: "absolute" }} type="submit">
        Create
      </button>
    </form>
  );
};

export default Form;
