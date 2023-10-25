import React from "react";
import SunEditor, { buttonList } from "suneditor-react";

const CustomSunEditor = () => {
  return <SunEditor setOptions={{ buttonList: buttonList.complex }} />;
};

export default CustomSunEditor;
