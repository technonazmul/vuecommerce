<template>
    <div>
    
<div class="wrapper">

  <navbar></navbar>
  <router-view/>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Blank Page</h1>
            <button @click="logOut()">Logout</button>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
  </div>
  <!-- /.content-wrapper -->

  <footer class="main-footer">
    <div class="float-right d-none d-sm-block">
      <b>Version</b> 3.1.0
    </div>
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->


    </div>
</template>

<script>

import '../../../node_modules/admin-lte/dist/css/adminlte.min.css'
import '../../../node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css'
import '../../../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.js'

import '../../../node_modules/admin-lte/dist/js/adminlte.min.js'
import navbar from './navbar.vue'
export default ({
    components: {
        navbar:navbar
    },
    methods:{
      logOut(){
        localStorage.removeItem('AToken'),
        this.$router.push('/login')
      }
    },
    mounted(){
      var access_token = localStorage.getItem('AToken')
      if(!access_token) {
        this.$router.push('/login')
      }
    }
})

</script>

