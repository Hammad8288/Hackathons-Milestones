let toggle = document.getElementById('toggle') as HTMLButtonElement ;
let skills = document.getElementById('skills') as HTMLElement ;

toggle.addEventListener('click' , ()=>{
    if (skills.style.display == 'none'){
        skills.style.display = 'block' ;
    }else {
        skills.style.display = 'none' ;
    }
});
   