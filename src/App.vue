<template>
    <div id="app">
        <transition name="fade"> 
            <router-view/>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
@import url('./assets/css/bulma.min.css');
@import url('./assets/icons/css/font-awesome.min.css');

html, body, #app {
    height: 100%;
    width: 100%;
    overflow-x: auto !important;
    overflow-y: visible !important;
    background: linear-gradient(to top, #363636, #6a8176);
    user-select: none;
}

.fade-enter { opacity: 0; }
.fade-enter-active{ transition: opacity .3s ease-out; }
.fade-leave-active { transition: opacity .3s ease-out; opacity: 0; }

::-webkit-scrollbar {
    width: 0;
    height: 5px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: #00d1b2;
    border-radius: 5px;
}
</style>
