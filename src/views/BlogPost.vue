<template>
    <div id="post">
        <v-row align="center" justify="center">
            <v-col cols="3"></v-col>
            <v-col cols="6">
                <header class="pb-7">
                    <div id="metadata" class="pb-4">
                        <span v-text="post.publish_date"></span>
                        <h1 v-text="post.title" class="pb-1"></h1>
                        <span v-text="post.excerpt"></span>
                    </div>
                    <img :src="post.featured" width="100%" />
                </header>
                <article>
                    <vue-simple-markdown
                        :source="md"
                        inline-code
                        image="true"
                    />
                </article>
            </v-col>
            <v-col cols="3"></v-col>
        </v-row>
    </div>
</template>

<script>
import posts_json from "@/posts/posts.json";

export default {
    name: "BlogPost",
    data: function() {
        return {
            md: import(
                "raw-loader!@/posts/files/" + this.$route.params.post + ".md"
            ).then(data => {
                this.md = data.default;
            }),
            post: posts_json[this.$route.params.post]
        };
    }
};
</script>

<style scoped>
div#post {
    text-align: left;
}
</style>
