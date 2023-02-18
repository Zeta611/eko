// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/rescript/lib/es6/curry.js";
import * as React from "react";
import * as Reactfire from "reactfire";
import * as Belt_Array from "../node_modules/rescript/lib/es6/belt_Array.js";
import * as Caml_option from "../node_modules/rescript/lib/es6/caml_option.js";
import * as SignInContext from "./SignInContext.js";
import * as Belt_MapString from "../node_modules/rescript/lib/es6/belt_MapString.js";
import * as Belt_SetString from "../node_modules/rescript/lib/es6/belt_SetString.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as Firestore from "firebase/firestore";

function getVotesRatio(votes, allVotes) {
  return votes / (
          allVotes > 0 ? allVotes : 0
        );
}

function Poll$PollRow(props) {
  var votes = props.votes;
  var checkedItems = props.checkedItems;
  var checkedItemHandler = props.checkedItemHandler;
  var translation = props.translation;
  var match = React.useState(function () {
        return false;
      });
  var setChecked = match[1];
  var checked = match[0];
  React.useEffect(function () {
        if (Belt_SetString.has(checkedItems, translation.id)) {
          setChecked(function (param) {
                return true;
              });
        }
        
      });
  return JsxRuntime.jsxs("tr", {
              children: [
                JsxRuntime.jsx("th", {
                      children: JsxRuntime.jsx("label", {
                            children: JsxRuntime.jsx("input", {
                                  className: "checkbox checkbox-primary",
                                  checked: checked,
                                  type: "checkbox",
                                  onChange: (function (param) {
                                      setChecked(function (param) {
                                            return !checked;
                                          });
                                      Curry._2(checkedItemHandler, translation.id, !checked);
                                    })
                                })
                          }),
                      className: "w-10"
                    }),
                JsxRuntime.jsxs("td", {
                      children: [
                        JsxRuntime.jsx("a", {
                              children: translation.korean,
                              href: "#" + translation.associated_comment + ""
                            }),
                        JsxRuntime.jsx("br", {}),
                        JsxRuntime.jsx("progress", {
                              className: "progress progress-primary w-full",
                              max: "1",
                              value: String(getVotesRatio(votes, props.allVotes))
                            })
                      ]
                    }),
                JsxRuntime.jsx("th", {
                      children: String(votes) + "표",
                      className: "w-10"
                    })
              ],
              className: "active"
            });
}

var PollRow = {
  make: Poll$PollRow
};

function Poll(props) {
  var jargonID = props.jargonID;
  var firestore = Reactfire.useFirestore();
  var translationsCollection = Firestore.collection(firestore, "jargons/" + jargonID + "/translations");
  var match = Reactfire.useFirestoreCollectionData(Firestore.query(translationsCollection, Firestore.orderBy("korean", "asc")), {
        idField: "id"
      });
  var translations = match.data;
  var match$1 = React.useState(function () {
        
      });
  var setCheckedItems = match$1[1];
  var checkedItems = match$1[0];
  var checkedItemHandler = function (id, isChecked) {
    if (isChecked) {
      return setCheckedItems(function (param) {
                  return Belt_SetString.add(checkedItems, id);
                });
    } else if (Belt_SetString.has(checkedItems, id)) {
      return setCheckedItems(function (param) {
                  return Belt_SetString.remove(checkedItems, id);
                });
    } else {
      return ;
    }
  };
  var match$2 = React.useState(function () {
        
      });
  var setVotesCount = match$2[1];
  var votesCount = match$2[0];
  React.useEffect((function () {
          if (translations !== undefined) {
            Belt_Array.forEach(Caml_option.valFromOption(translations), (function (translation) {
                    var votesCollection = Firestore.collection(firestore, "jargons/" + jargonID + "/translations/" + translation.id + "/votes");
                    ((async function (param) {
                            var snapshot = await Firestore.getCountFromServer(votesCollection);
                            var count = snapshot.data().count;
                            setVotesCount(function (votesCount) {
                                  return Belt_MapString.update(votesCount, translation.id, (function (param) {
                                                return count;
                                              }));
                                });
                            console.log(translation.korean, Belt_MapString.getUndefined(votesCount, translation.id));
                          })(undefined));
                  }));
          }
          
        }), [translations]);
  var match$3 = React.useContext(SignInContext.context);
  var user = match$3.user;
  var signedIn = match$3.signedIn;
  if (signedIn && !(user == null)) {
    var votesDocRef = Firestore.doc(firestore, "jargons/" + jargonID + "/votes/" + user.uid + "");
    React.useEffect((function () {
            ((async function (param) {
                    var votesDoc = await Firestore.getDoc(votesDocRef);
                    if (votesDoc.exists()) {
                      return setCheckedItems(function (param) {
                                  return Belt_SetString.fromArray(votesDoc.data().translations);
                                });
                    }
                    
                  })(undefined));
          }), []);
  }
  if (match.status !== "success") {
    return null;
  }
  if (translations === undefined) {
    return null;
  }
  var translations$1 = Caml_option.valFromOption(translations);
  var allVotes = Belt_Array.reduce(translations$1, 0, (function (cnt, t) {
          return Belt_MapString.getWithDefault(votesCount, t.id, 0) + cnt | 0;
        }));
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("table", {
                      children: JsxRuntime.jsx("tbody", {
                            children: Belt_Array.map(translations$1, (function (translation) {
                                    return JsxRuntime.jsx(Poll$PollRow, {
                                                translation: translation,
                                                allVotes: allVotes,
                                                checkedItemHandler: checkedItemHandler,
                                                checkedItems: checkedItems,
                                                votes: Belt_MapString.getWithDefault(votesCount, translation.id, 0)
                                              }, translation.id);
                                  }))
                          }),
                      className: "table w-full"
                    }),
                JsxRuntime.jsx("button", {
                      children: "투표하기",
                      className: "btn btn-primary w-full",
                      onClick: (function (param) {
                          if (!signedIn) {
                            return ;
                          }
                          if (user == null) {
                            return ;
                          }
                          var votesDocRef = Firestore.doc(firestore, "jargons/" + jargonID + "/votes/" + user.uid + "");
                          ((async function (param) {
                                  await Firestore.setDoc(votesDocRef, {
                                        translations: Belt_SetString.toArray(checkedItems)
                                      });
                                  return window.location.reload();
                                })(undefined));
                        })
                    })
              ],
              className: "overflow-x-auto"
            });
}

var make = Poll;

export {
  getVotesRatio ,
  PollRow ,
  make ,
}
/* react Not a pure module */
