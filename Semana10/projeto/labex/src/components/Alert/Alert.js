import React, { useRef } from "react";
import { Background, AlertBox, Button } from "./styled";

const Alert = (props) => {
  const backAlert = useRef();
  const closeAlert = (e) => {
    if (backAlert.current === e.target) {
      props.setOpenAlert(false);
    }
  };
  return (
    <>
      {props.openAlert && (
        <Background ref={backAlert} onClick={closeAlert}>
          <AlertBox>
            <h3>{props.title}</h3>
            <p>{props.msg}</p>
              <Button onClick={() => props.setOpenAlert(false)}>
                OK
              </Button>
          </AlertBox>
        </Background>
      )}
    </>
  );
};

export default Alert;
