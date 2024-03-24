// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/rescript/lib/es6/curry.js";
import * as React from "react";
import * as Loader from "./Loader.js";
import * as Js_dict from "../node_modules/rescript/lib/es6/js_dict.js";
import * as Reactfire from "reactfire";
import * as Belt_Option from "../node_modules/rescript/lib/es6/belt_Option.js";
import * as TokenContext from "./TokenContext.js";
import * as SignInContext from "./SignInContext.js";
import * as Auth from "firebase/auth";
import * as JsxRuntime from "react/jsx-runtime";
import * as Firestore from "firebase/firestore";

function SignInWrapper(props) {
  var match = Reactfire.useSigninCheck();
  var firestore = Reactfire.useFirestore();
  var auth = Reactfire.useAuth();
  var match$1 = React.useState(function () {
        
      });
  var setToken = match$1[1];
  var token = match$1[0];
  console.log("token: " + Belt_Option.getWithDefault(token, "None") + "");
  React.useEffect(function () {
        var userDocUnsub = {
          contents: undefined
        };
        var authStateChangeUnsub = Auth.onAuthStateChanged(auth, (async function (user) {
                if (user == null) {
                  return setToken(function (param) {
                              
                            });
                }
                var token = await user.getIdToken(false);
                var match = await user.getIdTokenResult(false);
                var hasuraClaim = Js_dict.get(match.claims, "https://hasura.io/jwt/claims");
                if (hasuraClaim !== undefined) {
                  return setToken(function (param) {
                              return token;
                            });
                }
                var userDocRef = Firestore.doc(firestore, "users/" + user.uid + "");
                userDocUnsub.contents = Firestore.onSnapshot(userDocRef, (async function (userDoc) {
                        var match = Js_dict.get(userDoc.data(), "refreshTime");
                        if (match === undefined) {
                          return ;
                        }
                        var token = await user.getIdToken(true);
                        return setToken(function (param) {
                                    return token;
                                  });
                      }));
              }));
        return (function (param) {
                  Curry._1(authStateChangeUnsub, undefined);
                  var unsub = userDocUnsub.contents;
                  if (unsub !== undefined) {
                    return Curry._1(unsub, undefined);
                  }
                  
                });
      });
  if (match.status === "success") {
    return JsxRuntime.jsx(SignInContext.Provider.make, {
                value: Belt_Option.getExn(match.data),
                children: JsxRuntime.jsx(TokenContext.Provider.make, {
                      value: token,
                      children: props.children
                    })
              });
  } else {
    return JsxRuntime.jsx("div", {
                children: JsxRuntime.jsx(Loader.make, {}),
                className: "h-screen grid justify-center content-center"
              });
  }
}

var make = SignInWrapper;

export {
  make ,
}
/* react Not a pure module */
