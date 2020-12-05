<template>
    <div>
        <v-card :href="`/posts/${id}`">
            <v-img class="align-end" width="100%" :src="featuredImageSrc" />
            <v-card-title class="text-wrap--break" v-text="title" />
            <v-card-subtitle v-text="publishDate" />
            <v-card-text>
                <div class="excerpt text-wrap--break" v-text="excerpt" />
                <div class="categories">
                    <v-chip
                        v-for="category of categories"
                        :key="category.id"
                        class="mr-2"
                        :href="`/category/${category.id}`"
                        v-text="category.name"
                    />
                </div>
            </v-card-text>
        </v-card>
        <br />
        <br />
    </div>
</template>

<script>
export default {
    name: "BlogCard",
    props: {
        id: String,
        featuredImageSrc: String,
        title: String,
        publishDate: String,
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
