<template>
    <div>
        <v-card :href="`/posts/${id}`">
            <v-img class="align-end" width="100%" :src="featuredImageSrc" />
            <v-card-title class="text-wrap--break" v-text="title" />
            <v-card-subtitle>
                {{ publishDate }}
                <span
                    v-if="
                        updateDate !== 'null' &&
                            updateDate !== undefined &&
                            typeof updateDate === 'string' &&
                            updateDate !== ''
                    "
                >
                    <br />
                    {{ updateDate }} (Updated)
                </span>
            </v-card-subtitle>
            <v-card-text>
                <div class="excerpt text-wrap--break" v-text="excerpt" />
                <div class="categories">
                    <v-chip
                        v-for="category of categories"
                        :key="category"
                        class="mr-2"
                        :href="`/category/${category}`"
                        v-text="$options.categories[category].name"
                    />
                </div>
            </v-card-text>
        </v-card>
        <br />
        <br />
    </div>
</template>

<script>
import categories_json from "@/content/categories.json";
export default {
    name: "BlogCard",
    categories: categories_json,
    props: {
        id: String,
        featuredImageSrc: String,
        title: String,
        publishDate: String,
        updateDate: String,
        excerpt: String,
        categories: Array
    }
};
</script>

<style scoped>
div.v-card {
    margin-bottom: 50px;
}

div.categories {
    margin-top: 10px;
}
</style>
