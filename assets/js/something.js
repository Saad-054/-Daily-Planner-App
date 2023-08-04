function displayCurrentDay() {
    const currentDate = dayjs().format("dddd, MMMM D, YYYY");
    document.getElementById("currentDay").textContent = currentDate;
}

function generateTimeblocks() {
    const startTime = 9;
    const endTime = 17;

    const container = document.querySelector(".container");

    for (let hour = startTime; hour <= endTime; hour++) {
        const timeBlockDiv = document.createElement("div");
        timeBlockDiv.classList.add("row", "time-block");

        const hourDiv = document.createElement("div");
        hourDiv.classList.add("col-1", "hour");
        hourDiv.textContent = '${hour}:00';
        timeBlockDiv.appendChild(hourDiv);

        const eventDiv = document.createElement("textarea");
        eventDiv.classList.add("col-10", "description");

        if (hour < dayjs().hour()) {
            eventDiv.classList.add("past");
        } else if (hour === dayjs().hour()) {
            eventDiv.classList.add("present");
        } else {
            eventDiv.classList.add("future");
        }

        const savedEvent = localStorage.getItem('event-${hour}');
        if (savedEvent) {
            eventDiv.value = savedEvent;
        }

        timeBlockDiv.appendChild(eventDiv);

        const saveBtn = document.createElement("button");
        saveBtn.classList.add("col-1", "saveBtn");
        saveBtn.innerHTML = '<i class="fas fa-save"></i>';

        saveBtn.addEventListener("click", function () {
            const eventText = eventDiv.value;
            localStorage.setItem('event-${hour}', eventText);
        });


        timeBlockDiv.appendChild(saveBtn);

        container.appendChild(timeBlockDiv);
    }   
}   

displayCurrentDay();
generateTimeblocks();