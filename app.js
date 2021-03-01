const heading = document.querySelector(".heading-1");
const display = document.querySelector(".display");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const fetchData = async (searchTerm) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: searchTerm,
        appid: "e6e0227055cd0783e1e54aaf573d2cbd",
        units: "metric",
      },
    }
  );
  if (response.data.Error) {
    return [];
  }
  display.innerHTML = `

  <h1>City: ${response.data.name}   </h1>
  <h2>Tempreture: ${response.data.main.temp}&deg;C </h2>
   <img class="icon" src="https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png">`;
  const resData = response.data;
  return response.data;
};
btn.addEventListener("click", () => {
  console.log("haha");
  let Term = input.value;
  fetchData(Term);
});
