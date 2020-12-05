<template>
    <div id="feed">
        <!--
        <v-card
            max-width="750"
            class="mx-auto bp2"
            v-for="(post, key) in $options.posts"
            :key="key"
            :href="'/posts/' + key"
        >
            <v-row no-gutters align="center" justify="center">
                <v-col lg="4" sm="12" md="12" class="text-align--center">
                    <v-img :src="post.featured" width="95%" />
                </v-col>
                <v-col>
                    <v-card-title
                        class="text-wrap--break"
                        v-text="post.title"
                    ></v-card-title>
                    <v-card-subtitle
                        v-text="post.publish_date"
                    ></v-card-subtitle>
                    <v-card-text>
                        <div
                            class="excerpt text-wrap--break"
                            v-text="post.excerpt"
                        ></div>
                        <div class="categories">
                            <v-chip
                                v-for="category in post.categories"
                                :key="category[0]"
                                class="mr-2"
                                :href="'/category/' + category[0]"
                                v-text="category[1]"
                            >
                            </v-chip>
                        </div>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
        -->
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
                    :excerpt="post.excerpt"
                    :categories="categories[key]"
                />
            </v-col>
            <v-spacer />
        </v-row>
    </div>
</template>

<script>
import posts_json from "@/content/posts.json";
import categories_json from "@/content/categories.json";
import BlogCard from "../components/BlogCard.vue";

export default {
    name: "BlogFeed",
    posts: posts_json,
    category_list: categories_json,
    components: { BlogCard },
    data: function() {
        return {
            categories: null
        };
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
</style>
