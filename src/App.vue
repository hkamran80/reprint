<template>
    <v-app id="app">
        <v-main>
            <v-container fluid>
                <NavigationBar />
                <router-view />
            </v-container>
        </v-main>
        <v-footer padless>
            <v-card flat tile width="100%">
                <v-card-text>
                    <v-row align="center" justify="center" dense no-gutters>
                        <v-col>
                            A mirror of these posts is available on
                            <a href="https://hkamran.medium.com" target="_blank"
                                >Medium</a
                            >.
                        </v-col>
                        <v-col class="text-align--right">
                            <v-btn text @click="toggle_theme">
                                Toggle Dark Theme
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text>
                    Copyright © H. Kamran, {{ new Date().getFullYear() }}. The
                    materials on this on this website may be freely copied and
                    distributed so long as the copyright notice and website are
                    included.
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
    name: "App",
    components: {
        NavigationBar
    },
    mounted() {
        const theme = localStorage.getItem("dark_theme");
        if (theme) {
            // deepcode ignore UseStrictEquality: Loaded as a String, not a Boolean
            if (theme == "true") {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            this.$vuetify.theme.dark = true;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
        }
    },
    methods: {
        toggle_theme: function() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
        }
    }
};
</script>

<style>
* {
    font-family: "IBM Plex Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
h1,
h2,
h3,
h4,
h5,
h6,
.v-card__title {
    font-family: "Source Sans Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#app {
    text-align: left;
    padding: 15px 45px;
}

/* Global Styles */
.text-align--center {
    text-align: center;
}
.text-align--right {
    text-align: right;
}
.text-wrap--break {
    display: inline-block;
    word-break: break-word;
    word-wrap: break-word;
}
</style>
