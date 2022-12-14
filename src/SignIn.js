// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Loader from "./Loader.js";
import * as Firebase from "./Firebase.js";
import * as Reactfire from "reactfire";
import * as Auth from "firebase/auth";
import * as ReactFirebaseui from "react-firebaseui";
import * as RescriptReactRouter from "../node_modules/@rescript/react/src/RescriptReactRouter.js";
import App from "firebase/compat/app";

var uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    Firebase.Auth.EmailAuthProvider.providerID,
    Firebase.Auth.GithubAuthProvider.providerID
  ],
  callbacks: {
    signInSuccessWithAuthResult: (function (param) {
        return false;
      })
  }
};

function SignIn(Props) {
  var match = Reactfire.useSigninCheck();
  var data = match.data;
  React.useEffect((function () {
          if (data !== undefined && data.signedIn) {
            RescriptReactRouter.replace("/");
          }
          
        }), [data]);
  var app = App.initializeApp(Reactfire.useAuth().app.options);
  var firebaseAuth = Auth.getAuth(app);
  if (match.status === "success") {
    if (data !== undefined && !data.signedIn) {
      return React.createElement("div", {
                  className: "h-screen bg-cover bg-center bg-[url('/assets/layered-waves.svg')] justify-self-stretch grid justify-center content-center"
                }, React.createElement("div", {
                      className: "h-96 w-96 bg-zinc-50 bg-opacity-30 backdrop-blur-lg drop-shadow-lg rounded-xl grid content-center gap-3 text-zinc-800 dark:text-zinc-50"
                    }, React.createElement("div", {
                          className: "text-3xl font-medium text-center"
                        }, "로그인"), React.createElement(ReactFirebaseui.StyledFirebaseAuth, {
                          uiConfig: uiConfig,
                          firebaseAuth: firebaseAuth
                        })));
    } else {
      return null;
    }
  } else {
    return React.createElement("div", {
                className: "h-screen grid justify-center content-center"
              }, React.createElement(Loader.make, {}));
  }
}

var make = SignIn;

export {
  uiConfig ,
  make ,
}
/* react Not a pure module */
