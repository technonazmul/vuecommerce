<template>
<div id="nav" class="mb-5">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
           
            </li>

            <li class="nav-item" v-if="token">
            <router-link class="nav-link" to="/logout">Logout</router-link>
           
            </li>

            <li class="nav-item" v-for="menu in menus" :key="menu.id" v-else>
            <router-link class="nav-link" :to="menu.route">{{menu.name}}</router-link>
            </li>
            
            
            
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
</div>
</template>

<script>

export default ({
    data() {
        return{
            menus:[
                {id:1,name:'login',route:'/login'},
                {id:2,name:'register',route:'/register'}
            ],
            token:token,
        }
    },
})
</script>

