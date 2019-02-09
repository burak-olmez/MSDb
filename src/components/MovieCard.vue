<template>
  <div id="moviecard" @click="movie">
      <div class="card">
        <div class="card-image">
            <app-movie-poster :url="img"></app-movie-poster>
        </div>
        <div class="card-content has-text-centered">
            <p class="title">{{ title }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import MoviePoster from './MoviePoster'

export default {
  name: 'moviecard',
  props: ['id', 'img', 'title', 'year'],
  components: {
      appMoviePoster: MoviePoster
  },
  methods: {
      movie: function () {
        this.$store.dispatch('movie', this.id).then(() => {
            this.$router.push('/detail')
        })
      }
  }
}
</script>

<style scoped>
#moviecard {
    cursor: pointer;
}

.card {
    position: relative;
    background-color: transparent;
}

.card:hover .card-content {
    opacity: 1;
}

.card:hover .card-image {
    border-radius: 10px;
    filter: blur(5px)
}

.card-image {
    transition: all .5s ease-out;
}

.card-content {
    position: absolute;
    background: #626d5aa6;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
    opacity: 0;
    transition: all .5s ease-out;
}

.card-content p {
    margin: 50% 0;
    color: #ffffff;
}

</style>
