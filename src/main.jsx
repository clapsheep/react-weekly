// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { header } from "./header";
import { gnb } from "./GNB";

const headerElement = document.getElementById("header");
const gnbElement = document.getElementById("gnb");
const headerRoot = ReactDOM.createRoot(headerElement);
const gnbRoot = ReactDOM.createRoot(gnbElement);
headerRoot.render(header);
gnbRoot.render(gnb);
