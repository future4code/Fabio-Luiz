import React, {useRef} from "react";
import { Background, PopupBox } from "./styled";

const Popup = (props) => {
    const backPopup = useRef()
    const closePopup = (e) => {
        if(backPopup.current === e.target){
            props.setOpenPopup(false);
        }
    }
  return (
    <>
      {props.openPopup && (
        <Background ref={backPopup} onClick={closePopup}>
          <PopupBox>
            <h3>{props.title}</h3>
            <p>{props.msg}</p>
            <div>
              <button onClick={() => props.function()}>SIM</button>
              <button onClick={() => props.setOpenPopup(false)}>
                NÃO
              </button>
            </div>
          </PopupBox>
        </Background>
      )}
    </>
  );
};

export default Popup;
