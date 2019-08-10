export const meetupDay = (year, month, weekday, times) => {
  const days = {
    "1st": 1,
    "2nd": 2,
    "3rd": 3,
    "4th": 4,
    "5th": 5,
    teenth: 10
  };
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = "";
  if (times === "teenth") day = days[times];
  else if (times === "last") {
    day = 0;
    month += 1;
  } else {
    day = 1;
  }

  let data = new Date(year, month, day);
  let currentDayInData = data.getDate();
  let nameStartingDay = weekdays[data.getDay()];
  let indexStartingDay = weekdays.indexOf(nameStartingDay);
  let indexLookForDay = weekdays.indexOf(weekday);
  let distance = 0;

  if (times === "last") {
    while (indexStartingDay !== indexLookForDay) {
      if (indexStartingDay < 0) {
        indexStartingDay = 6;
      } else {
        indexStartingDay--;
      }
      distance++;
    }
  } else {
    while (indexStartingDay !== indexLookForDay) {
      if (indexStartingDay >= 6) {
        indexStartingDay = 0;
      } else {
        indexStartingDay++;
      }
      distance++;
    }
  }

  if (times === "teenth") {
    data.setDate(currentDayInData + distance);
  } else if (times === "last") {
    data.setDate(currentDayInData - distance);
  } else {
    data.setDate(currentDayInData + distance + 7 * days[times] - 7);
    if (data.getMonth() !== month) throw new Error("");
  }
  return data;
};
