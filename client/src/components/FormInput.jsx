import React, { memo, useEffect, useState } from "react";

function FormInput(props) {
  const { label, icon, errorMessage, onChange, ...input } = props;
  const [isError, setIsError] = useState(false);

  return (
    <div className="inputBox">
      <div className="inputField">
        <input
          className="input"
          onChange={onChange}
          onInvalid={() => setIsError(true)}
          onFocus={() => setIsError(true)}
          onBlur={() => setIsError(false)}
          required={true}
          // autoComplete="off"
          {...input}
        />
        {label && <label className="inputLabel">{label}</label>}
        {icon && <div className="icon">{icon}</div>}
      </div>
      {isError && <p className="inputError">{errorMessage}</p>}
    </div>
  );
}

export default memo(FormInput);
