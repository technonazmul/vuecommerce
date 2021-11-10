<template>
    <div class="col-6 offset-md-3">
        <div class="mb-3">
            <label for="userName" class="form-label">Name</label>
            <input type="text" v-model="user.name" class="form-control" id="userName">
        </div>
        <div class="mb-3">
            <label for="userEmail" class="form-label">Email address</label>
            <input type="email" v-model="user.email" class="form-control" id="userEmail">
        </div>
        <div class="mb-3">
            <label for="userPass" class="form-label">Password</label>
            <input type="password" v-model="user.password" class="form-control" id="userPass">
        </div>
        <button type="submit" @click="userRegister()" class="btn btn-primary">Register</button>
    </div>
</template>

<script>

export default({
    data() {
       return{
           user:{name:null,email:null,password:null}
       } 
    },
    methods:{
        userRegister() {
            axios.post('/register', {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
            })
            .then(function (response) {
                let AccessToken = response.data.access_token;
                localStorage.setItem('AToken', AccessToken);
                
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
})
</script>
