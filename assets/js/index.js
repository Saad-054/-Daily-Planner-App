// This function displays the current day on top of calander
function displayCurrentDay() {
    const currentDate = dayjs().format("dddd, MMMM D, YYYY");
    document.getElementById("currentDay").textContent = currentDate;
}

// This Function generates the timeblocks from 9am-5pm
function generateTimeblocks() {
    const startTime = 9;
    const endTime = 17;

    const container = document.querySelector(".container");
    console.log("container", container);



    // This loops runs through each hour. Allows for the hour label to be shown 
    for (let hour = startTime; hour <= endTime; hour++) {
        const timeBlockDiv = document.createElement("div");
        console.log("timeblock", timeBlockDiv.children);
        timeBlockDiv.classList.add("row", "time-block");

        const hourDiv = document.createElement("div");
        hourDiv.classList.add("col-1", "hour");
        hourDiv.textContent = `${hour}:00`;
        timeBlockDiv.appendChild(hourDiv);

        // allows for colour coding dependant on wether time is in the past, present or future
        const eventDiv = document.createElement("textarea");
        eventDiv.classList.add("col-10", "description");

        if (hour < dayjs().hour()) {
            console.log("past", hour, eventDiv);
            eventDiv.classList.add("past");
        } else if (hour === dayjs().hour()) {
            eventDiv.classList.remove("future")
            eventDiv.classList.add("present");
            console.log("present", hour, eventDiv);
        } else {
            eventDiv.classList.add("future");
            console.log("future", hour, eventDiv);
        }

        // this section allows for saved event text from internal storage and populates area with saved text
        const savedEvent = localStorage.getItem(`event-${hour}`);
        console.log("saved event", hour); 
        if (savedEvent) {
            eventDiv.value = savedEvent;
        }

        timeBlockDiv.appendChild(eventDiv);

        // code for the save button
        const saveBtn = document.createElement("button");
        saveBtn.classList.add("col-1", "saveBtn");
        saveBtn.innerHTML = `<i class="fas fa-save"></i>`;
        
        // allows for data to be saved to local sotraged when save button clicked
        saveBtn.addEventListener("click", function (event) {
            console.log("save event", event);
            const eventText = eventDiv.value;
            localStorage.setItem(`event-${hour}`, eventText);
        });


        timeBlockDiv.appendChild(saveBtn);

        container.appendChild(timeBlockDiv);
    }   
}   


function main() {
    console.log("calling main");
    // allows for current day and timeblocks to be shown
    displayCurrentDay();
    generateTimeblocks();
}

main()