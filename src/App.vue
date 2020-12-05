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
                    A mirror of these posts is available on
                    <a href="https://hkamran.medium.com" target="_blank"
                        >Medium</a
                    >.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text>
                    Copyright © H. Kamran, {{ new Date().getFullYear() }}. The
                    materials on this on this website may be freely copied and
                    distributed so long as the copyright notice and website
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
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
