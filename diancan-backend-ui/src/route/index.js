import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/loginComponent.vue'
import Home from '../components/framework/homeComponent.vue'
import Dashboard from '../components/framework/dashboard/dashboardComponent.vue'
import Restaurant from '../components/restaurantmanagement/restaurantmanagement.vue'
import Configs from '../components/configs/configs.vue'
import MEchart from '../components/echart/echarts.vue'
import NotFound from '../components/NotFound/notfound.vue'
import Users from '../components/users/usersmanagement.vue'
import RestaurantAddr from '../components/restaurantaddrmanagement/restaurantaddrmanagement.vue'
import MessageCenter from '../components/message/messagemanagement.vue'
import Api from '../restapi';

Vue.use(Router);
Vue.prototype.$api = Api;

const routes = [
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '404',
        component: NotFound,
        name: 'notfound'
    },
    {
        path:'/home',
        component:Home,
        name:'home',
        children: [
            { 
                path: 'dashboard', component: Dashboard, name: 'dashboard', hidden: true 
            },
            {
                path: 'restaurantmanagement', component: Restaurant, name: 'restaurant'
            },
            {
                path: 'restaurantmanagementaddr', component: RestaurantAddr, name: 'restaurantaddr'
            },
            {
                path: 'users', component: Users, name: 'users'
            },
            {
               path:'echart',component: MEchart , name:'echart'
            },
            {
                path: 'configs', component: Configs, name: 'configs'
            },
            {
                path: 'messages', component: MessageCenter, name: 'messages'
            }
        ]
    },
    {
        path: '/',
        component: Home
    }

];
export default new Router({
    mode:'history',
    routes: routes
});