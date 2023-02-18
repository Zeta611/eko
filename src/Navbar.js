// Generated by ReScript, PLEASE EDIT WITH CARE

import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptReactRouter from "../node_modules/@rescript/react/src/RescriptReactRouter.js";
import * as Solid from "@heroicons/react/24/solid";
import * as Outline from "@heroicons/react/24/outline";

function Navbar(props) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("label", {
                                      children: JsxRuntime.jsx(Solid.Bars3Icon, {
                                            className: "h-5 w-5"
                                          }),
                                      className: "btn btn-ghost lg:hidden",
                                      tabIndex: 0
                                    }),
                                JsxRuntime.jsxs("ul", {
                                      children: [
                                        JsxRuntime.jsx("li", {
                                              children: JsxRuntime.jsx("button", {
                                                    children: "홈",
                                                    onClick: (function (param) {
                                                        RescriptReactRouter.replace("/");
                                                      })
                                                  })
                                            }),
                                        JsxRuntime.jsx("li", {
                                              children: JsxRuntime.jsx("button", {
                                                    children: "용어 제안",
                                                    onClick: (function (param) {
                                                        RescriptReactRouter.replace("/new-jargon");
                                                      })
                                                  })
                                            }),
                                        JsxRuntime.jsx("li", {
                                              children: JsxRuntime.jsx("button", {
                                                    children: "취지",
                                                    onClick: (function (param) {
                                                        RescriptReactRouter.replace("/why");
                                                      })
                                                  })
                                            })
                                      ],
                                      className: "menu menu-compact dropdown-content p-2 w-[6.5rem] shadow bg-teal-50 dark:bg-zinc-800 rounded-box",
                                      tabIndex: 0
                                    })
                              ],
                              className: "dropdown dropdown-hover"
                            }),
                        JsxRuntime.jsx("button", {
                              children: "쉬운 전문용어",
                              className: "btn btn-ghost text-xl lg:hidden",
                              onClick: (function (param) {
                                  RescriptReactRouter.replace("/");
                                })
                            }),
                        JsxRuntime.jsx("button", {
                              children: "EKO: 쉬운 컴퓨터 분야 전문용어 번역",
                              className: "btn btn-ghost text-xl hidden lg:flex",
                              onClick: (function (param) {
                                  RescriptReactRouter.replace("/");
                                })
                            })
                      ],
                      className: "navbar-start"
                    }),
                JsxRuntime.jsx("div", {
                      children: JsxRuntime.jsxs("ul", {
                            children: [
                              JsxRuntime.jsx("li", {
                                    children: JsxRuntime.jsx("button", {
                                          children: "홈",
                                          onClick: (function (param) {
                                              RescriptReactRouter.replace("/");
                                            })
                                        })
                                  }),
                              JsxRuntime.jsx("li", {
                                    children: JsxRuntime.jsx("button", {
                                          children: "용어 제안",
                                          onClick: (function (param) {
                                              RescriptReactRouter.replace("/new-jargon");
                                            })
                                        })
                                  }),
                              JsxRuntime.jsx("li", {
                                    children: JsxRuntime.jsx("button", {
                                          children: "취지",
                                          onClick: (function (param) {
                                              RescriptReactRouter.replace("/why");
                                            })
                                        })
                                  })
                            ],
                            className: "menu menu-horizontal px-1"
                          }),
                      className: "navbar-center hidden lg:flex"
                    }),
                JsxRuntime.jsx("div", {
                      children: JsxRuntime.jsxs("div", {
                            children: [
                              JsxRuntime.jsx("label", {
                                    children: JsxRuntime.jsx(Outline.UserCircleIcon, {
                                          className: "h-6 w-6"
                                        }),
                                    className: "btn btn-circle btn-ghost",
                                    tabIndex: 0
                                  }),
                              JsxRuntime.jsx("ul", {
                                    children: props.signedIn ? JsxRuntime.jsxs(JsxRuntime.Fragment, {
                                            children: [
                                              JsxRuntime.jsx("li", {
                                                    children: JsxRuntime.jsx("button", {
                                                          children: "내 프로필",
                                                          onClick: (function (param) {
                                                              RescriptReactRouter.replace("/profile");
                                                            })
                                                        })
                                                  }),
                                              JsxRuntime.jsx("li", {
                                                    children: JsxRuntime.jsx("button", {
                                                          children: "로그아웃",
                                                          onClick: (function (param) {
                                                              RescriptReactRouter.replace("/logout");
                                                            })
                                                        })
                                                  })
                                            ]
                                          }) : JsxRuntime.jsx("li", {
                                            children: JsxRuntime.jsx("button", {
                                                  children: "로그인",
                                                  onClick: (function (param) {
                                                      RescriptReactRouter.replace("/login");
                                                    })
                                                })
                                          }),
                                    className: "menu menu-compact dropdown-content p-2 w-[6.5rem] shadow bg-teal-50 dark:bg-zinc-800 rounded-box",
                                    tabIndex: 0
                                  })
                            ],
                            className: "dropdown dropdown-hover dropdown-end"
                          }),
                      className: "navbar-end"
                    })
              ],
              className: "navbar bg-base-100"
            });
}

var make = Navbar;

export {
  make ,
}
/* react/jsx-runtime Not a pure module */
