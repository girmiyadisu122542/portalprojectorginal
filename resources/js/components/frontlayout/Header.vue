<template>
<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center ">

        <h1 class="logo me-auto"><a href="index.html">Mentor</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar order-last order-lg-0 ">
            <ul>
                <li><router-link class="active" to="/">Home</router-link></li>
                <li><a href="about.html">Announcement</a></li>
                <li><a href="courses.html">Programs</a></li>
                <li class="dropdown"><a href="#"><span>Admission</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="#">Apply For Admission</a></li>
                        <li><a href="#">Admission Status</a></li>
                        <li><a href="#">Upload Documents</a></li>
                        <li><a href="#">Official Tracking</a></li>
                         <li><a href="#">Special Transfer</a></li>
                        <li><a href="#">Staf Transfer</a></li>
                    </ul>
                </li>
                    <li class="dropdown"><a href="#"><span>Exams</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="#">Apply For Exams</a></li>
                        <li><a href="#">Admission Status</a></li>
                        <li><a href="#">Upload Documents</a></li>
                        <li><a href="#">Official Tracking</a></li>
                         <li><a href="#">Special Transfer</a></li>
                        <li><a href="#">Staf Transfer</a></li>
                    </ul>
                </li>
                <li><a href="events.html">Events</a></li>
                <li><a href="pricing.html">Pricing</a></li>

                <li class="dropdown"><a href="#"><span>Freshman</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><router-link to="/fresh_man_info">My Username and Password</router-link></li>
                        <li><router-link to="/fresh_man_info">My Dormitary</router-link></li>
                        <li><router-link to="/fresh_man_info">My Section</router-link></li>
                        <li><router-link to="/fresh_man_info">Registration Procedure</router-link></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

        <router-link to="/login" class="get-started-btn">Sign In</router-link>

    </div>
</header>
</template>

<script>
export default {

}
</script>
