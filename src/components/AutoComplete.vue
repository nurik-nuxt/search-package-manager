<template>
  <div class="autocomplete">
    Package Searching...
    <input type="text" v-model="model" class="autocomplete-search">
  </div>
</template>

<script>
export default {
  name: "AutoComplete",
  data(){
    return{
      model:this.inputText
    }
  },
  props:{
    inputText:{
      type:String,
      // eslint-disable-next-line vue/require-valid-default-prop
      default:""
    },
    results:{
      type:Array,
      default: ()=>[]
    }
  },
  watch:{
    model(e){
      this.$emit('input',e)
    }
  }
}
</script>

<style scoped>
.autocomplete{
  display: flex;
  flex-direction: column;
  padding: 0 15px;
}
.autocomplete-search{
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  display: block;
  padding: 18px 40px;
  border: 1px solid #ff5627;
  border-radius: 3px;
  outline: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>