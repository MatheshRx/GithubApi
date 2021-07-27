class Ui {
    constructor(){
        this.profileDiv = document.querySelector(".profile");
    }

    diaplayProfile(userData){
        this.profileDiv.innerHTML = `
            <div class="col-12 col-md-6 text-center ">
                <img src="${userData.avatar_url}" alt=""  class = "img-fluid" width = "60%">
            </div>
            <div class="col-12 col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Name :${userData.name}</li>
                    <li class="list-group-item">Login Name :${userData.login}</li>
                    <li class="list-group-item">Created :${userData.created_at}</li>
                    <li class="list-group-item">Udated :${userData.updated_at}</li>
                    <li class="list-group-item">Followers :${userData.followers}</li>
                </ul>
            </div>
        `;        
    }

    // showing alert  if response message property says not found (if profile not found)
    displayAlert(){
        // calling clearalert function to delete existing alert 
        this.clearAlert();

        const searchDiv = document.querySelector(".searchDiv");
        const profileParent = document.querySelector(".profileParent");
        let alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-danger alert-dismissible col-md-4 col-sm-8 mx-auto";
        alertDiv.textContent = "User Not Found";

        profileParent.insertBefore(alertDiv, searchDiv);
        
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // clearing alert after 3 seconds
    clearAlert(){
        let alertDiv = document.querySelector(".alert");
        
        if(alertDiv){
            alertDiv.remove();
        }
    }

    hideProfile(){
        this.profileDiv.innerHTML = "";
    }
}