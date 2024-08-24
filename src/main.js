//載入createApp函式
import {createApp} from "vue";

//載入根組件
import App from "./app.vue";
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 引入 Bootstrap JS
import './registerServiceWorker'

//建立vue app物件
const app = createApp(App);

//掛載到HTML標籤
app.mount("#app");