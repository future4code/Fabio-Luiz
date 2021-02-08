import React from "react";
import "./styles.css";
import { Button } from './../globalStyles';

const Alert = (props) => {
  return (
    <div className="background">
      <div className="confirm-box">
        <h1>{props.title}</h1>
        <hr />
        <p>{props.description}</p>
        <Button width="100%" onClick={()=>props.setOpenAlert(false)} >
          OK
        </Button>
      </div>
    </div>
  );
};

export default Alert;
