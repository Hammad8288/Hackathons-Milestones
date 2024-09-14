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
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2> \n    <br>\n    <h3>Personel Information</h3>\n    <br>\n    <ul>\n        <li><b><span contenteditable = \"true\">Name:</b> ".concat(Fname, "</span></li>\n        <li><b><span contenteditable = \"true\">Email:</b> ").concat(email, "</span></li>\n        <li><b>P<span contenteditable = \"true\">hone Number:</b> ").concat(number, "</span></li>\n        <li><b><span contenteditable = \"true\">Date of Birth:</b> ").concat(dob, "</span></li>\n    </ul>\n\n    <br>\n    <h3>Education</h3>\n    <p contenteditable = \"true\">").concat(education, "</p>\n\n\n    <br>\n    <h3>Experience</h3>\n    <p contenteditable = \"true\">").concat(experience, "</p>\n\n    <br>\n    <h3>Skills</h3>\n    <p contenteditable = \"true\">").concat(skills, "</p>\n");
    if (resume) {
        resume.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
