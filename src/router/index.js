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
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/posts/:post",
        name: "Post",
        component: () =>
            import(/* webpackChuckName: "post" */ "../views/BlogPost.vue")
    },
    {
        path: "/category/:category",
        name: "Category",
        component: () =>
            import(
                /* webpackChuckName: "category" */ "../views/CategoryView.vue"
            )
    },
    {
        path: "/error/404",
        name: "NotFound",
        component: () =>
            import(/* webpackChuckName: "notfound" */ "../views/NotFound.vue")
    },
    {
        path: "*",
        redirect: from => ({
            name: "NotFound",
            query: { path: window.location.origin + from.path }
        })
    },
    {
        path: "/*",
        redirect: from => ({
            name: "Error404",
            query: { path: window.location.origin + from.path }
        })
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
