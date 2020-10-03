<template>
    <div id="post">
        <v-row align="center" justify="center">
            <v-col lg="3"></v-col>
            <v-col lg="6" md="12" sm="12" xs="12">
                <header class="pb-7">
                    <div id="metadata" class="pb-4">
                        <span v-text="post.publish_date"></span>
                        <h1 v-text="post.title" class="pb-1"></h1>
                        <span v-text="post.excerpt" class="pb-2"></span>
                    </div>
                    <div class="categories pb-4">
                        <v-chip
                            v-for="category in post.categories"
                            :key="category[0]"
                            class="mr-2"
                            :href="'/category/' + category[0]"
                            v-text="category[1]"
                            label
                        >
                        </v-chip>
                    </div>
                    <img :src="post.featured" width="100%" />
                </header>
                <article>
                    <vue-simple-markdown
                        v-if="md != '' && !error"
                        :source="md"
                        inline-code
                        image="true"
                    />

                    <v-progress-circular
                        v-if="md == '' && !error"
                        indeterminate
                        color="primary"
                    ></v-progress-circular>

                    <v-alert type="error" v-if="error">
                        An error occurred. Check below for the error. If the
                        problem persists after five minutes, contact H. Kamran.
                    </v-alert>
                    <v-alert type="error" v-if="error" v-text="error"></v-alert>
                </article>
            </v-col>
            <v-col lg="3"></v-col>
        </v-row>
    </div>
</template>

<script>
import posts_json from "@/content/posts.json";

export default {
    name: "BlogPost",
    data: function() {
        return {
            md: "",
            error: false,
            post: posts_json[this.$route.params.post]
        };
    },
    mounted() {
        import("raw-loader!@/content/files/" + this.$route.params.post + ".md")
            .then(data => {
                this.md = data.default;
            })
            .catch(error => {
                console.error(error);
                this.error = error;
            });
    }
};
</script>

<style scoped>
div#post {
    text-align: left;
}
</style>
