<template>
    <div id="content">
        <div id="error" v-if="error">
            <v-row align="center" justify="center">
                <v-col lg="3"></v-col>
                <v-col lg="6" md="12" sm="12" xs="12">
                    <div id="error">
                        <v-alert type="error" v-text="error"></v-alert>
                    </div>
                </v-col>
                <v-col lg="3"></v-col>
            </v-row>
        </div>
        <div id="category" v-else>
            <h1 class="text-align--center pb-7">
                Category:
                {{ $options.categories[this.$route.params.category].name }}
            </h1>
            <div
                v-for="post_id in $options.categories[
                    this.$route.params.category
                ].posts"
                :key="post_id"
                :id="post_id"
            >
                <v-card
                    max-width="750"
                    class="mx-auto bp2"
                    :href="'/posts/' + post_id"
                >
                    <v-row no-gutters align="center" justify="center">
                        <v-col
                            lg="4"
                            sm="12"
                            md="12"
                            class="text-align--center"
                        >
                            <v-img
                                :src="$options.posts[post_id].featured"
                                width="95%"
                            />
                        </v-col>
                        <v-col>
                            <v-card-title
                                class="text-wrap--break"
                                v-text="$options.posts[post_id].title"
                            ></v-card-title>
                            <v-card-subtitle
                                v-text="$options.posts[post_id].publish_date"
                            ></v-card-subtitle>
                            <v-card-text>
                                <div
                                    class="excerpt text-wrap--break"
                                    v-text="$options.posts[post_id].excerpt"
                                ></div>
                                <div class="categories">
                                    <v-chip
                                        v-for="category in $options.posts[
                                            post_id
                                        ].categories"
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
            </div>
        </div>
    </div>
</template>

<script>
import posts from "@/content/posts.json";
import categories from "@/content/categories.json";

export default {
    name: "BlogFeed",
    posts: posts,
    categories: categories,
    data: function() {
        return {
            error: false
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
