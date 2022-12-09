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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    components: {Photo, PhotoFormVue, PhotoDialog},

    data() {
        return {
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
        ...mapMutations({
            setPhotos: 'setPhotos'
        }),

        ...mapActions({
            fetchData: 'fetchData'
        }),

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
    },

    computed: {
        ...mapState({
            photos: state => state.photos,
        }),        
        ...mapGetters({
            getPhotos: 'getPhotos'
        })
    }
}
</script>

<style>

</style>