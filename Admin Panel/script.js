$(document).ready(function() {
    let courses = [];
    let editIndex = -1; // Index of the course being edited, -1 if adding new

    function addOrUpdateCourse() {
        const courseName = $('#course').val();
        const grade = parseFloat($('#grade').val());
        const credits = parseInt($('#credits').val());

        if (courseName && !isNaN(grade) && grade >= 0 && !isNaN(credits) && credits > 0) {
            const course = { courseName, grade, credits };

            if (editIndex > -1) {
                courses[editIndex] = course; // Update existing course
                editIndex = -1; // Reset edit index
            } else {
                courses.push(course); // Add new course
            }

            resetFormAndButton();
            updateCoursesTable(); // Update the table
        } else {
            alert('נא להזין נתונים תקינים לכל השדות');
        }
    }

    function calculateGPA() {
        let totalQualityPoints = 0;
        let totalCredits = 0;

        courses.forEach(course => {
            totalQualityPoints += course.grade * course.credits;
            totalCredits += course.credits;
        });

        const gpa = totalCredits > 0 ? totalQualityPoints / totalCredits : 0;

        if (!isNaN(gpa) && totalCredits > 0) {
            $('#gpaResult').text(`${gpa.toFixed(2)}`);
            $('#gpaResult').css('display', 'flex'); // Or 'block', depending on your layout needs
        } else {
            $('#gpaResult').text('אין מספיק נתונים לחישוב');
			$('#gpaResult').css('display', 'flex'); // Or 'block', depending on your layout needs

        }
    }

    function updateCoursesTable() {
        const tbody = $('table tbody');
        tbody.empty(); // Clear the table body to avoid duplicate entries.

        courses.forEach((course, index) => {
            const row = `<tr>
                <td>${course.courseName}</td>
                <td>${course.grade}</td>
                <td>${course.credits}</td>
                <td class="edit"><a href="#" class="edit-btn" data-index="${index}">ערוך</a></td>
                <td class="delete"><a href="#" class="delete-btn" data-index="${index}">מחק</a></td>
            </tr>`;
            tbody.append(row);
        });

        attachEventListeners();
    }

    function attachEventListeners() {
        $('.edit-btn').off('click').on('click', function(e) {
            e.preventDefault(); // Prevent default anchor action
            editIndex = $(this).data('index');
            const course = courses[editIndex];
            $('#course').val(course.courseName);
            $('#grade').val(course.grade);
            $('#credits').val(course.credits);
            $('#addCourseBtn').text('עדכן קורס'); // Change button text to indicate update action
        });

        $('.delete-btn').off('click').on('click', function(e) {
            e.preventDefault(); // Prevent default anchor action
            const index = $(this).data('index');
            courses.splice(index, 1); // Remove the course from the array
            updateCoursesTable(); // Refresh the table
        });
    }

    function resetFormAndButton() {
        $('#course').val('');
        $('#grade').val('');
        $('#credits').val('');
        $('#addCourseBtn').text('הוסף קורס'); // Reset the button text to "הוסף קורס"
    }

    // Attach event listeners to buttons
    $('#addCourseBtn').off('click').click(addOrUpdateCourse);
    document.querySelector('#calculateGpaBtn').addEventListener('click', calculateGPA);

});


