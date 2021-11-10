<template>
    <div class="col-6 offset-md-3">
        <div class="mb-3">
            <label for="userEmail" class="form-label">Email address</label>
            <input type="email" v-model="user.email" class="form-control" id="userEmail">
        </div>
        <div class="mb-3">
            <label for="userPass" class="form-label">Password</label>
            <input type="password" v-model="user.password" class="form-control" id="userPass">
        </div>
        <button type="submit" @click="userLogin()" class="btn btn-primary">Login</button>
    </div>
</template>

<script>

export default({
    data() {
       return{
           user:{email:null,password:null}
       } 
    },
    methods:{
        userLogin() {

            axios.post('/login', {
                email: this.user.email,
                password: this.user.password,
            })
            .then(response => {
                let AccessToken = response.data.data.access_token
                localStorage.setItem('AToken', AccessToken)
                this.$router.push('/dashboard')
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    
})
</script>
