import React, { memo, useEffect, useRef, useState } from "react";

function FormInput(props) {
  const { label, icon, errorMessage, ...input } = props;
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (input.name === "username") {
      inputRef.current.focus();
    }
  }, [input.name]);

  return (
    <div className="inputBox">
      <div className="inputField">
        <input
          className="input"
          ref={inputRef}
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
