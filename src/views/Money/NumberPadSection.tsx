import React, { useState } from "react";
import { Wrapper } from "./NumberPadSection/Wrapper";
import { generateOutput } from "./NumberPadSection/generateOutput";

const NumberPadSection = () => {
  const [output, setOutput] = useState("0");
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    if (text === "ok") {
      // TODO
      return;
    }
    setOutput(generateOutput(text, output));
  };

  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">ok</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export { NumberPadSection };
