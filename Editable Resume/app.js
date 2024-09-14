var form = document.getElementById('editable-resume');
var resume = document.getElementById('resume-display');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // collect user input fields
    var Fname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var dob = document.getElementById('dob').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // display user input in resume
    var resumeHTML = "\n    <h2><b>Resume</b></h2> \n    <br>\n    <h3>Personel Information</h3>\n    <br>\n    <ul>\n        <li><b>Name:</b> ".concat(Fname, "</li>\n        <li><b>Email:</b> ").concat(email, "</li>\n        <li><b>Phone Number:</b> ").concat(number, "</li>\n        <li><b>Date of Birth:</b> ").concat(dob, "</li>\n    </ul>\n\n    <br>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <br>\n    <h3>Experience</h3><br>\n    <p>").concat(experience, "</p>\n\n    <br>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n");
    if (resume) {
        resume.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
