import MyParagraph from "./MyParagraph";
import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

// this is for optimizing functional components. Will cause skipping of re-rendering components
// if its props have not changed
export default React.memo(DemoOutput);
