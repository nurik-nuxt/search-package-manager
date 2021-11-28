<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AutoComplete :results="results" :input-text="inputText" @input="searchResult" />
    <PackagesList :packages="packages" @showPackageDetail="getPackageDetail"/>
    <PackagePagination v-if="total >= 1" @paginate="png" />
    <PackageModal v-if="showModal === true" :package-detail="packageItem" @close="closeModal"/>
  </div>
</template>

<script>

import AutoComplete from "./components/AutoComplete";
import {mapGetters} from "vuex";
import PackagesList from "./components/PackagesList";
import PackagePagination from "./components/PackagePagination";
import PackageModal from "./components/PackageModal";
export default {
  name: 'App',
  components: {
    PackageModal,
    PackagePagination,
    PackagesList,
    AutoComplete
  },
  data(){
    return{
      inputText:"",
      results:[],
      responseData:[],
      packageItem:{},
      showModal:false
    }
  },
  computed:{
    ...mapGetters({
      packages:"getPackages",
      total:"getTotalPackages",
      searchText:"getSearchText",
    })
  },
  methods:{
    async searchResult(e){
      await this.$store.dispatch('fetchPackages',{text:e,from:0})
      await this.$store.dispatch('takeSearchText', {searchText:e})
    },
    async png(e){
      await this.$store.dispatch('fetchPackages',{text:this.searchText,from:e})

    },
    getPackageDetail(e){
      this.showModal=true
      this.packageItem = e
    },
    closeModal(){
      this.showModal = false
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
