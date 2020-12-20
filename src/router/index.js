import Vue from "vue";
import VueRouter from "vue-router";
import BlogFeed from "../views/Feed.vue";

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
            import(/* webpackChuckName: "post" */ "../views/PostView.vue")
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
        path: "/notfound",
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
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
