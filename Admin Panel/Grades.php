<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="grades.css">
    <title>לרניקס</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
    <?php include 'Master.html';?>
</head>
<body>
<h3 class="i-name">חישוב ממוצע ציונים</h3>
<div class="board">
<div class="table">
    <table id = "courses">
        <thead>
            <tr>
                <th>שם הקורס</th>
                <th>ציון</th>
                <th>נק"ז</th>
                <th></th>
                <th></th>

            </tr>
        </thead>
        <tbody>
            <!-- Courses will be added here -->
        </tbody>
    </table>
    <div class="calculate-gpa-btn-container">
        <button type="button" class="btn" id="calculateGpaBtn">חשב ממוצע</button>
        <div id="gpaResult"></div>
</div>
<div class="page-layout">
    <div class="calculator">
    <h1>חישוב ממוצע משוקלל לתואר</h1>
    <form id="gradesForm">
        <div class="form-group">
            <label for="course">שם הקורס:</label>
            <input type="text" id="course" class="form-control">
        </div>
        <div class="form-group">
            <label for="grade">ציון:</label>
            <input type="number" id="grade" class="form-control">
        </div>
        <div class="form-group">
            <label for="credits">נק"ז:</label>
            <input type="number" id="credits" class="form-control">
        </div>
        <button type="button" class="btn" id="addCourseBtn">הוסף קורס</button>

    </form>
</div>
</div>
</div>




    </body>
</html>



