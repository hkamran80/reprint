<template>
    <div id="feed">
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
                                :key="category"
                                class="mr-2"
                                :href="'/'"
                                v-text="category"
                            ></v-chip>
                        </div>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import posts_json from "@/posts/posts.json";

export default {
    name: "BlogFeed",
    posts: posts_json
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
