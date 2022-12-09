import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage';
import PhotoPage from '@/pages/PhotoPage';
import PhotoPageVuex from '@/pages/PhotoPageVuex';

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/photo',
        component: PhotoPage
    },
    ,
    {
        path: '/photo-store',
        component: PhotoPageVuex
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;