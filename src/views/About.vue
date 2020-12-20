<template>
    <center-layout>
        <header class="pb-7">
            <div id="metadata">
                <h1 class="pb-1">About the Author</h1>
            </div>
        </header>
        <article>
            <vue-markdown v-if="md != '' && !error" :source="md" />

            <v-progress-circular
                v-if="md == '' && !error"
                indeterminate
                color="primary"
            ></v-progress-circular>

            <v-alert type="error" v-if="error">
                An error occurred. Check below for the error. If the problem
                persists after five minutes, contact H. Kamran.
            </v-alert>
            <v-alert type="error" v-if="error" v-text="error"></v-alert>
        </article>
    </center-layout>
</template>

<script>
import CenterLayout from "@/components/CenterLayout";
import VueMarkdown from "vue-markdown";

export default {
    name: "AboutTheAuthor",
    components: { CenterLayout, VueMarkdown },
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
