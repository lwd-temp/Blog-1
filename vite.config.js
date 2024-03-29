import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

const resolve = (dir) => path.resolve(__dirname, dir);
export default defineConfig({
    plugins: [vue()],
    base: "./",
    root: resolve("./"),
    publicDir: resolve("./assets"),
    resolve: {
        extensions: [],
    },
    build: {
        minify: false,
    },
});
