import glsl from 'vite-plugin-glsl'

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server: {
        host: '0.0.0.0',
        strictPort: true,
        port: Number(process.env.PORT) || 3000
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },
    plugins: [glsl()]
}
