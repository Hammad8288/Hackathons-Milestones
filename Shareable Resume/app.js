// Step No.1
var form = document.getElementById('shareable-resume');
var resume = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Step No.3
    // collect user input fields
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var dob = document.getElementById('dob').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Step No.4
    //save the user information in the database
    var resumeData = {
        name: name,
        email: email,
        number: number,
        dob: dob,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Step No.5
    // display user input in resume
    var resumeHTML = "\n    <h2><b>Shareable Resume</b></h2> \n    <br>\n    <h3>Personel Information</h3>\n    <br>\n    <ul>\n        <li><b><span contenteditable = \"true\">Name:</b> ".concat(name, "</span></li>\n        <li><b><span contenteditable = \"true\">Email:</b> ").concat(email, "</span></li>\n        <li><b><span contenteditable = \"true\">Phone Number:</b> ").concat(number, "</span></li>\n        <li><b><span contenteditable = \"true\">Date of Birth:</b> ").concat(dob, "</span></li>\n    </ul>\n\n    <br>\n    <h3>Education</h3>\n    <p contenteditable = \"true\">").concat(education, "</p>\n\n\n    <br>\n    <h3>Experience</h3>\n    <p contenteditable = \"true\">").concat(experience, "</p>\n\n    <br>\n    <h3>Skills</h3>\n    <p contenteditable = \"true\">").concat(skills, "</p>\n");
    //Setp No.6
    if (resume) {
        resume.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
    // Step No.7
    // Shareable link
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Step No.8    
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
// Step No.9
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('number').value = resumeData.number;
            document.getElementById('dob').value = resumeData.dob;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
