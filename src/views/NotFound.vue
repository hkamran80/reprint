<template>
    <center-layout>
        <header class="pb-7">
            <div id="metadata">
                <h1 class="pb-1">{{ error_404_type }} Not Found</h1>
                <h2
                    class="pb-1 text-wrap--break"
                    v-text="$route.query.path"
                ></h2>
            </div>
        </header>
        <article>
            <section>
                The page you were trying to access wasn't found on Reprint.
                Might we suggest visiting the
                <router-link to="/">blog feed page</router-link>? Or learn who
                the author is on the
                <router-link to="/about">about the author page</router-link>?
            </section>
        </article>
    </center-layout>
</template>

<script>
import posts from "@/content/posts.json";
import CenterLayout from "@/components/CenterLayout";

export default {
    name: "NotFound",
    posts: posts,
    components: { CenterLayout },
    data: function() {
        return {
            error_404_type: "Page"
        };
    },
    mounted() {
        let query_path = this.$route.query.path;
        if (query_path.indexOf("posts") !== -1) {
            this.error_404_type = "Post";
        } else if (query_path.indexOf("category") !== -1) {
            this.error_404_type = "Category";
        }
    }
};
</script>
