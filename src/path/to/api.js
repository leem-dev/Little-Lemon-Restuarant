const availableTimesByDate = {
  "2024-02-02": ["10:00", "11:00", "12:00"],
  "2024-02-03": ["10:00", "11:00", "12:00"],
  "2024-02-04": ["14:00", "15:00", "16:00"],
  "2024-02-05": ["10:00", "11:00", "12:00"],
  "2024-02-06": ["14:00", "15:00", "16:00"],
  "2024-02-07": ["10:00", "11:00", "12:00"],
  "2024-02-08": ["14:00", "15:00", "16:00"],
  "2024-02-09": ["10:00", "11:00", "12:00"],
  "2024-02-10": ["14:00", "15:00", "16:00"],
  "2024-02-11": ["10:00", "11:00", "12:00"],
  "2024-02-12": ["14:00", "15:00", "16:00"],
  "2024-02-13": ["10:00", "11:00", "12:00"],
  "2024-02-14": ["14:00", "15:00", "16:00"],
  "2024-02-15": ["10:00", "11:00", "12:00"],
  "2024-02-16": ["14:00", "15:00", "16:00"],
  "2024-02-17": ["10:00", "11:00", "12:00"],
  "2024-02-18": ["14:00", "15:00", "16:00"],
  "2024-02-19": ["10:00", "11:00", "12:00"],
  "2024-02-20": ["14:00", "15:00", "16:00"],
  "2024-02-21": ["10:00", "11:00", "12:00"],
  "2024-02-22": ["14:00", "15:00", "16:00"],
};

const myFetchAPI = date => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const formattedDate =
        date instanceof Date
          ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
              date.getDate()
            ).padStart(2, "0")}`
          : date;

      if (availableTimesByDate[formattedDate]) {
        resolve(availableTimesByDate[formattedDate]);
      } else {
        resolve([]); // Resolve with an empty array when no times are available
      }
    }, 1000);
  });
};

// const fetchAPI = date => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (availableTimesByDate[date]) {
//         resolve(availableTimesByDate[date]);
//       } else {
//         reject(new Error("No available times for the selected date."));
//       }
//     }, 1000);
//   });
// };

const mySubmitAPI = formData => {
  availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(
    time => time !== formData.time
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};

export { myFetchAPI, mySubmitAPI };
