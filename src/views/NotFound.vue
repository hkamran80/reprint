<template>
    <div id="error-404">
        <v-row align="center" justify="center">
            <v-col lg="3"></v-col>
            <v-col lg="6" md="12" sm="12" xs="12">
                <header class="pb-7">
                    <div id="metadata">
                        <h1 class="pb-1">
                            Error 404: {{ error_404_type }} Not Found
                        </h1>
                        <h2
                            class="pb-1 text-wrap--break"
                            v-text="$route.query.path"
                        ></h2>
                    </div>
                </header>
                <article>
                    <section>
                        The page you were trying to access wasn't found on
                        Reprint. Might we suggest visiting the
                        <router-link to="/">blog feed page</router-link>? Or
                        learn who H. Kamran is on the
                        <router-link to="/about"
                            >about the author page</router-link
                        >?
                    </section>
                </article>
            </v-col>
            <v-col lg="3"></v-col>
        </v-row>
    </div>
</template>

<script>
import posts from "@/content/posts.json";
export default {
    name: "Error404",
    posts: posts,
    data: function() {
        return {
            error_404_type: "Page"
        };
    },
    mounted() {
        let query_path = this.$route.query.path;
        if (query_path.indexOf("posts") !== -1) {
            this.error_404_type = "Post";
        } else if (query_path.indexOf("category")) {
            this.error_404_type = "Category";
        }
    }
};
</script>

<style scoped>
div#error-404 {
    text-align: left;
}
</style>
