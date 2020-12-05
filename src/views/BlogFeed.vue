<template>
    <div id="feed">
        <v-row align="center" justify="center">
            <v-spacer />
            <v-col cols="5">
                <blog-card
                    v-for="(post, key) in $options.posts"
                    :key="key"
                    :id="key"
                    :featured-image-src="post.featured"
                    :title="post.title"
                    :publishDate="post.publish_date"
                    :updateDate="post.update_date"
                    :excerpt="post.excerpt"
                    :categories="post.categories"
                />
            </v-col>
            <v-spacer />
        </v-row>
    </div>
</template>

<script>
import posts_json from "@/content/posts.json";
import BlogCard from "../components/BlogCard.vue";

export default {
    name: "BlogFeed",
    posts: posts_json,
    components: { BlogCard }
};
</script>

<style scoped>
#feed {
    display: inline;
}
#feed div.blog-post {
    display: inline;
}

a.bp2 {
    padding: 10px;
    margin: 12px;
}
</style>
