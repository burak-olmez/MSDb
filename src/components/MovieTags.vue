<template>
    <div id="movietags" class="tags">
        <span class="tag is-primary">Year: {{response['Year']}}</span>
        <span class="tag is-primary">Rated: {{response['Rated']}}</span>
        <span class="tag is-primary">IMDB: {{response['imdbRating']}}</span>
        <span class="tag is-primary">Metascore: {{response['Metascore']}}</span>
        <span class="tag is-primary">BoxOffice: {{response['BoxOffice']}}</span>
        <span class="tag is-primary">Runtime: {{response['Runtime']}}</span>
    </div>
</template>

<script>
export default {
    name: 'movietags',
    props: {
        response: Object
    }
}
</script>

<style>

</style>
