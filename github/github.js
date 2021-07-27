class Github {
    constructor(){   
        this.client_Secret = "fef0c8008e8c4460f6a0ea35bca0902006f153b8";
        this.client_id = "00397a828a845c39ea13";
    }

    async getUser(user){
        const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_Secret}`);

        const profileData = await profileRes.json();

        return {
            profileData : profileData
        }
        
    }
}

// ?client_id=${this.client_id}&client_secret=${this.client_Secret}