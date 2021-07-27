const github = new Github;
const ui = new Ui;

const profileInput = document.querySelector('#profileInput');

profileInput.addEventListener('keyup', ()=>{
    let userName = profileInput.value;
    if(userName != ""){
        github.getUser(userName)
        .then( data => {
            if(data.profileData.message != "Not Found"){
                ui.diaplayProfile(data.profileData);      
                console.log(data.profileData);      
                ui.clearAlert();
            }else{
                // show alert
                ui.displayAlert();
            } 
        });
                   
    }else{
        // clear history (previous profile result)
        ui.hideProfile();
    }
        

})