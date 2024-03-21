import React from "react";

function TimerComponent() {
  const time = React.useState(0)[0];
  const setTime = React.useState(0)[1];
  console.log("컴포넌트 업데이트");
  const updateTime = () => {
    return setTime(time + 1);
  };
  return (
    <div>
      <h3>{time}초</h3>
      <button onClick={updateTime}>1씩 올려주세요</button>
    </div>
  );
}

export default TimerComponent;
