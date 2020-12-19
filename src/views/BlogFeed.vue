<template>
    <div id="feed">
        <v-row align="center" justify="center">
            <v-col
                v-for="(post, i) in $options.posts"
                :key="i"
                cols="12"
                md="5"
            >
                <blog-card
                    :id="key"
                    :featured-image-src="post.featured"
                    :title="post.title"
                    :publishDate="post.publish_date"
                    :updateDate="post.update_date"
                    :readingTime="post.reading_time"
                    :excerpt="post.excerpt"
                    :categories="post.categories"
                />
            </v-col>
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
