// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/rescript/lib/es6/curry.js";
import * as React from "react";
import * as Js_exn from "../node_modules/rescript/lib/es6/js_exn.js";
import * as Reactfire from "reactfire";
import * as Belt_Array from "../node_modules/rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "../node_modules/rescript/lib/es6/belt_Option.js";
import * as Caml_option from "../node_modules/rescript/lib/es6/caml_option.js";
import * as Caml_js_exceptions from "../node_modules/rescript/lib/es6/caml_js_exceptions.js";
import * as Firestore from "firebase/firestore";

function makeRow(param) {
  return React.createElement("div", {
              key: param.id,
              className: "group p-4 bg-white hover:bg-teal-50 rounded-xl shadow-md dark:bg-zinc-900 dark:hover:bg-teal-900"
            }, React.createElement("div", {
                  className: "font-semibold group-hover:text-teal-700 dark:group-hover:text-teal-200 dark:text-white"
                }, param.english), React.createElement("div", {
                  className: "font-regular text-right text-zinc-500 group-hover:text-teal-600 dark:text-zinc-400 dark:group-hover:text-teal-300"
                }, param.korean));
}

function Jargon$Dictionary(Props) {
  var regexQuery = Props.query;
  var match = React.useState(function () {
        return [
                /* English */0,
                /* Ascending */0
              ];
      });
  var match$1 = match[0];
  var jargonsCollection = Firestore.collection(Reactfire.useFirestore(), "jargons");
  var language = match$1[0] ? "korean" : "english";
  var direction = match$1[1] ? "desc" : "asc";
  var queryConstraint = Firestore.orderBy(language, direction);
  var jargonsQuery = Firestore.query(jargonsCollection, queryConstraint);
  var match$2 = Reactfire.useFirestoreCollectionData(jargonsQuery, {
        idField: "id"
      });
  if (match$2.status === "loading") {
    return "loading";
  }
  var matchAll = /.*/;
  var regex;
  try {
    regex = new RegExp(regexQuery);
  }
  catch (raw_obj){
    var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
    if (obj.RE_EXN_ID === Js_exn.$$Error) {
      Belt_Option.forEach(obj._1.message, (function (prim) {
              console.log(prim);
            }));
      regex = matchAll;
    } else {
      throw obj;
    }
  }
  var rows = Belt_Array.keepMap(match$2.data, (function (jargon) {
          var match = jargon.english.match(regex);
          var match$1 = jargon.korean.match(regex);
          if (match !== null || match$1 !== null) {
            return Caml_option.some(makeRow(jargon));
          }
          
        }));
  return React.createElement("div", {
              className: "grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-2"
            }, rows);
}

var Dictionary = {
  makeRow: makeRow,
  make: Jargon$Dictionary
};

function Jargon$InputForm(Props) {
  var query = Props.query;
  var onChange = Props.onChange;
  return React.createElement("form", undefined, React.createElement("div", {
                  className: "relative"
                }, React.createElement("input", {
                      className: "block p-4 w-full text-base text-zinc-900 bg-zinc-50 rounded-lg border border-solid border-zinc-200 hover:bg-zinc-200 dark:text-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700",
                      placeholder: "정규식: syntax$",
                      type: "search",
                      value: query,
                      onChange: onChange
                    })));
}

var InputForm = {
  make: Jargon$InputForm
};

function Jargon(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setQuery = match[1];
  var query = match[0];
  var onChange = function ($$event) {
    var value = $$event.currentTarget.value;
    Curry._1(setQuery, (function (param) {
            return value;
          }));
  };
  return React.createElement("div", {
              className: "grid gap-4 p-5"
            }, React.createElement(Jargon$InputForm, {
                  query: query,
                  onChange: onChange
                }), React.createElement(Jargon$Dictionary, {
                  query: query
                }));
}

var make = Jargon;

export {
  Dictionary ,
  InputForm ,
  make ,
}
/* react Not a pure module */
