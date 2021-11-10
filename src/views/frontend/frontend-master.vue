<template>
    <div class="container">
        <navbar></navbar> 
        <router-view/>
    </div>
</template>

<script>
import navbar from './navbar.vue'
import home from './home.vue'

export default ({
    components: {
        navbar:navbar
    },
    mounted(){
      var access_token = localStorage.getItem('AToken')
      if(access_token) {
        this.$router.push('/dashboard')
      }
    }
})
</script>
