<!-- index.html -->
<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Calendar.css">
    <?php include 'Master.html'; ?>
    <title>לוח אירועים</title>
</head>
<body>
    <h3 class="i-name">לוח אירועים</h3>
    <div class="board">
        <div class="wrapper">
            <!-- Calendar and events will be flex items -->
            <div class="container-calendar" style="display: flex; flex-direction: row-reverse;">
                <!-- Calendar section -->
                <div id="calendar-section">
                    <h3 id="monthAndYear"></h3>
                    <div class="button-container-calendar">
                        <button id="previous" onclick="previous()">‹</button>
                        <button id="next" onclick="next()">›</button>
                    </div>
                    <table class="table-calendar" id="calendar" data-lang="en">
                        <thead id="thead-month"></thead>
                        <tbody id="calendar-body"></tbody>
                    </table>
                    <div class="footer-container-calendar">
                        <label for="month">דלג ל:</label>
                        <select id="month" onchange="jump()"></select>
                        <select id="year" onchange="jump()"></select>
                    </div>
                </div>
                <!-- Event section -->
                <div id="event-section">
                    <h1 class="cal-titles">יומן דינמי</h1>
                    <h3 class="cal-titles">הוסף אירוע</h3>
                    <input type="date" id="eventDate">
                    <input type="text" id="eventTitle" placeholder="כותרת האירוע">
                    <input type="text" id="eventDescription" placeholder="תיאור האירוע">
					<input type="time" id="eventTime" placeholder="שעה">
                    <button id="addEvent" onclick="addEvent()">הוסף</button>
                    <table id="remindersTable" style="display: none;">
                        <thead>
                            <tr>
                                <th>כותרת</th>
                                <th>תיאור</th>
                                <th>תאריך</th>
                                <th>פעולות</th>
                            </tr>
                        </thead>
                        <tbody id="remindersTableBody">
                        <!-- Event rows will be inserted here by JavaScript -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <script src="Calendar.js"></script>
</body>
</html>
