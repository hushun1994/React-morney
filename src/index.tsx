import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "index.scss";

ReactDOM.render(<App />, document.getElementById("root"));

if (document.documentElement.clientWidth > 500) {
  window.alert("请使用手机打开本页面，以保证浏览效果");
  const wrapper = document.createElement("div");
  wrapper.style.width = "100vw";
  wrapper.style.height = "100vh";
  wrapper.style.position = "absolute";
  wrapper.style.left = "0";
  wrapper.style.top = "0";
  wrapper.style.background = "rgba(3,3,3,0.2)";
  const img = document.createElement("img");
  img.src = "./qrcode.png";
  img.style.position = "fixed";
  img.style.left = "50%";
  img.style.top = "50%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.boxShadow = "0 0 10px rgba(0,0,0,0.25)";
  document.body.appendChild(img);
  wrapper.appendChild(img);
  document.body.appendChild(wrapper);
  wrapper.addEventListener("click", (e) => {
    if (e.target === wrapper) wrapper.style.display = "none";
  });
}
