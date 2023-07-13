import React from "react";
import Button from "./Button";
import * as ButtonIcon from "../assets/icons/ButtonIcons";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "../app/reducers/uiSlice";
function Popup({ cards }) {
  const dispatch = useDispatch();
  const { cardID } = useSelector((state) => state.ui);
  const popupCard = cards.find((card) => card._id === cardID);

  return (
    <div className="overlay">
      <div className="popup">
        <img src={popupCard.image} alt={popupCard.title} />
        <div className="popupContent">
          <h1 className="popupTitle">
            <span>Title:&nbsp;</span>
            {popupCard.title}
          </h1>
          <div className="popupDescr">
            <span>Description:&nbsp;</span>
            {popupCard.description}
          </div>
          <ul className="popupLang">
            <span>Language:&nbsp;</span>
            {popupCard.technologies}
          </ul>
          <p>
            <span>Date:&nbsp;</span>
            {popupCard.date}
          </p>
          <p>
            <span>Demo:&nbsp;</span>
            {popupCard.url}
          </p>
          <Button
            onClick={() => dispatch(toggleVisibility("popup"))}
            icon={<ButtonIcon.Cancel />}
            className="closeBtn"
          />
        </div>
      </div>
    </div>
  );
}

export default Popup;
