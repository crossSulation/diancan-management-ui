import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/loginComponent.vue'
import Home from '../components/framework/homeComponent.vue'
import Dashboard from '../components/framework/dashboard/dashboardComponent.vue'
import App from '../App.vue'
import Api from '../restapi';

Vue.use(Router);
Vue.prototype.$api = Api;

const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: 'login',
                component: Login
            },
            {
                path: 'home',
                component: Home,
                children: [
                    { path: 'dashboard', component: Dashboard }
                ]
            }
        ]
    }
];
export default new Router({
    routes: routes
});