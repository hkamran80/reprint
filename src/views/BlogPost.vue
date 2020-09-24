<template>
    <div id="post">
        <v-row align="center" justify="center">
            <v-col cols="3"></v-col>
            <v-col cols="6">
                <header class="pb-7">
                    <span>Published: {{ $options.post.publish_date }}</span>
                    <h1 v-text="$options.post.title" class="pb-4"></h1>
                    <img :src="$options.post.featured" width="100%" />
                </header>
                <article class="text-wrap--break">
                    <VueShowdown
                        :markdown="md"
                        class="md-output"
                        openLinksInNewWindow
                    />
                </article>
            </v-col>
            <v-col cols="3"></v-col>
        </v-row>
    </div>
</template>

<script>
import posts_json from "@/posts/posts.json";
import post_md from "raw-loader!@/posts/files/extracting-applications-and-other-files-from-pkg-files-on-macos.md";

export default {
    name: "BlogPost",
    data: function() {
        return {
            md: post_md
        };
    },
    components: {
        //VueMarkdown
    },
    post:
        posts_json[
            "extracting-applications-and-other-files-from-pkg-files-on-macos"
        ]
};
</script>

<style scoped>
div#post {
    text-align: left;
}

article {
    width: 100%;
}
.md-output {
    padding: 10px 15px;
    margin: 15px 0;
    border-radius: 5px;
}
</style>
