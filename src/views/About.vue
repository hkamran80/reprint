<template>
    <div id="about">
        <v-row align="center" justify="center">
            <v-col lg="3"></v-col>
            <v-col lg="6" md="12" sm="12" xs="12">
                <header class="pb-7">
                    <div id="metadata">
                        <h1 class="pb-1">About the Author</h1>
                    </div>
                </header>
                <article>
                    <vue-simple-markdown
                        v-if="md != '' && !error"
                        :source="md"
                        inline-code
                        image="true"
                    />

                    <v-progress-circular
                        v-if="md == '' && !error"
                        indeterminate
                        color="primary"
                    ></v-progress-circular>

                    <v-alert type="error" v-if="error">
                        An error occurred. Check below for the error. If the
                        problem persists after five minutes, contact H. Kamran.
                    </v-alert>
                    <v-alert type="error" v-if="error" v-text="error"></v-alert>
                </article>
            </v-col>
            <v-col lg="3"></v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "AboutTheAuthor",
    data: function() {
        return {
            md: "",
            error: false
        };
    },
    mounted() {
        import("raw-loader!@/content/about-the-author.md")
            .then(data => {
                this.md = data.default;
            })
            .catch(error => {
                console.error(error);
                this.error = error;
            });
    }
};
</script>

<style scoped>
div#about {
    text-align: left;
}
</style>
