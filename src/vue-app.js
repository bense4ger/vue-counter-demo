import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/app.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        incrementCount (state) {
            state.count++
        }
    },
    getters: {
        currentCount: state => state.count
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
    store
});