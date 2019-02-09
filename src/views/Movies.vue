<template>
    <div id="search">
        <div class="container">
            <div class="columns">
                <div class="column is-1 has-text-centered">
                    <button class="button is-primary is-rounded is-outlined" @click="back">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="column is-11">
                    <p class="subtitle">'{{ this.$store.state.search }}' </p>
                </div>
            </div>
            <div class="columns" id="content" v-if="response.length != undefined">
                <app-movie-card 
                    class="column is-4"
                    v-for="(item, key) in response" :key='key'
                    :id="response[key]['imdbID']"
                    :title="response[key]['Title']"
                    :img="response[key]['Poster']"
                    :year="response[key]['Year']"
                ></app-movie-card>
            </div>
            <div class="hero is-fullheight has-text-centered" v-else>
                <div class="hero-body">
                    <div class="container">
                        <span>404</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MovieCard from '../components/MovieCard'

export default {
    name: 'search',
    data() {
        return {
            response: {}
        }
    },
    components: {
        appMovieCard: MovieCard
    },
    created() {
        this.response = this.$store.getters.getResponse
    },
    methods: {
        back: function () {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
#search {
    height: 100%;
}

.container {
    padding: 2.5em;
}

button {
    z-index: 1;
}

.is-11 {
    margin: auto;
}

.subtitle {
    color: #ffffff !important;
}

.hero {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
}
.hero span {
    font-weight: 900;
    font-size: 200px;
    padding-left: 100px;
    letter-spacing: 100px;
    color: #343a30;
}
</style>
