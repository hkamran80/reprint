<template>
    <v-app id="app">
        <v-main>
            <v-container fluid>
                <NavigationBar />

                <router-view />
            </v-container>
        </v-main>
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
