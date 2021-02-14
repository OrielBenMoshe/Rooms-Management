import moment from 'moment';

export const compareArrays = (a, b) => {
  a.length === b.length && a.every((v, i) => v === b[i]);
};

export const addZero = (i) => {
  if (i < 10) i = "0" + i;
  return i;
};

// Parse the time string to object of hours & minutes integer properties.
export const timeToObj = (formatedTime) => {
  /* the agrument have to be in "HH:mm" format */
  let hours = formatedTime.slice(0, 2);
  let minutes = formatedTime.slice(3);
  const timeObj = {
    hours: parseInt(hours),
    minutes: parseInt(minutes),
  };

  return timeObj;
};

export const roundUp = (formatedTime) => {
  const timeObj = timeToObj(formatedTime);

  if (timeObj.minutes <= 40 || timeObj.minutes >= 10) {
    timeObj.minutes = "30";
  } else {
    timeObj.hours = timeObj.hours === 24 ? "01" : addZero(timeObj.hours + 1);
    timeObj.minutes = "00";
  }

  return `${timeObj.hours}:${timeObj.minutes}`;
};


export const timeToMinutes = (time /** 'HH:MM' */) => {
  time = time.split(':');
  if (time[0] > 24 || time[1] > 59) return console.error('invalid time.');

  time = time.map(val => parseInt(val));
  time = (time[0] * 60) + time[1];
  return time;
}

export const minutesToTime = (minutes) => {
  if (minutes > 1499) return console.error('invalid time.');
  // console.log('minutes ', minutes);

  let hours = minutes / 60;
  minutes = Math.round((hours - Math.floor(hours)) * 60); 
  hours = Math.floor(hours);

  minutes = addZero(minutes);
  hours = addZero(hours);

  // console.log('hours ', hours, 'minutes ', minutes);
  return `${hours}:${minutes}`;
}

export const timesArrayBySteps = (start, end, steps) => {
  let timesArray = [start];
  let startInt = timeToMinutes(start);
  let endInt = timeToMinutes(end);
  let stepInt = startInt;

while (stepInt < endInt) {
  stepInt = stepInt + steps;
  timesArray.push(minutesToTime(stepInt));
}
  return timesArray;
};

export const increaseHour = (formatedTime) => {
  let hour = formatedTime.slice(0, 2);
  let minutes = formatedTime.slice(3);
  parseInt(hour); 
  hour == 24 ? hour = '01' : hour++;
  return `${hour}:${minutes}`;
}