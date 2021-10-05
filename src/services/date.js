const months = [
  'ene',
  'feb',
  'mar',
  'abr',
  'may',
  'jun',
  'jul',
  'ago',
  'sep',
  'oct',
  'nov',
  'dic',
];

const getCurrentDate = () => {
  // Más info en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const year = date.getFullYear();
  return `${day} ${month}. ${year}`;
};

const getCurrentTime = () => {
  const momentoActual = new Date();
  const hora = momentoActual.getHours();
  const minuto = momentoActual.getMinutes();
  const segundo = momentoActual.getSeconds();
  const horaImprimible = hora + ' : ' + minuto + ' : ' + segundo;
  //setCurrentTime(horaImprimible);
  return horaImprimible;
};

//useEffect
const actualiseTime = () => {
  setTimeout(getCurrentTime, 1000);
};

const objToExport = {
  getCurrentDate: getCurrentDate,
  getCurrentTime: getCurrentTime,
  actualiseTime: actualiseTime,
};

export default objToExport;
