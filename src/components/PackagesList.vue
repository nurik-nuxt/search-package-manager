<template>
  <div class="packages-list">
    <div class="packages-total">Total {{total || 0}} packages</div>
    <div class="packages-item">
      <PackageItem
          v-for="(pack,index) in packages"
          :key="index"
          :pack="pack"
          @packageDetail="showPackageDetail"
      />
    </div>
  </div>
</template>

<script>
import PackageItem from "./PackageItem";
import {mapGetters} from "vuex";
export default {
  name: "PackagesList",
  components: {PackageItem},
  props:{
    packages:{
      type:Array,
      default:()=>[]
    }
  },
  computed:{
    ...mapGetters({
      total:"getTotalPackages"
    })
  },
  methods:{
    showPackageDetail(e){
      this.$emit('showPackageDetail',e)
    }
  }
}
</script>

<style scoped>
.packages-list{
  padding: 5px 25px;
}
.packages-item{
  display: flex;
  flex-direction: column;
  /*justify-content: flex-start;*/
}
</style>