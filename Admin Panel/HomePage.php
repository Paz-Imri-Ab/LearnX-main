<!DOCTYPE html>
<html lang="he" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="HomePage.css">
    <title>לרניקס</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    <?php include 'Master.html'; ?>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
    <div class = "interface">
    <h3 class="i-name">קהילת מטלות</h3>
    <div class="add-assignment">
    <a href="#" class="add-assignment-btn">
        <i class="fas fa-plus"></i>
    </a>
</div>
<div>
    <div class="board">

        <table id="tasks">
            <thead>
                <tr>
                    <td>קורס</td>
                    <td>שם המטלה</td>
                    <td>תאריך הגשה</td>
                    <td>סטאטוס</td>
                    <td>שותפים</td>
                    <td>מייל מרצה</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="course">
                        <h4>פייתון</h4>
                    </td>
                    <td class="task-name">
                        <h4>מטלה 1</h4>
                        <p>משתנים</p>
                    </td>
                    <td class="date">
                        <h4>23.04.2024</h4>
                        <p>נשארו עוד 7 ימים להגשה</p>
                    </td>
                    <td class="active">
                        <p>פעיל</p>
                    </td>
                    <td class="partners">
                        <p>יסמין טייכנר</p>
                        <p>פז אביטבול</p>
                    </td>
                    <td class="lec-mail">
                        <h4>Example@gmail.com</h4>
                        <p>רז נאות</p>
                    </td>
                    <td class="edit"><a href="" #>עריכה</a></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </div>

</body>


</html>