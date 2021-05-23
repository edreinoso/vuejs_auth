import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                hello: colors.red.darken1, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
                bl5: colors.blue.lighten5,
                bl4: colors.blue.lighten4,
                bl3: colors.blue.lighten3,
                bl2: colors.blue.lighten2,
                bl1: colors.blue.lighten1,
                bd1: colors.blue.darken1,
                bd2: colors.blue.darken2,
                bd3: colors.blue.darken3,
                bd4: colors.blue.darken4,
                ba1: colors.blue.accent1,
                ba2: colors.blue.accent2,
                ba3: colors.blue.accent3,
                ba4: colors.blue.accent4,
                tl5: colors.teal.lighten5,
                tl4: colors.teal.lighten4,
                tl3: colors.teal.lighten3,
                tl2: colors.teal.lighten2,
                tl1: colors.teal.lighten1,
                td1: colors.teal.darken1,
                td2: colors.teal.darken2,
                td3: colors.teal.darken3,
                td4: colors.teal.darken4,
                tla1: colors.teal.accent1,
                tla2: colors.teal.accent2,
                tla3: colors.teal.accent3,
                tla4: colors.teal.accent4,
            },
        },
    }
});
// blue

