<template>
    <div id="navigation">
        <v-row no-gutters>
            <v-col align-self="center" justify="center">
                <router-link to="/">
                    <h1 color="primary">
                        Reprint
                    </h1>
                </router-link>

                <span>
                    The blog of H. Kamran
                </span>
            </v-col>
            <v-col
                class="text-align--right"
                align-self="center"
                justify="center"
                cols="3"
            >
                <router-link
                    to="/about"
                    title="About the Author"
                    aria-label="About the Author"
                >
                    About the Author
                </router-link>
                <!--<v-btn
                    icon
                    title="Change Theme"
                    aria-label="Change Theme"
                    @click="toggle_theme"
                >
                    <v-icon>mdi-theme-light-dark</v-icon>
                </v-btn>-->
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "NavigationBar"
    /*,
    methods: {
        toggle_theme: function() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
            if (this.$vuetify.theme.dark) {
                for (let a of document.getElementsByTagName("a")) {
                    a.style.setProperty("--inactive-link-color", "#3179bc");
                }
            } else {
                for (let a of document.getElementsByTagName("a")) {
                    a.style.setProperty("--inactive-link-color", "#2c3e50");
                }
            }
        }
    },
    mounted() {
        // Dark Theme
        const theme = localStorage.getItem("dark_theme");
        if (theme) {
            // deepcode ignore UseStrictEquality: Loaded as a String, not a Boolean
            if (theme == "true") {
                this.$vuetify.theme.dark = true;
                for (let a of document.getElementsByTagName("a")) {
                    a.style.setProperty("--inactive-link-color", "#3179bc");
                }
            } else {
                this.$vuetify.theme.dark = false;
                for (let a of document.getElementsByTagName("a")) {
                    a.style.setProperty("--inactive-link-color", "#2c3e50");
                }
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
            for (let a of document.getElementsByTagName("a")) {
                a.style.setProperty("--inactive-link-color", "#3179bc");
            }
        } else {
            for (let a of document.getElementsByTagName("a")) {
                a.style.setProperty("--inactive-link-color", "#2c3e50");
            }
        }
    }*/
};
</script>

<style scoped>
#navigation {
    padding: 30px 0;
}

#navigation a {
    font-weight: bold;
    text-decoration: none;
}

#navigation a.router-link-exact-active {
    color: #42b983;
}

#navigation button.v-btn {
    margin: 0 10px;
}
</style>
