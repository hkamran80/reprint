import Vue from "vue";
import VueRouter from "vue-router";
import BlogFeed from "../views/BlogFeed.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Blog",
        component: BlogFeed
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/posts/:post",
        name: "Post",
        component: () =>
            import(/* webpackChuckName: "post" */ "../views/BlogPost.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
