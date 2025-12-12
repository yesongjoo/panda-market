import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@atoms": path.resolve(__dirname, "src/components/atoms"),
            "@molecules": path.resolve(__dirname, "src/components/molecules"),
            "@organisms": path.resolve(__dirname, "src/components/organisms"),
            "@templates": path.resolve(__dirname, "src/components/templates"),
            "@pages": path.resolve(__dirname, "src/components/pages"),

            "@api": path.resolve(__dirname, "src/api"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@utils": path.resolve(__dirname, "src/utils"),

            "@assets": path.resolve(__dirname, "src/assets"),
            "@img": path.resolve(__dirname, "src/assets/img"),
            "@icons": path.resolve(__dirname, "src/assets/icons"),
        },
    },
});
