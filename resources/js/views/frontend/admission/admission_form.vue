<template>
<main id="main" class="main">
    <div class="pagetitle text-center  mybody  ">
        <h1 class="bg-success text-white"> WOLLO UNIVERSITY </h1>
        <h1 class="bg-success text-white">REGISTRAR AND ALUMNI DIRECTORATE</h1>
    </div><!-- End Page Title -->
    <!-- End Page Title -->

    <div class="row">
        <div class="col-lg-12">

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Application Information</h5>

                    <!-- Default Tabs -->
                    <ul class="nav nav-tabs d-flex" id="myTabjustified" role="tablist">
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link w-100" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-justified" type="button" role="tab" aria-controls="home" aria-selected="true">Undergraduate Application</button>
                        </li>
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-justified" type="button" role="tab" aria-controls="profile" aria-selected="false">Graduate Application</button>
                        </li>
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link w-100 active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-justified" type="button" role="tab" aria-controls="contact" aria-selected="false">Admission Status</button>
                        </li>
                    </ul>
                    <div class="tab-content pt-2" id="myTabjustifiedContent">
                        <div class="tab-pane fade" id="home-justified" role="tabpanel" aria-labelledby="home-tab">
                            <strong class="text-danger">There are no active application periods!!</strong>
                        </div>
                        <div class="tab-pane fade" id="profile-justified" role="tabpanel" aria-labelledby="profile-tab">

                            <div class="row">
                                <div class="col-md-6" v-for="(announce,index) in anouncements" :key="announce.id">
                                    <p><strong> {{ announce.title }} </strong></p>
                                    <p> <strong>Addmission Calander :{{announce.year.name}} Semister:{{announce.semister.name}}</strong></p>
                                    <p class="text-danger"><em>Application Date: From {{ announce.admission_start_date }} To {{ announce.admission_end_date }}</em></p>
                                    <p> <router-link :to="{name:'ApplicationForm',params:{id:announce.id}}" class="btn btn-primary">Apply Now</router-link>
                                        <a href="#" class="btn btn-primary">Upload Document</a> </p>
                                    <hr>
                                </div>

                            </div>

                        </div>
                        <div class="tab-pane fade active show" id="contact-justified" role="tabpanel" aria-labelledby="contact-tab">

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Admission Status </h5>
                                            <form class="row g-3" >
                                                <div class="col-md-4">
                                                    <label for="inputNanme4" class="form-label"> <b>Year of Application</b> </label>
                                                    <select class="form-select" id="floatingSelect" aria-label="State">
                                                        <option selected="" value="" disabled>Select Acadamic Year</option>
                                                        <option :value="year.id" v-for="year in acadamic_years" :key="year.id">
                                                            {{ year.name }}
                                                        </option>
                                                    </select>
                                                    <div class="text-danger" >*</div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="inputNanme4" class="form-label"> <b>Application Number</b> </label>
                                                    <input type="text" class="form-control" placeholder="Registration Number">
                                                </div>
                                                <div class="col-md-2" style="padding-top: 30px;">
                                                    <button type="submit" class="btn btn-primary">Search</button>
                                                </div>

                                            </form>
                                            <!-- Table with stripped rows -->
                                            <div>

                                            </div>
                                            <!-- End Table with stripped rows -->

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div><!-- End Default Tabs -->

                </div>
            </div>

        </div>

    </div>

</main>
</template>

<script>
export default {
    data() {
        return {
            anouncements: {},
            acadamic_years: {},
            erros:{}
        }
    },
    mounted() {
        this.axios.get('/api/user/getAnnouncements')
            .then(({
                data
            }) => {
                this.anouncements = data
            }).catch()

        this.axios.get('/api/user/acadamic_years')
            .then(({
                data
            }) => {
                this.acadamic_years = data
            }).catch()

    }
}
</script>
