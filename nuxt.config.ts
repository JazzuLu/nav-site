// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devServer:{
        host: "0.0.0.0",
        port: 3000
    },
    css:[
        '@/assets/css/main.scss'
    ],
    vite:{
        server:{
            https: false,
        },
        css:{
            preprocessorOptions:{
                scss:{
                    additionalData: '@import "@/assets/css/functions.scss";'
                }
            }
        }
    },
    build: {
        transpile: ['gsap'],
    },
})
