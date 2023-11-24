import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import rtlCss from 'postcss-rtlcss'

const BASE_API = 'http://135.148.144.186:8000'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        define: {
            'AppConfig.BaseAPI': JSON.stringify('/api'),
        },
        server: {
            // cors: {
                
            // },
            proxy:{
                '/api': {
                    target: BASE_API,
                    changeOrigin: true,
                    secure: false,
                    // rewrite: {'^/api': ''}
                }
            }
        },
        css: {
            postcss: {
                plugins: [
                    rtlCss({
                        mode: 'override',
                        source: 'ltr',
                        ltrPrefix: '.ltr',
                        rtlPrefix: '.rtl',
                        bothPrefix: '.d'
                    })
                ]
            }
        },
        plugins: [vue()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    };
});
