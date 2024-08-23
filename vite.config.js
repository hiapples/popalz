import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // 你可以根据需要修改端口号
    open: true // 启动开发服务器时自动打开浏览器
  },
  build: {
    outDir: 'dist', // 构建输出目录
    sourcemap: true, // 生成源映射文件以方便调试
  },
  resolve: {
    alias: {
      '@': '/src', // 设置别名
    }
  }
});
