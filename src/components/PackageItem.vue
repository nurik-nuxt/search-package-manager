<template>
  <div class="package-item">
    <div
        class="package-item__header"
    >
      <a
          @click="sendDateToModal(pack)"
      >{{pack.name}}</a>
    </div>
    <div class="package-item__body">
      <div class="package-owner">
        {{pack.author ? `${pack.author.name}`:"" }}
      </div>
    </div>
    <div class="package-item__description">
      {{pack.description}}
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageItem",
  props:{
    pack:{
      type:Object,
      default:()=>{}
    }
  },
  methods:{
    sendDateToModal(e){
      this.$emit('packageDetail',e)
    }
  },
}
</script>

<style scoped lang="scss">
.package-item{
  padding: 25px 0 15px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__header{
    a{
      font-size: 24px;
      font-weight: 600;
      color: #000;
      display: inline-block;
      margin: 0 0 10px 0;
      cursor: pointer;
    }
  }
  &__body{
    margin: 0 15px 10px 0;
    vertical-align: middle;
  }
  &__description{
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
  }
}
.package-owner{

}
//.package-item__header{
//
//}
</style>