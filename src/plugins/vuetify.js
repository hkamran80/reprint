import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#F06292"
            },
            dark: {
                primary: "#C2185B"
            }
        }
    }
});
