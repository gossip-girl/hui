import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import libCss from "vite-plugin-libcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), libCss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    target: "es2015",
    lib: {
      name: "WangUI", // 名称
      entry: resolve(__dirname, "src/packages/index.js"), // 打包文件入口
      fileName: (format) => `wang-ui.${format}.js`, // 打包文件的名字
    },
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      external: ["vue"], //需要排除在bundle之外的依赖名称
      output: {
        exports: "named",
        globals: {
          // 指定为外部依赖
          vue: "Vue",
        },
      },
    },
  },
});
