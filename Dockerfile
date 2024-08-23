# 使用 Node.js 官方的 LTS 版本作為基礎鏡像
FROM node:18

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 文件
COPY package.json package-lock.json ./

# 安裝應用依賴
RUN npm install

# 複製應用代碼到容器中
COPY . .

# 構建 Vue.js 應用
RUN npm run build

# 使用 Nginx 作為靜態文件服務器
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露容器的 80 端口
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]
