export function getFullDaysBeforeNewYear(date, month) {
  if (arguments.length !== 2 || isNaN(date) || isNaN(month) || date < 1 || date > 31 || month < 1 || month > 12) {
    return null;
}
const currentYear = 2023;
const inputDate = new Date(currentYear, month - 1, date);

if (isNaN(inputDate.getTime())) {
    return null;
}

const newYearDate = new Date(currentYear + 1, 0, 1);
const timeDifference = newYearDate - inputDate;
const fullDays = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

return fullDays;
}

export function formatWithWeekday(date) {
  if (!date || date instanceof Date !== true) {
    return '';
}

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const weekdayName = weekdays[date.getDay()];
const day = date.getDate();
const monthName = months[date.getMonth()];
const year = date.getFullYear();

return `${weekdayName}, ${day}, ${monthName} ${year}`;
}

export function isValidDate(date) {
  if (!(date instanceof Date)) {
    return false;
  }

  return !isNaN(date.getTime);
}

export function isAfter(date, dateToCompare) {
  return date.getTime() > dateToCompare.getTime();
} 

export function formatDistanceToNow(date) {
    if (date === undefined || date === null) {
      return 'Date is unknown';
    }

    const now = new Date();
    const timeDifference = now - date;

    const seconds = Math.floor(timeDifference / 1000);

    if (seconds < 30) {
        return 'less than a minute';
    } else if (seconds < 90) {
        return '1 minute';
    }

    const minutes = Math.floor(seconds / 60);

    if (minutes < 45) {
        return `${minutes} minutes`;
    } else if (minutes < 90) {
        return 'about 1 hour';
    }

    const formattedDate = `${padWithZero(date.getDate())}.${padWithZero(date.getMonth() + 1)}.${date.getFullYear()} ${padWithZero(date.getHours())}:${padWithZero(date.getMinutes())}:${padWithZero(date.getSeconds())}`;
    return formattedDate;
}
