<template>
<div>
    <main class="mybody">
        <div class="container">

            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div class="d-flex justify-content-center py-4">
                                <a href="index.html" class="logo d-flex align-items-center w-auto">
                                    <img src="assets/img/logo.png" alt="">
                                    <span class="d-none d-lg-block">NiceAdmin</span>
                                </a>
                            </div><!-- End Logo -->

                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Forget Account</h5>
                                    </div>
                                    <form class="row g-3 ">
                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Email</label>
                                            <input type="email" class="form-control" placeholder="Enter your email">
                                            <div class="text-danger"></div>

                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit">Submit</button>
                                        </div>
                                        <div class="col-12">
                                            <p class="small mb-0">Don't have account? <router-link to="/register" href="pages-register.html">Create an account</router-link>
                                            </p>
                                            <p>Already have Acount? <router-link to="/">Login</router-link>
                                            </p>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
    </main><!-- End #main -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mybody {
    background-color: aqua;
    background-image: url('https://images.freeimages.com/images/large-previews/da8/rainbow-1369910.jpg');
}
</style>
