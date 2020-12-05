<template>
    <div id="post">
        <v-row align="center" justify="center">
            <v-col lg="3"></v-col>
            <v-col lg="6" md="12" sm="12" xs="12">
                <div id="error" v-if="error">
                    <v-alert
                        type="error"
                        v-if="error.indexOf('not exist') == -1"
                    >
                        An error occurred. Check below for the error. If the
                        problem persists after five minutes, contact H. Kamran.
                    </v-alert>
                    <v-alert type="error" v-text="error"></v-alert>
                </div>
                <div id="content" v-else>
                    <header class="pb-7">
                        <div id="metadata" class="pb-4">
                            <span v-text="post.publish_date"></span>
                            <h1 v-text="post.title" class="pb-1"></h1>
                            <span v-text="post.excerpt" class="pb-2"></span>
                        </div>
                        <div class="categories pb-4">
                            <v-chip
                                v-for="category of post.categories"
                                :key="category"
                                class="mr-2"
                                :href="`/category/${category}`"
                                v-text="$options.categories[category].name"
                                label
                            />
                        </div>
                        <img :src="post.featured" width="100%" />
                    </header>
                    <article>
                        <vue-markdown v-if="md != '' && !error" :source="md" />

                        <v-progress-circular
                            v-if="md == '' && !error"
                            indeterminate
                            color="primary"
                        ></v-progress-circular>
                    </article>
                </div>
            </v-col>
            <v-col lg="3"></v-col>
        </v-row>
    </div>
</template>

<script>
import posts_json from "@/content/posts.json";
import categories_json from "@/content/categories.json";
import VueMarkdown from "vue-markdown";

export default {
    name: "BlogPost",
    categories: categories_json,
    components: { VueMarkdown },
    data: function() {
        return {
            md: "",
            error: false,
            post: ""
        };
    },
    mounted() {
        if (posts_json[this.$route.params.post] !== undefined) {
            this.post = posts_json[this.$route.params.post];
            import(
                "raw-loader!@/content/files/" + this.$route.params.post + ".md"
            )
                .then(data => {
                    this.md = data.default;
                })
                .catch(error => {
                    this.error = error;
                });
        } else {
            this.error = `The post you are trying to access, ${this.$route.params.post}, does not exist.`;
            this.$router.push({
                name: "Error404",
                query: { path: window.location.origin + this.$route.path }
            });
        }
    }
};
</script>

<style scoped>
div#post {
    text-align: left;
}
</style>
