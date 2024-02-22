// script.js
// Define an array to store events
let events = [];

// letiables to store event input fields and reminder list
let eventDateInput =
	document.getElementById("eventDate");
let eventTitleInput =
	document.getElementById("eventTitle");
let eventDescriptionInput =
	document.getElementById("eventDescription");
let reminderList =
	document.getElementById("reminderList");
let eventTimeInput = document.getElementById("eventTime");

// Counter to generate unique event IDs
let eventIdCounter = 1;

// Function to add events
function addEvent() {
	let date = eventDateInput.value;
	let time = eventTimeInput.value; // Retrieve the time value from the input
	let title = eventTitleInput.value;
	let description = eventDescriptionInput.value;

	if (date && title && time) { // Check if date, title, and time are provided
		let eventId = eventIdCounter++;
		let fullDate = new Date(date + 'T' + time); // Combine date and time

		events.push({
			id: eventId,
			date: fullDate.toISOString(), // Store the full date (date + time) in ISO format
			title: title,
			description: description
		});

		showCalendar(currentMonth, currentYear);
		eventDateInput.value = ""; // Clear the input fields after adding the event
		eventTitleInput.value = "";
		eventDescriptionInput.value = "";
		eventTimeInput.value = "";
		displayReminders();
	}
	else {
		// If not all fields are filled, you might want to alert the user.
		alert("Please fill in all fields.");
	}
}


// Function to delete an event by ID
function deleteEvent(eventId) {
	// Find the index of the event with the given ID
	let eventIndex =
		events.findIndex((event) =>
			event.id === eventId);

	if (eventIndex !== -1) {
		// Remove the event from the events array
		events.splice(eventIndex, 1);
		showCalendar(currentMonth, currentYear);
		displayReminders();
	}
}

<<<<<<< HEAD
// Function to edit events
function editEvent(eventId) {
    let eventIndex = events.findIndex(event => event.id === eventId);

    if (eventIndex !== -1) {
        let { date, title, description } = events[eventIndex];

        eventDateInput.value = new Date(date).toISOString().split('T')[0];
        eventTimeInput.value = new Date(date).toISOString().split('T')[1].substring(0, 5);
        eventTitleInput.value = title;
        eventDescriptionInput.value = description;

        events.splice(eventIndex, 1);
        showCalendar(currentMonth, currentYear);
        displayReminders();
    }
    // Add a class to the Edit button
    let editButton = document.getElementById("editButton");
    editButton.classList.add("edit-event-button");

}


