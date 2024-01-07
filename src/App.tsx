import { useState } from "react";
import cat_kissing from "../public/images/cat kissing.gif";
import cat_heart from "../public/images/cat give heart.gif";
import "./App.css";

function App() {
  const [isYes, setIsYes] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const randomX = (): void => {
    const x = Math.floor(Math.random() * (400 - -90 + 1) + -90);
    // setX(`bottom-[${x}px]`);
    setX(x);
  };

  const randomY = (): void => {
    const y = Math.floor(Math.random() * (500 - -500 + 1) + -500);
    // setY(`left-[${y}px]`);
    setY(y);
  };

  const noButtonHandle = () => {
    randomY();
    randomX();
  };

  const noButtonStyle = {
    bottom: x,
    left: y,
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-[20px]">
      <h1 className="text-3xl font-bold text-[#f67286]">
        {isYes
          ? "See you on March 11th, darling! ❤️"
          : "Will you go out with me?"}
      </h1>
      <img
        className="object-cover w-[300px] h-[300px]"
        src={isYes ? cat_heart : cat_kissing}
        alt="cute gif"
      />
      <div className="flex gap-[50px]">
        <button
          onClick={() => setIsYes(true)}
          className="flex items-center justify-center w-[100px] h-[50px] bg-[pink] text-[white] font-bold rounded-[20px] active:bg-[#efa8b3]">
          Yes
        </button>
        <button
          onMouseOver={noButtonHandle}
          style={noButtonStyle}
          className="relative flex items-center justify-center w-[100px] h-[50px] bg-[white] text-[#efa8b3] font-bold rounded-[20px] border-[3px] border-[pink] cursor-pointer">
          No
        </button>
      </div>
    </div>
  );
}

export default App;
