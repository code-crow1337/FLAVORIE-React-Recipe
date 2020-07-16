import React from 'react';

const TimeUntil = ({ totalTime }) => {
  let finishedTime = '';
  finishedTime = transformTime(totalTime);
  if (checkTime(totalTime)) finishedTime = 'No time provided';

  return (
    <>
      <h3>
        Finish Time At :
        <span style={{ backgroundColor: 'lightgray' }}>{finishedTime}</span>
        O&apos;Clock
      </h3>
      <h4>
        (
        {Math.round(totalTime / 60)}
        hours)
      </h4>
    </>
  );
};
const transformTime = (totalTime) => {
  const unixtTimeStamp = Date.now();
  const totalTimeInMilliSec = (totalTime * 60);
  const date = new Date(unixtTimeStamp + totalTimeInMilliSec * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? minutes + '0' : minutes}`
}

const checkTime = (time) => {
  return time === 0;
};
export default TimeUntil;
