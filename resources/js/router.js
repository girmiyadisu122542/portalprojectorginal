import Vue from "vue";
import Auth from "./Auth.js";
import Router from "vue-router";
// import Wellcome from './views/Wellcome.vue'
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import login from "./views/auth/login.vue";
import Register from "./views/auth/register.vue";
import Forget from "./views/auth/forget.vue";
import Wellcome from './views/Wellcome.vue'
import Index from './views/index.vue'
// users route
import ViewUser from "./views/users/index.vue";
Vue.use(Router);

const routes = [
   
      {
        path:'/',
        component:Wellcome,
        children:[
            {
                path: "",
                name: "Index",
                component: Index,
            },
            {
                path: "login",
                name: "login",
                component: login,
            },
            {
                path: "register",
                name: "register",
                component: Register,
            },
            {
                path: "forget",
                name: "forget",
                component: Forget,
            },
            //fresh man info
            {
                path:'fresh_man_info',
                name:'Freshman Info',
                component:()=>import('./views/frontend/freshman/view_info.vue')

            },
            //announcement
            {
                path:'announcemnet_list',
                name:'AnnouncementList',
                component:()=>import('./views/frontend/announcement/announcemnet_list.vue')
            },
            {
                path:'announcemnet_detail/:id',
                name:'AnnouncementDetail',
                component:()=>import('./views/frontend/announcement/aanouncement_detail.vue')
            },
            //admission 
            {
                path:'admission_form',
                name:'AdmissionForm',
                component:()=>import('./views/frontend/admission/admission_form.vue')
            },
             {
                path:'application_form/:id',
                name:'ApplicationForm',
                component:()=>import('./views/frontend/admission/application_form.vue')
             },
            //programs
            {
                path:'programs',
                name:'Programs',
                component:()=>import('./views/frontend/programs.vue')
            },
            //official transcript
            {
                path:'official_transcript_form',
                name:'OfficailTranscript',
                component:()=>import('./views/frontend/alumni/official_transcript.vue')
            },
          

          
        ]
      } ,

    {
        path: "/home",
        component: Home,
        children: [
            {
                path: "",
                name: "dashboard",
                component: Dashboard,
            },
            //users
            {
                path: "all-users",
                name: "Viewusers",
                component: ViewUser,
            },
            {
                path: "add-user",
                name: "AddUsers",
                component: () => import("./views/users/create.vue"),
            },
            {
                path: "edit-user/:id",
                name: "EditUser",
                component: () => import("./views/users/edit.vue"),
            },
            //colleges
            {
                path: "all-colleges",
                name: "AllColleges",
                component: () =>
                    import("./views/accadamics/colleges/index.vue"),
            },
            {
                path: "create-colleges",
                name: "CreateColleges",
                component: () =>
                    import("./views/accadamics/colleges/create.vue"),
            },
            {
                path: "edit-college/:id",
                name: "EditCollege",
                component: () => import("./views/accadamics/colleges/edit.vue"),
            },
            //departements
            {
                path: "all-departements",
                name: "AllDepartments",
                component: () =>
                    import("./views/accadamics/departements/index.vue"),
            },
            {
                path: "create-departement",
                name: "CreateDepartment",
                component: () =>
                    import("./views/accadamics/departements/create.vue"),
            },
            {
                path: "edit-departement/:id",
                name: "EditDepartment",
                component: () =>
                    import("./views/accadamics/departements/edit.vue"),
            },

            //Acadamic year
            {
                path: "all-acadamic_year",
                name: "AllAcadamicYear",
                component: () =>
                    import("./views/setups/Accadamic_year/index.vue"),
            },
            {
                path: "create-acadamic_year",
                name: "CreatAcadamicYear",
                component: () =>
                    import("./views/setups/Accadamic_year/create.vue"),
            },
            {
                path: "edit-acadamic_year/:id",
                name: "EditAcadamicYear",
                component: () =>
                    import("./views/setups/Accadamic_year/edit.vue"),
            },
            //Semister
            {
                path: "all-semister",
                name: "AllSemister",
                component: () => import("./views/setups/semister/index.vue"),
            },
            {
                path: "create-semister",
                name: "CreateSemister",
                component: () => import("./views/setups/semister/create.vue"),
            },
            {
                path: "edit-semister/:id",
                name: "EditSemister",
                component: () => import("./views/setups/semister/edit.vue"),
            },
            //Study level
            {
                path: "all-study_level",
                name: "AllStudyLevel",
                component: () => import("./views/setups/study_level/index.vue"),
            },
            {
                path: "create-study_level",
                name: "CreateStudyLevel",
                component: () => import("./views/setups/study_level/create.vue"),
            },
            {
                path: "edit-study_level/:id",
                name: "EditStudyLevel",
                component: () => import("./views/setups/study_level/edit.vue"),
            },
             //Admission type 
             {
                path: "all-admission_type",
                name: "AllAdmissionType",
                component: () => import("./views/setups/admission_type/index.vue"),
            },
            {
                path: "create-admission_type",
                name: "CreateAdmissionType",
                component: () => import("./views/setups/admission_type/create.vue"),
            },
            {
                path: "edit-admission_type/:id",
                name: "EditAdmissionType",
                component: () => import("./views/setups/admission_type/edit.vue"),
            },


            /// profile
            {
                path:'user-profile',
                name:'UserProfile',
                component:()=>import("./views/user_profile/index.vue")
            },


             //Announcement type 
             {
                path: "all-announcement",
                name: "AllAnnouncement",
                component: () => import("./views/setups/announcement/index.vue"),
            },
            {
                path: "create-announcement",
                name: "CreateAnnouncement",
                component: () => import("./views/setups/announcement/create.vue"),
            },
            {
                path: "edit-announcement/:id",
                name: "EditAnnouncement",
                component: () => import("./views/setups/announcement/edit.vue"),
            },
            // fresh student
            {
                path: "all-fresh_students",
                name: "AllFreshStudent",
                component: () => import("./views/students/fresh/index.vue"),
            },
            {
                path: "create-fresh_students",
                name: "CreateFreshStudent",
                component: () => import("./views/students/fresh/create.vue"),
            },
            {
                path: "edit-fresh_students/:id",
                name: "EditFreshStudent",
                component: () => import("./views/students/fresh/edit.vue"),
            },
            // graduate student
            {
                path: "all-graduated_students",
                name: "AllGraduateStudent",
                component: () => import("./views/students/graduate/index.vue"),
            },
            {
                path: "create-graduated_students",
                name: "CreateGraduateStudent",
                component: () => import("./views/students/graduate/create.vue"),
            },
            {
                path: "edit-graduated_students/:id",
                name: "EditGraduateStudent",
                component: () => import("./views/students/graduate/edit.vue"),
            },
<<<<<<< HEAD
            //payments
            {
                path: "all-payments",
                name: "AllPayments",
                component: () => import("./views/setups/payments/index.vue"),
            },
            {
                path: "create-payments",
                name: "CreatePayments",
                component: () => import("./views/setups/payments/create.vue"),
            },
            {
                path: "edit-payments/:id",
                name: "EditPayment",
                component: () => import("./views/setups/payments/edit.vue"),
            },
            //mails
            {
                path: "all-mails",
                name: "AllMails",
                component: () => import("./views/setups/mails/index.vue"),
            },
            {
                path: "create-mails",
                name: "CreateMails",
                component: () => import("./views/setups/mails/create.vue"),
            },
            {
                path: "edit-mails/:id",
                name: "EditMails",
                component: () => import("./views/setups/mails/edit.vue"),
=======
              // finance routes

            //official transcript 

            {
                path:'finance_official_transcript',
                name:'FinanceOfficailTranscript',
                component:()=>import('./views/alumni/finance/official_transcript/index.vue')
>>>>>>> 725b342 (Updated project including admission and official transcript)
            },
        ],
        meta: {
            requiresAuth: true,
        },
    },
];
const router = new Router({
    routes: routes,
    mode: "history",
});
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (Auth.check()) {
            next();
            return;
        } else {
            router.push("/");
        }
    } else {
        next();
    }
});

export default router;
