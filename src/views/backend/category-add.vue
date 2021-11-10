<template>
    <div>
  
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    

    <!-- Main content -->
    <section class="content">
      <div class="row pt-4">
        <div class="form-group col-md-6">
          <div class="card">
              <div class="card-body">
                <p v-if="errors.length">
                  <b>Please correct the following error(s):</b>
                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
                </p>
                <input type="text" class="form-control" placeholder="Category Name" v-model="category.name">
                <textarea cols="30" rows="10" placeholder="Category Description (optional)" class="form-control mt-2" v-model="category.description"></textarea>
                <p class="mt-3"><b>Conditions</b></p>
                <p>Products must match:</p>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="condition" id="condition1" checked value="1" v-model="product_must_match_condition">
                  <label class="form-check-label" for="condition1">
                    all conditions
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="condition" id="condition2" value="2" v-model="product_must_match_condition">
                  <label class="form-check-label" for="condition2">
                    any conditions
                  </label>
                </div>

                <div class="row mt-2" v-for="item in conditionsfield" :key="item">
            
                  <div class="col">
                    <select class="form-select" aria-label="Default select example" v-model="forcondition[item-1]" @change="forconditionFunction(item-1)">
                      <option value="TAG" selected>Product tag</option>
                      <option value="TITLE">Product title</option>
                      <option value="TYPE">Product type</option>
                    </select>
                  </div>
                  <div class="col">
                    <select class="form-select" aria-label="Default select example" v-model="inputform.condition[item-1]">
                      <template v-for="option in condition">
                        <option :value="option.value" :disabled="option.disable" v-if="option.select" :selected="option.select" :key="option.id">{{option.text}}</option>
                        <option :value="option.value" :disabled="option.disable" v-else :key="option.id">{{option.text}}</option>
                      </template>
                    </select>
                  </div>
                  <div class="col">
                    <select class="form-select" v-if="forcondition[item-1] == 'TAG' || forcondition[item-1] == 'TYPE'" v-model="tagsname[item-1]">
                      <option v-for="single in tags" :key="single.id">
                        {{single.name}}
                      </option>
                    </select>
                    <input type="text" class="form-control" v-model="tagsname[item-1]" v-else>
                  </div>
                  <div class="col"><i class="fas fa-times" @click="conditionfileddecreament"></i></div>
                </div>
                
                <button class="btn btn-primary mt-4" @click="conditionfiledincreament()">Add another condition</button>

                <p>
                  <button class="btn btn-primary mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Search Enginee Optimization / SEO
                  </button>
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    <input type="text" class="form-control" placeholder="Page Title">
                    <textarea class="form-control mt-2" cols="30" rows="10" placeholder="Description"></textarea>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="form-check mt-2">
                  <input type="checkbox" class="form-check-input" id="publish" checked v-model="category.web">
                  <label class="form-check-level" for="publish">Online Store</label>
              </div>
              <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="unpublish" checked v-model="category.mobile">
                  <label class="form-check-level" for="unpublish">Mobile App</label>
              </div>
              <div class="form-check">
                <label class="form-check-level" for="schedule">Schedule availability (optional)</label><br>
                  <input type="datetime-local" id="schedule">
              </div>

              {{conditionsfield}}{{forcondition}}{{inputform.condition}}{{tagsname}}
              {{category.name}}{{category.description}}{{product_must_match_condition}}
              {{category.web}}{{category.mobile}}
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="dropzone">
                <div class="fallback">
                  <input name="file" type="file" id="file" ref="file" @change="handleFileUpload()" />
                </div>
              </div>
            </div>
          </div>

          <button class="btn btn-success pl-5 pr-5" @click="submitAction()">Save</button>
        </div>
      </div>
    </section>
  </div>
  <!-- /.content-wrapper -->


    </div>
</template>

<script>

import '../../../node_modules/admin-lte/dist/css/adminlte.min.css'
import '../../../node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css'

import '../../../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.js'

import '../../../node_modules/admin-lte/dist/js/adminlte.min.js'


export default ({
    data(){
        return{
            errors: [],
            tags:null,
            forcondition:[
              'TAG',
            ],
            condition:[
              {id:1,text:'is equal to',value:'EQUALS',disable:false,select:true},
              {id:2,text:'contains',value:'CONTAINS',disable:true,select:false},
            ],
            inputform:{condition:[
              'EQUALS'
            ]},
            conditionsfield:1,
            tagsname:[],
            category:{name:null,description:null,mobile:true,web:true},
            product_must_match_condition:1,
            file: ''

        }
    },
    methods:{
      logOut(){
        localStorage.removeItem('AToken'),
        this.$router.push('/login')
      },
        checkForm() {
          if (this.category.name && this.category.description) {
            return true;
          }

          this.errors = [];

          if (!this.name) {
            this.errors.push('Name required.');
          }
          if (!this.description) {
            this.errors.push('Age required.');
          }

          return false;

        }
      ,
      submitAction() {
        
        if(this.checkForm() == true) {
          console.log('I am here');
          let formData = new FormData();
          formData.append('file', this.file);
          formData.append('name', this.category.name);
          formData.append('description', this.category.description);
          formData.append('product_must_match_condition', this.product_must_match_condition);
          formData.append('conditions', this.forcondition +'|'+ this.inputform.condition+'|' + this.tagsname);
          formData.append('web', this.category.web);
          formData.append('mobile', this.category.mobile);

          axios.post( '/category',
                  formData,
                  {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
                }
              ).then(response => {
              console.log(response);
          })
          .catch(function(error){
            console.log(error);
          });
        }
        
      },
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      },
      forconditionFunction(id) {
        if(this.forcondition[id] == 'TITLE') {
          this.inputform.condition[id] = 'CONTAINS'
          this.condition = [
            {id:1,text:'is equal to',value:'EQUALS',disable:true,select:false},
            {id:2,text:'contains',value:'CONTAINS',disable:false,select:true},
          ]
        }else if(this.forcondition[id] == 'TAG') {
          this.inputform.condition[id] = 'EQUALS'
          this.condition = [
            {id:1,text:'is equal to',value:'EQUALS',disable:false,select:true},
              {id:2,text:'contains',value:'CONTAINS',disable:true,select:false},
          ]
        }else if(this.forcondition[id] == 'TYPE') {
          this.inputform.condition[id] = 'EQUALS'
          this.condition = [
            {id:1,text:'is equal to',value:'EQUALS',disable:false,select:true},
              {id:2,text:'contains',value:'CONTAINS',disable:true,select:false},
          ]
        }
      },

  

      conditionfiledincreament() {
        this.conditionsfield = this.conditionsfield + 1
        this.forcondition[this.conditionsfield - 1] = 'TAG'
        this.inputform.condition[this.conditionsfield - 1] = 'EQUALS'
        this.tagsname[this.conditionsfield - 1] = this.tags[0].name
      },
      conditionfileddecreament() {
        this.conditionsfield = this.conditionsfield - 1
        this.$delete(this.forcondition, this.conditionsfield)
        this.$delete(this.inputform.condition, this.conditionsfield)
        this.$delete(this.tagsname, this.conditionsfield)
        
      }
      
    },
    mounted(){
      var access_token = localStorage.getItem('AToken')
      if(!access_token) {
        this.$router.push('/login')
      }
      axios.get('/tags')
        .then(response => {
             this.tags = response.data
             this.tagsname[0] = response.data[0].name
        })
        .catch(function (error) {
            console.log(error);
        });
    }
})

</script>

