import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {Fancybox} from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import '@/styles/main.scss'
import {IMaskDirective} from "vue-imask";

const app = createApp(App)
app.use(router)
app.directive('mask', IMaskDirective)


Fancybox.bind('[data-fancybox]', {
  closeButton: false,
  dragToClose: false,
})

app.mount("#app")
