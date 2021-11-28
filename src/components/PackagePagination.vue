<template>
  <div v-if="total >=1" class="search-pagination">
    <ul v-for="(page,index) in setPages" :key="index"  class="pagination">
      <li :style="[page === selected ? {'color':'red'}:'']" @click="paginate(page)">{{page}}</li>
    </ul>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "PackagePagination",
  computed:{
    ...mapGetters({
      // total:"getTotalPackages",
      searchText:"getSearchText"
    }),
    setPages(){
      // eslint-disable-next-line no-unused-vars
      let pages = []
      let numberOfPages = Math.ceil(this.total/this.perPage);
      for (let i = 1; i <= numberOfPages;i++){
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
       pages = this.pages.push(i)
      }
      return pages
    }
  },
  data(){
    return{
      pages:[],
      perPage:10,
      total:100,
      currentPage:0,
      selected:undefined
    }
  },
  methods:{
    paginate(e){
      this.selected = e
      this.$emit('paginate',e)
    }
  }
}
</script>

<style scoped lang="scss">
.selected {
  background: yellow;
}
.search-pagination{

}
.pagination{
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
  li{
    display: inline;
    position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.42857143;
    text-decoration: none;
    color: #000;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    margin-left: -1px;
    cursor: pointer;
  }
}

</style>