import { useState } from "react";
import classes from "./forms.module.sass";
import CloseButton from "../Elements/CloseButton";
import Signin from "./Signin";
import Signup from './Signup';
import { SignHideProps } from '../../auth/interfaces';

const Sign = ({hide} : SignHideProps) => {

  const [isSignInChoose, setIsSignInChoose] = useState(true);


  return (
    <div className={classes.form_container}>

      <div className={classes.form_body}>

        <div className={classes.form_body__header}>
          <h5>{isSignInChoose ? "Signin" : "Signup"}</h5>
          <div className={classes.form_body__header_close}>
            <CloseButton onClick={hide}/>
          </div>
        </div>

        <div className={classes.form_body_pick_form}>

          <div 
            className={classes.form_body_pick_form_item}
            onClick={() => setIsSignInChoose(true)}
            >
            <span>Signin</span>
            {isSignInChoose && <div className={classes.form_body_pick_form_active} />}
          </div>

          <div 
            className={classes.form_body_pick_form_item}
            onClick={() => setIsSignInChoose(false)}
            >
            <span>Signup</span>
            {!isSignInChoose && <div className={classes.form_body_pick_form_active} />}
          </div>

        </div>

        {isSignInChoose && <Signin hide={hide}/>}
        {!isSignInChoose && <Signup hide={hide}/>}
      </div>

    </div>
  )
};

export default Sign;