import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  clock: {
    backgroundColor: '#f2f1f1',
  },
}));

const TimeUntil = ({ totalTime }) => {
  const classes = useStyles();
  let finishedTime = '';
  finishedTime = transformTime(totalTime);
  if (checkTime(totalTime)) finishedTime = 'No time provided';

  return (
    <Box className={classes.clock} m={1} p={1}>
      <Typography variant="h5">
        Finish Time :  &nbsp;
        { finishedTime }
        {finishedTime === 'No time provided' ? '' : (
          <span>
            &nbsp;&nbsp;O&apos;Clock
          </span>
        )}
      </Typography>
      {finishedTime === 'No time provided' ? '' : (
        <Typography variant="h5">
          {totalTime < 60 ? `${totalTime} Minutes` : `${Math.round(totalTime / 60)} hours` }
        </Typography>
      )}
    </Box>
  );
};
const transformTime = (totalTime) => {
  const unixtTimeStamp = Date.now();
  const totalTimeInMilliSec = (totalTime * 60);
  const timeUntilFinished = new Date(unixtTimeStamp + totalTimeInMilliSec * 1000);
  const finishedHour = timeUntilFinished.getHours();
  const finishedMin = timeUntilFinished.getMinutes();
  return `${finishedHour < 10 ? `0${finishedHour}` : finishedHour}:${finishedMin < 10 ? finishedMin + '0' : finishedMin}`;
};

const checkTime = (time) => time === 0;

export default TimeUntil;
