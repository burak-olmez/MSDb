<template>
    <figure class="image is-3by4" id="movieposter">
        <img :src="url == 'N/A' ? './noimage-512x512.png' : url" alt="Placeholder image">
    </figure>
</template>

<script>
export default {
    name: 'movieposter',
    props: ['url']
}
</script>