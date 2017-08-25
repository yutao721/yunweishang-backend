import Vue from 'vue'
import App from './App'
import router from './router'

// 样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

//页面顶部进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 引入存储工具
import Store from './utils/store/store'



router.beforeEach((to, from, next) => {
    window.scroll(0, 0);
    const store = new Store()
    const userInfo = store.get('userinfo')
    if (!userInfo && to.path !== '/login' && to.path !== '/reg' && to.path !== '/forget') {
        store.remove('userinfo')
        next('/login')
    } else {
        if (userInfo && to.path === '/login') {
            // 如果有用户信息token
            next({
                path: '/v1/setting/shopinfo'
            });
        } else {
            NProgress.start();
            next();
        }
    }
})

router.afterEach(transition => {
    NProgress.done();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
