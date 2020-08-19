import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Tabbar,
    TabbarItem,
    TreeSelect,
    Search,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Image as VanImage,
    Lazyload,
    Col,
    Row,
    Loading
} from 'vant'
import 'lib-flexible/flexible'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(TreeSelect);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(Col);
Vue.use(Row);
Vue.use(Loading);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
