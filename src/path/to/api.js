const fetchData = async date => {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`
    );
    const data = await response.json();
    return data.availableTimes;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default fetchData;
