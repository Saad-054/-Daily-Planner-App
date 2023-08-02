function displayCurrentDay() {
    const currentDate = dayjs().format("dddd, MMMM D, YYYY");
    document.getElementById("currentDay").textContent = currentDate;
}