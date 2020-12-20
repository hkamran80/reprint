<template>
    <v-row id="navigation" no-gutters>
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
            cols="4"
        >
            <router-link
                to="/about"
                title="About the Author"
                aria-label="About the Author"
            >
                About the Author
            </router-link>
            <v-btn
                icon
                title="Toggle Theme"
                aria-label="Toggle Theme"
                @click="toggle_theme"
            >
                <v-icon color="primary">
                    mdi-theme-light-dark
                </v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "NavigationBar",
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

<style scoped>
#navigation {
    padding: 30px 0;
}

#navigation a {
    font-weight: bold;
    text-decoration: none;
}

#navigation a.router-link-exact-active {
    color: #e91e63;
}

#navigation button.v-btn {
    margin: 0 10px;
}
</style>