// Function to display reminders
// Function to display reminders in a table
function displayReminders() {
    let remindersTable = document.getElementById("remindersTable");
    let remindersTableBody = document.getElementById("remindersTableBody");

    remindersTableBody.innerHTML = "";

    if (events.length > 0) {
        remindersTable.style.display = "table";

        for (let i = 0; i < events.length; i++) {
            let event = events[i];
            let eventDate = new Date(event.date);

            if (eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear) {
=======
// Function to display reminders
// Function to display reminders in a table
function displayReminders() {
    // Get the table where reminders will be displayed
    let remindersTable = document.getElementById("remindersTable");
    let remindersTableBody = document.getElementById("remindersTableBody");
    
    // Clear the existing rows
    remindersTableBody.innerHTML = "";
    
    if (events.length > 0) {
        // Make the table headers visible
        remindersTable.style.display = "table";
        
        for (let i = 0; i < events.length; i++) {
            let event = events[i];
            let eventDate = new Date(event.date);
            if (eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear) {
                // Create a new row and cells for the event data
>>>>>>> origin/main
                let row = remindersTableBody.insertRow();
                let titleCell = row.insertCell(0);
                let descriptionCell = row.insertCell(1);
                let dateCell = row.insertCell(2);
<<<<<<< HEAD
                let editCell = row.insertCell(3);
                let deleteCell = row.insertCell(4);

                titleCell.textContent = event.title;
                descriptionCell.textContent = event.description;
                let timeOptions = { hour: '2-digit', minute: '2-digit' };
                dateCell.textContent = eventDate.toLocaleDateString() + ' ' + eventDate.toLocaleTimeString('he-IL', timeOptions);

				let editButton = document.createElement("button");
                editButton.className = "edit-event";
                editButton.textContent = "עריכה";
                editButton.onclick = function () {
                    editEvent(event.id);
                };
                editCell.appendChild(editButton);

				let deleteButton = document.createElement("button");
=======
                let deleteCell = row.insertCell(3);

                // Fill cells with event data
                titleCell.textContent = event.title;
                descriptionCell.textContent = event.description;
				let timeOptions = { hour: '2-digit', minute: '2-digit' };
				dateCell.textContent = eventDate.toLocaleDateString() + ' ' + eventDate.toLocaleTimeString('he-IL', timeOptions);

                // Add a delete button for the event
                let deleteButton = document.createElement("button");
>>>>>>> origin/main
                deleteButton.className = "delete-event";
                deleteButton.textContent = "מחק";
                deleteButton.onclick = function () {
                    deleteEvent(event.id);
                };
                deleteCell.appendChild(deleteButton);
<<<<<<< HEAD

                
            }
        }
    } else {
=======
            }
        }
    } else {
        // Hide the table headers if there are no events
>>>>>>> origin/main
        remindersTable.style.display = "none";
    }
}

<<<<<<< HEAD

=======
>>>>>>> origin/main
// Function to generate a range of 
// years for the year select input
function generate_year_range(start, end) {
	let years = "";
	for (let year = start; year <= end; year++) {
		years += "<option value='" +
			year + "'>" + year + "</option>";
	}
	return years;
}

// Initialize date-related letiables
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

createYear = generate_year_range(1970, 2050);

document.getElementById("year").innerHTML = createYear;

let calendar = document.getElementById("calendar");

let months = [
	"ינואר",
	"פברואר",
	"מרץ",
	"אפריל",
	"מאי",
	"יוני",
	"יולי",
	"אוגוסט",
	"ספטמבר",
	"אוקטובר",
	"נובמבר",
	"דצמבר"
];
let days = [
	"ראשון", "שני", "שלישי", "רביעי",
	"חמישי", "שישי", "שבת"];

$dataHead = "<tr>";
for (dhead in days) {
	$dataHead += "<th data-days='" +
		days[dhead] + "'>" +
		days[dhead] + "</th>";
}
$dataHead += "</tr>";

document.getElementById("thead-month").innerHTML = $dataHead;

monthAndYear =
	document.getElementById("monthAndYear");
	
showCalendar(currentMonth, currentYear);
// Inside the loop where you create each day cell in showCalendar
if (
    date === today.getDate() &&
    year === today.getFullYear() &&
    month === today.getMonth()
) {
    cell.className = "date-picker today-date";
}

// Function to navigate to the next month
function next() {
	currentYear = currentMonth === 11 ?
		currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

// Function to navigate to the previous month
function previous() {
	currentYear = currentMonth === 0 ?
		currentYear - 1 : currentYear;
	currentMonth = currentMonth === 0 ?
		11 : currentMonth - 1;
	showCalendar(currentMonth, currentYear);
}

// Function to jump to a specific month and year
function jump() {
	currentYear = parseInt(selectYear.value);
	currentMonth = parseInt(selectMonth.value);
	showCalendar(currentMonth, currentYear);
}

// Function to display the calendar
function showCalendar(month, year) {
	let firstDay = new Date(year, month, 1).getDay();
	tbl = document.getElementById("calendar-body");
	tbl.innerHTML = "";
	monthAndYear.innerHTML = months[month] + " " + year;
	selectYear.value = year;
	selectMonth.value = month;

	let date = 1;
	for (let i = 0; i < 6; i++) {
		let row = document.createElement("tr");
		for (let j = 0; j < 7; j++) {
			if (i === 0 && j < firstDay) {
				cell = document.createElement("td");
				cellText = document.createTextNode("");
				cell.appendChild(cellText);
				row.appendChild(cell);
			} else if (date > daysInMonth(month, year)) {
				break;
			} else {
				cell = document.createElement("td");
				cell.setAttribute("data-date", date);
				cell.setAttribute("data-month", month + 1);
				cell.setAttribute("data-year", year);
				cell.setAttribute("data-month_name", months[month]);
				cell.className = "date-picker";
				cell.innerHTML = "<span>" + date + "</span";

				if (
					date === today.getDate() &&
					year === today.getFullYear() &&
					month === today.getMonth()
				) {
					cell.className = "date-picker selected";
				}

				// Check if there are events on this date
				if (hasEventOnDate(date, month, year)) {
					cell.classList.add("event-marker");
					cell.appendChild(
						createEventTooltip(date, month, year)
				);
				}
				if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
					cell.classList.add("today-date"); // This adds the class without removing 'date-picker'
				}
				row.appendChild(cell);
				date++;
			}
		}
		tbl.appendChild(row);
	}


    let dateCells = document.querySelectorAll('.date-picker');
    dateCells.forEach(cell => {
        cell.addEventListener('click', function() {
            // Remove 'selected' class from all date cells
            dateCells.forEach(c => c.classList.remove('selected'));

            // Add 'selected' class to the clicked cell
            this.classList.add('selected');

            // Update the eventDateInput with the selected date in format YYYY-MM-DD
            let selectedDate = this.getAttribute('data-year') + '-' +
                               this.getAttribute('data-month').padStart(2, '0') + '-' +
                               this.getAttribute('data-date').padStart(2, '0');
            eventDateInput.value = selectedDate;
        });
    });
}


// Function to create an event tooltip
function createEventTooltip(date, month, year) {
	let tooltip = document.createElement("div");
	tooltip.className = "event-tooltip";
	let eventsOnDate = getEventsOnDate(date, month, year);
	for (let i = 0; i < eventsOnDate.length; i++) {
		let event = eventsOnDate[i];
		let eventDate = new Date(event.date);
		let timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false }; // hour12: false for 24hr format
        let eventTime = eventDate.toLocaleTimeString('he-IL', timeOptions);
		let eventText = `<strong>${event.title}</strong>  ${event.description}  ${eventTime}`;
		let eventElement = document.createElement("p");
		eventElement.innerHTML = eventText;
		tooltip.appendChild(eventElement);
	}
	return tooltip;
}

// Function to get events on a specific date
function getEventsOnDate(date, month, year) {
	return events.filter(function (event) {
		let eventDate = new Date(event.date);
		return (
			eventDate.getDate() === date &&
			eventDate.getMonth() === month &&
			eventDate.getFullYear() === year
		);
	});
}

// Function to check if there are events on a specific date
function hasEventOnDate(date, month, year) {
	return getEventsOnDate(date, month, year).length > 0;
}

// Function to get the number of days in a month
function daysInMonth(iMonth, iYear) {
	return 32 - new Date(iYear, iMonth, 32).getDate();
}

// Call the showCalendar function initially to display the calendar
showCalendar(currentMonth, currentYear); 
