let form = document.getElementById('editable-resume') as HTMLFormElement;
let resume = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit' , (e) =>{
    e.preventDefault();


// collect user input fields

let Fname = (document.getElementById('name') as HTMLInputElement).value;
let email =( document.getElementById('email') as HTMLInputElement).value;
let number = (document.getElementById('number') as HTMLInputElement).value;
let dob = (document.getElementById('dob') as HTMLInputElement).value;
let education = (document.getElementById('education') as HTMLInputElement).value;
let experience = (document.getElementById('experience') as HTMLInputElement).value;
let skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

// display user input in resume

const resumeHTML = `
    <h2><b>Editable Resume</b></h2> 
    <br>
    <h3>Personel Information</h3>
    <br>
    <ul>
        <li><b><span contenteditable = "true">Name:</b> ${Fname}</span></li>
        <li><b><span contenteditable = "true">Email:</b> ${email}</span></li>
        <li><b>P<span contenteditable = "true">hone Number:</b> ${number}</span></li>
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


if(resume){
    resume.innerHTML = resumeHTML
}else {
    console.error('The resume display element is missing.');
}
});