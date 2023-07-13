import React, { memo, useCallback } from "react";

function Button(props) {
  const { label, icon, type, onClick, className } = props;
  const handleClick = useCallback(onClick, [onClick]);
  return (
    <button type={type} onClick={handleClick} className={className}>
      {icon && <div className="icon">{icon}</div>}
      {label && <div className="btnLabel">{label}</div>}
    </button>
  );
}

export default memo(Button);
