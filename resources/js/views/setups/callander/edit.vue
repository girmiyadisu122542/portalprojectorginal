<template>
<div>
    <div class="pagetitle">
        <h1>Callander edit</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Callander</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Update Callander
                            <router-link to="/home/all-callanders" class="btn btn-primary" style="float:right"> All Callanders</router-link>

                        </h5>
                        <form class="row g-3" @submit.prevent="UpdateCallander">
                            <div class="col-md-12">
                                <label for="inputNanme4" class="form-label"> <b>Date</b> </label>
                                <input type="date" class="form-control" v-model="form.date" placeholder="Enter date">
                                <div class="text-danger" v-if="errors.date">*{{ errors.date[0] }}</div>
                            </div>
                    <div class="col-md-12">
                                <label for="inputNanme4" class="form-label"> <b>Activity Title</b> </label>
                                <input type="text" class="form-control" v-model="form.activity" placeholder="Enter activity title">
                                <div class="text-danger" v-if="errors.activity">*{{ errors.activity[0] }}</div>
                            </div>
                     <div class="col-md-12">
                               <select class="form-control" v-model="form.acadamic_year" name="acadamic_year" id="" >
                               <option value="">select Acadamic year</option>

                                <option :value="accadamic_year.id"  v-for="accadamic_year in accadamic_years" :key="accadamic_year.id">{{accadamic_year.name}}</option>


                               </select>
                                <div class="text-danger" v-if="errors.accadamic_year">*{{ errors.accadamic_year[0] }}</div>
                            </div>
                      <div class="col-md-12">
                               <select class="form-control" v-model="form.addmission_type" name="acadamic_year" id="" >
                               <option value="">select admition type</option>

                                <option :value="addmission_type.id"  v-for="addmission_type in addmission_types" :key="addmission_type.id">{{addmission_type.name}}</option>


                               </select>
                                <div class="text-danger" v-if="errors.addmission_type">*{{ errors.addmission_type[0] }}</div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <button type="reset" class="btn btn-secondary">Reset</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            errors: {},
            accadamic_years:{},
            addmission_types:{},

            form: {
                date: '',
                activity: '',
                acadamic_year: '',
                addmission_type: '',


            },

        }
    },
mounted(){
           let id = this.$route.params.id;
        this.axios.get('/api/user/callanders/' + id)
            .then(({
                data
            }) => {
                this.form = data
            }).catch(error => {

                Toast.fire({
                    icon: 'success',
                    title: error.response.data.message
                });
            })
        this.axios.get("/api/user/acadamic_years").then(res=>{
            this.accadamic_years=res.data;

            console.log(this.accadamic_years)
            })
this.axios.get("/api/user/admission_types").then(res=>{
this.addmission_types=res.data;
console.log(this.addmission_types)
})

},
    methods: {



        UpdateCallander() {
            let id=this.$route.params.id;
            this.axios.patch('/api/user/callanders/'+id, this.form)
                .then(({
                    data
                }) => {
                    this.$router.push('/home/all-callanders')
                        Toast.fire({
                                icon: 'success',
                                title: 'callander updated successfully!'
                            });
                }).catch(error => {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        case 403:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: 'Something went wrong please contact system admin!',
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Some error occurred, Please try again!',
                                time: 5000
                            });
                            break;
                    }
                })
        }
    },
}
</script>
