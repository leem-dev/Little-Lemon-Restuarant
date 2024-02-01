const seededGenerator = (date, hour) => {
  const m = 9;
  const d = new Date(date).getDate();
  const result = ((d + hour) % m) / 10;

  return result;
};

const fetchAPI = date => {
  let result = [];

  result.availableTimes = ["--- Select a Time ---"];

  for (let hour = 15; hour <= 23; hour++) {
    if (seededGenerator(date, hour) < 0.5) result.availableTimes.push(hour + ":00");
    if (seededGenerator(date, hour + 7) < 0.5) result.availableTimes.push(hour + ":30");
  }

  return result;
};

const submitAPI = formData => true;

const fakeAPI = {
  fetchAPI: fetchAPI,
  submitAPI: submitAPI,
};

export default fakeAPI;
