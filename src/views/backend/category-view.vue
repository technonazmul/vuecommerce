<template>
    <div>
  
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <table class="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="item in categories" :key="item.id">
                    <td>{{item.name}}</td>
                    <td v-if="item.image !== null"> <img :src="'http://localhost/masterecommerce/public/files/'+item.image" alt="" width="50px;"> </td>
                    <td v-else> </td>
                    <td v-if="item.status == 1">Active</td>
                    <td v-else>Disable</td>
                    <td>
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <router-link class="dropdown-item" :to="{name:'category-update', params:{category_id:item.id}}">Edit</router-link>
                            <a class="dropdown-item" v-if="item.status == 1" @click="StatusChange(item.id)">Deactive</a>
                            <a class="dropdown-item" v-else @click="StatusChange(item.id)">Active</a>
                            <a class="dropdown-item" @click="distroy(item.id)">Delete</a>
                            
                        </div>
                        </div>
                        
                    </td>
                    </tr>
                    
                </tbody>
                </table>
        </div>
    </div>
</template>

<script>
export default ({
    data() {
        return{
            categories:null,
        }
    },
    methods:{
        StatusChange(id) {
            const content = {'requestfor': 'status'};
            const url = '/category/'+id;
            axios.put(url,content)
            .then(response => {
                console.log(response);
                this.categories = response.data
            })
            .catch(function (error) {
                console.log(error);
            });

        },
        distroy(id) {
            if(confirm("Do you really want to delete?")){
                axios.delete('/category/'+id)
                .then(response => {
                    console.log(response);
                    this.categories = response.data
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            
        }
    },
    mounted() {
        var access_token = localStorage.getItem('AToken')
        if(!access_token) {
            this.$router.push('/login')
        }

        axios.get('/category')
        .then(response => {
             this.categories = response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    }
})
</script>
