// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Reactfire from "reactfire";
import * as DateFormat from "./DateFormat.js";
import * as Caml_option from "../node_modules/rescript/lib/es6/caml_option.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as Firestore from "firebase/firestore";
import * as RescriptReactRouter from "../node_modules/@rescript/react/src/RescriptReactRouter.js";

function JargonCard(props) {
  var match = props.jargon;
  var korean = match.korean;
  var english = match.english;
  var id = match.id;
  var match$1 = props.language ? [
      korean,
      english
    ] : [
      english,
      korean
    ];
  var match$2 = React.useState(function () {
        
      });
  var setCommentsCount = match$2[1];
  var commentsCount = match$2[0];
  var firestore = Reactfire.useFirestore();
  var jargonDoc = Firestore.doc(firestore, "jargons/" + id + "");
  var match$3 = Reactfire.useFirestoreDocData(jargonDoc);
  var jargon = match$3.data;
  var commentsCollection = Firestore.collection(firestore, "jargons/" + id + "/comments");
  React.useEffect(function () {
        var countComments = async function () {
          var snapshot = await Firestore.getCountFromServer(commentsCollection);
          var count = snapshot.data().count;
          return setCommentsCount(function (param) {
                      return count;
                    });
        };
        countComments();
      });
  var tmp;
  if (jargon !== undefined) {
    var timestamp = jargon.timestamp;
    tmp = timestamp !== undefined ? JsxRuntime.jsx("div", {
            children: "최근 활동 " + DateFormat.timeAgo(Caml_option.valFromOption(timestamp).toDate()) + "",
            className: "text-xs dark:text-zinc-500"
          }) : null;
  } else {
    tmp = null;
  }
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("div", {
                      children: tmp,
                      className: "flex-none"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("div", {
                              children: match$1[0],
                              className: "w-full font-semibold group-hover:text-teal-700 dark:group-hover:text-teal-200"
                            }),
                        JsxRuntime.jsx("div", {
                              children: match$1[1],
                              className: "w-full overflow-hidden group-hover:overflow-visible whitespace-nowrap group-hover:whitespace-normal text-ellipsis font-regular text-zinc-500 group-hover:text-teal-600 dark:text-zinc-400 dark:group-hover:text-teal-300"
                            })
                      ],
                      className: "flex-none inline-grid grid-cols-2"
                    }),
                commentsCount !== undefined ? JsxRuntime.jsx("div", {
                        children: "댓글 " + commentsCount + "개",
                        className: "flex-none text-xs dark:text-zinc-400"
                      }) : null
              ],
              className: "flex flex-col gap-y-2 group cursor-pointer p-4 bg-white hover:bg-teal-50 rounded-xl shadow-md dark:bg-zinc-900 dark:hover:bg-teal-900",
              onClick: (function (param) {
                  RescriptReactRouter.push("/jargon/" + id + "");
                })
            });
}

var make = JargonCard;

export {
  make ,
}
/* react Not a pure module */
