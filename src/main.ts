import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';
import "@/assets/main.css"
import {
    Button,
    Search,
    Icon,
    List,
    Swipe, SwipeItem,
    Popup,
    Tabbar, TabbarItem,
    Grid, GridItem,
    Image as VanImage,
    Form, Field, CellGroup,
    Notify,
    Toast,
    Progress,
    Lazyload,
    NoticeBar
} from 'vant'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(Search)
app.use(Icon)
app.use(List)
app.use(Swipe)
app.use(SwipeItem)
app.use(Popup)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Grid)
app.use(GridItem)
app.use(VanImage)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Notify)
app.use(Toast)
app.use(Progress)
app.use(Lazyload)
app.use(NoticeBar)

app.mount('#app')
