import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../utils/api'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        packages: [],
        total: null,
        searchText:"",
    },
    getters:{
        getPackages:state=>state.packages,
        getTotalPackages:state=>state.total,
        getSearchText:state=>state.searchText,
    },
    mutations: {
        SET_PACKAGES (state, { packages }) {
            state.packages = packages
        },
        SET_TOTAL_PACKAGES(state,{total}){
            state.total=total
        },
        SET_SEARCH_TEXT(state,{searchText}){
            state.searchText = searchText
        }
    },
    actions: {
        async fetchPackages ({ commit }, { text = 'nuxt', from = 0 }) {
            try {
                const params = {
                    text,
                    size: 10,
                    from
                }
                const { data: { objects, total } } = await axios.get('http://registry.npmjs.com/-/v1/search', { params })
                const packages = objects.map(_ => _.package)

                commit('SET_PACKAGES', { packages })
                commit('SET_TOTAL_PACKAGES',{total})
            } catch (error) {
                console.error(error)
            }
        },
        async takeSearchText({commit},searchText){
            commit('SET_SEARCH_TEXT',searchText)
        },
    }
})
