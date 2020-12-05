<template>
    <div id="content">
        <div>
            <v-row align="center" justify="center">
                <v-spacer />
                <v-col lg="5" md="12" sm="12" xs="12">
                    <div v-if="error">
                        <div id="error">
                            <v-alert type="error" v-text="error"></v-alert>
                        </div>
                    </div>
                    <div v-else>
                        <h1 class="pb-7">
                            Category:

                            {{
                                $options.categories[this.$route.params.category]
                                    .name
                            }}
                        </h1>
                        <div
                            v-for="post_id in $options.categories[
                                this.$route.params.category
                            ].posts"
                            :key="post_id"
                            :id="post_id"
                        >
                            <blog-card
                                :id="post_id"
                                :featured-image-src="
                                    $options.posts[post_id].featured
                                "
                                :title="$options.posts[post_id].title"
                                :publishDate="
                                    $options.posts[post_id].publish_date
                                "
                                :excerpt="$options.posts[post_id].excerpt"
                                :categories="categories[post_id]"
                            />
                        </div>
                    </div>
                </v-col>
                <v-spacer />
            </v-row>
        </div>
    </div>
</template>

<script>
import posts from "@/content/posts.json";
import categories from "@/content/categories.json";
import BlogCard from "../components/BlogCard.vue";

export default {
    name: "BlogFeed",
    posts: posts,
    categories: categories,
    components: { BlogCard },
    data: function() {
        return {
            error: false,
            categories: null
        };
    },
    created() {
        if (
            this.$options.categories[this.$route.params.category] === undefined
        ) {
            this.error = `The category you are trying to access, ${this.$route.params.category}, does not exist.`;
            this.$router.push({
                name: "Error404",
                query: { path: window.location.origin + this.$route.path }
            });
        }
    },
    mounted() {
        var categories = {};
        for (let post of Object.entries(this.$options.posts)) {
            let category_array = [];
            for (let category of post[1].categories) {
                category_array.push({
                    id: category[0],
                    name: category[1]
                });
            }
            let id = post[0];
            categories[id] = category_array;
        }
        this.categories = categories;
    }
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
div.v-image {
    margin: 8px;
}
div.categories {
    margin-top: 10px;
}
</style>
