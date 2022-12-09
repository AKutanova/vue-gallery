<template>
    <v-container>
        <PhotoFormVue 
            @create-photo="appendPhoto"
        />
        <v-row>
            <Photo 
                v-for = "photo in photos" 
                :photo = "photo"
                :key = "photo.id"
                @click="popupOpen"
            />
            <photo-dialog :photo = "activePhoto" :isActive = isActive @dialogUpdate="dialogUpdate"/>          
        </v-row>
    </v-container>
</template>

<script>
import Photo from '@/components/photo/Photo.vue'
import PhotoFormVue from '@/components/photo/PhotoForm.vue';
import PhotoDialog from '@/components/photo/PhotoDialog.vue';

export default {
    components: {Photo, PhotoFormVue, PhotoDialog},

    data() {
        return {
            photos: [],
            isActive: false,
            activePhoto: {
                title: '',
                url: ''
            }
        }
    },

    mounted() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.axios
            .get('https://jsonplaceholder.typicode.com/photos?_limit=12')
            .then(response => (this.photos = response.data))
            .catch(() => {
                console.log('Ошибка соединения')
            });         
        },

        appendPhoto(photo) {
            this.photos.unshift(photo);
        },

        popupOpen(event) {
            this.activePhoto.title = event.target.closest('.v-img').dataset.title;
            this.activePhoto.url = event.target.closest('.v-img').dataset.url;
            this.isActive = true;
        },

        dialogUpdate(value) {
            this.isActive = value;
        }
    }
}
</script>

<style>

</style>