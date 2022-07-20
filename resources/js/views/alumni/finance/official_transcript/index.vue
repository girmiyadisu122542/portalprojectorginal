<template>
<div>
    <div class="pagetitle">
        <h1> List of Official Transcript Applicants</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Applicants</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Fresh Students List
                            <router-link to="/home/create-fresh_students" class="btn btn-primary" style="float:right"> Add Fresh Students</router-link>

                        </h5>
                        <!-- Table with stripped rows -->
                        <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                            <div class="dataTable-top">
                                <div class="dataTable-dropdown"><label><select class="dataTable-selector">
                                            <option value="5">5</option>
                                            <option value="10" selected="">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                            <option value="25">25</option>
                                        </select> entries per page</label></div>
                                <div class="dataTable-search"><input class="dataTable-input" placeholder="Search..." type="text"></div>
                            </div>
                            <div class="table-responsive">
                                <table class="table align-items-center table-flush ">
                                    <thead class="table-light">
                                        <tr>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">#</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">First Name</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Last Name</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Bank Statement</a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Reciept Number </a></th>
                                            <th scope="col" data-sortable=""><a href="#" class="dataTable-sorter">Actions</a></th>
                                         
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(official,index) in applicants" :key="official.id">
                                            <th scope="row">{{ index+1 }}</th>
                                            <td>{{ official.first_name }}</td>
                                            <td>{{ official.lastname_name }}</td>
                                            <td>{{ official.grand_father_name }}</td>
                                            <td>{{ official.grand_father_name }}</td>
                                         
                                           
                                            <td>
                                                <router-link :to="{name:'EditFreshStudent',params:{id:official.id}}" class="btn btn-primary"><i class="ri-edit-2-fill"></i></router-link>
                                                <button class="btn btn-danger" @click.prevent="deleteFreshStudent(official.id)"><i class="bi bi-trash-fill"></i></button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="dataTable-bottom">
                                <div class="dataTable-info">Showing 1 to 5 of 5 entries</div>
                                <nav class="dataTable-pagination">
                                    <ul class="dataTable-pagination-list"></ul>
                                </nav>
                            </div>
                        </div>
                        <!-- End Table with stripped rows -->

                    </div>
                </div>

            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    created() {
        this.allApplicants();
    },
    data() {
        return {
            applicants: {}
        }
    },
    methods: {
        allApplicants() {
            this.axios.get('/api/user/officialApplicants')
                .then(({
                    data
                }) => {
                    this.applicants = data
                }).catch()
        },
        // deleteFreshStudent(id) {
        //     Swal.fire({
        //         title: 'Are you sure?',
        //         text: "You won't be able to revert this!",
        //         icon: 'error',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Yes, delete it!'
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             this.axios.delete('/api/user/fresh_students/' + id)
        //                 .then(() => {
        //                     this.freshStudents = this.freshStudents.filter(student => {
        //                         return student.id != id

        //                     })
        //                     //Notification.success(); 
        //                     Toast.fire({
        //                         icon: 'error',
        //                         title: 'Student deleted successfully!'
        //                     })

        //                 }).catch(error => {

        //                     this.flashMessage.error({
        //                         message: error.response.data.message,
        //                         time: 5000
        //                     });

        //                 })
        //         }

        //     })

        // }
    },

}
</script>
