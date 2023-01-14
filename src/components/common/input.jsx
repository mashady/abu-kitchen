import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="">
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control mb-2 rounded"
        placeholder={label}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
