// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Reactfire from "reactfire";
import * as Auth from "firebase/auth";
import * as RescriptReactRouter from "../node_modules/@rescript/react/src/RescriptReactRouter.js";

function SignOut(props) {
  var auth = Auth.getAuth(Reactfire.useFirebaseApp());
  React.useEffect(function () {
        var signOut = async function (param) {
          await Auth.signOut(auth);
          return RescriptReactRouter.replace("/");
        };
        signOut(undefined);
      });
  return null;
}

var make = SignOut;

export {
  make ,
}
/* react Not a pure module */
