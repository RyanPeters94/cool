import { createRouter, createWebHistory } from 'vue-router';
import RegisterUser from '../views/RegisterUser.vue';
import Home from '../views/Home.vue';


// @ts-ignore
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register_user',
            name: 'register_user',
            component: RegisterUser
        },
    ]
});

export default router;