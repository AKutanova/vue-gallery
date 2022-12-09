import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
    state: {
        photos: []
    },

    mutations: {
        setPhotos(state, payload) {
            state.photos = payload;
            console.log(state.photos)
        }
    },

    getters: {
        getPhotos(state) {
            return state.photos;
        }
    },

    actions: {
        fetchData({state, commit}) {
            console.log('fetch')
            axios
            .get('https://jsonplaceholder.typicode.com/photos?_limit=12')
            .then(response => commit('setPhotos', response.data))
            .catch(() => {
                console.log('Ошибка соединения')
            })       
        }
    }
});