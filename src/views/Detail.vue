<template>
   <div id="about">
        <div class="container">
            <div class="columns">
                <div class="column is-11">
                    <p class="title">{{ this.response['Title'] }}</p>
                </div>
                <div class="column is-1 has-text-centered">
                    <button class="button is-primary is-rounded is-outlined" @click="back">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div class="columns" id="content">
                <div class="column is-4">
                    <app-movie-poster :url="response['Poster']"></app-movie-poster>
                </div>
                <div class="column is-8">
                    <app-movie-tags :response="response"></app-movie-tags>
                    <div class="plot">
                        <p class="subtitle"> {{response['Plot']}} </p>
                    </div>
                    <app-movie-detail 
                        :response="response" 
                        :words="['Actors', 'Genre', 'Director', 'Writer', 'Production', 'Awards']"
                    ></app-movie-detail>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MoviePoster from '../components/MoviePoster'
import MovieDetail from '../components/MovieDetail'
import MovieTags from '../components/MovieTags'

export default {
    name: 'about',
    components: {
        appMoviePoster: MoviePoster,
        appMovieDetail: MovieDetail,
        appMovieTags: MovieTags
    },
    data() {
        return {
            response: {}
        }
    },
    created() {
        this.response = this.$store.getters.getSelected
    },
    methods: {
        back: function () {
            this.$router.push('/movies')
        }
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
    width: 5px !important;
    height: 5px;
}

#about {
    height: 100%;
}

.container {
    padding: 2.5em;
}

.is-8 {
    margin: auto;
}

.title, .plot > .subtitle, i {
    color: #ffffff !important;
}

.plot {
    border-bottom: 2px solid #626d5a;
    padding-bottom: 10px;
    margin-bottom: 10px;
}
</style>


