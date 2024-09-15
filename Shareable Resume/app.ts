// Step No.1

let form = document.getElementById('shareable-resume') as HTMLFormElement;
let resume = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;


form.addEventListener('submit' , (e) =>{
    e.preventDefault();


// Step No.3
// collect user input fields

let username = (document.getElementById('username') as HTMLInputElement).value;
let name = (document.getElementById('name') as HTMLInputElement).value;
let email =( document.getElementById('email') as HTMLInputElement).value;
let number = (document.getElementById('number') as HTMLInputElement).value;
let dob = (document.getElementById('dob') as HTMLInputElement).value;
let education = (document.getElementById('education') as HTMLInputElement).value;
let experience = (document.getElementById('experience') as HTMLInputElement).value;
let skills = (document.getElementById('skills') as HTMLTextAreaElement).value;


// Step No.4
//save the user information in the database

const resumeData = {
    name,
    email,
    number,
    dob,
    education,
    experience,
    skills
    };
    localStorage.setItem(username , JSON.stringify(resumeData));

// Step No.5
// display user input in resume

const resumeHTML = `
    <h2><b>Shareable Resume</b></h2> 
    <br>
    <h3>Personel Information</h3>
    <br>
    <ul>
        <li><b><span contenteditable = "true">Name:</b> ${name}</span></li>
        <li><b><span contenteditable = "true">Email:</b> ${email}</span></li>
        <li><b><span contenteditable = "true">Phone Number:</b> ${number}</span></li>
        <li><b><span contenteditable = "true">Date of Birth:</b> ${dob}</span></li>
    </ul>

    <br>
    <h3>Education</h3>
    <p contenteditable = "true">${education}</p>


    <br>
    <h3>Experience</h3>
    <p contenteditable = "true">${experience}</p>

    <br>
    <h3>Skills</h3>
    <p contenteditable = "true">${skills}</p>
`;

//Setp No.6
if(resume){
    resume.innerHTML = resumeHTML
}else {
    console.error('The resume display element is missing.');
}


// Step No.7
// Shareable link
const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;

});
// Step No.8    
downloadPdfButton.addEventListener('click', () => {
    window.print();
});

// Step No.9
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('number') as HTMLInputElement).value = resumeData.number;
            (document.getElementById('dob') as HTMLInputElement).value = resumeData.dob;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
        }
    }
});
