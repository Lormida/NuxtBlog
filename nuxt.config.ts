import { transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineNuxtConfig({
    modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt'],
    unocss: {
        // presets
        preflight: true,
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        transformers: [transformerDirectives(), transformerVariantGroup()],
        // core options
        shortcuts: [],
        rules: [
            [
                /^text-(.*)$/,
                ([, c], { theme }) => {
                    //@ts-ignore
                    if (theme.colors[c]) {
                        return {
                            //@ts-ignore
                            color: theme.colors[c],
                        }
                    }
                },
            ],
        ],

        theme: {
            colors: {
                neutral: 'rgba(var(--neutral))',
                mainAccent: 'rgba(var(--mainAccent))',
                main: 'rgba(var(--main))',
                mainWeakAnti: 'rgba(var(--mainWeakAnti))',
                antiMain: 'rgba(var(--antiMain))',
                antiMainAccent: 'rgba(var(--antiMainAccent))',
                btnMain: 'rgba(var(--btnMain))',
                btnMainPale: 'rgba(var(--btnMainPale))',
                badgeMain: 'rgba(var(--badgeMain))',
                badgeMainPale: 'rgba(var(--badgeMainPale))',
                btnSec: 'rgba(var(--btnSec))',
                btnSecPale: 'rgba(var(--btnSecPale))',
            },
        },
    },
    buildModules: ['@nuxtjs/google-fonts'],
    colorMode: {
        classSuffix: '',
    },
    css: ['@/assets/styles/palette.scss', '@/assets/styles/main.scss'],
    googleFonts: {
        families: {
            Inter: {
                wght: [100, 400, 700, 900],
            },
            Lato: [100, 300],
        },
    },

    hooks: {
        'vite:extendConfig': function (config: any, { isServer }: any) {
            if (isServer) {
                // Workaround for netlify issue
                // https://github.com/nuxt/framework/issues/6204
                config.build.rollupOptions.output.inlineDynamicImports = true
            }
        },
    },
})
