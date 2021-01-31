
export const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
     
    return i;
  };

export const roundUp = (formatedTime) => {
    let hour = formatedTime.slice(0 , 2);
    let minutes = formatedTime.slice(3) ;
    parseInt(hour); 
    parseInt(minutes);

    if (minutes <= 40 || minutes >= 10) {
      minutes = '30';
    } else {
      hour = hour == 24 ? '01' : addZero(hour +1);
      minutes = '00'
    }
    
    return `${hour}:${minutes}`;
  };