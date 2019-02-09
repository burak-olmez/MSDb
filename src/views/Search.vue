<template>
    <div id="home" class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <div class="control has-icons-left">
                            <input class="input is-rounded is-primary" type="text" placeholder="Search" v-model="input" @keyup.enter="search" autofocus>
                            <span class="icon is-left">
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'home',
    data() {
        return {
            input: null,
        }
    },
    methods: {
        search: function () {
            this.$store.dispatch('search', this.input).then(() => {
                this.$router.push('/movies')
            })
        }
    }
}
</script>

<style scoped>
input {
    background-color: transparent !important;
    color: #FFFFFF !important;
}

i {
    color: #FFFFFF;
}

::-webkit-input-placeholder {
    color: #b6b6b6
}
</style>
