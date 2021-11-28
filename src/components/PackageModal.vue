<template>
  <div class="modal-backdrop">
    <div v-click-outside="close" class="modal">
      <slot name="header">{{ packageDetail.name }}</slot>
      <button
          type="button"
          class="btn-close"
          @click="close"
      >
        x
      </button>
      <slot name="body">
        <p>Author:{{packageDetail.author.name}}</p>
        <p>Date:{{packageDetail.date}}</p>
        <p>Scope:{{packageDetail.scope}}</p>
        <p>Version:{{packageDetail.version}}</p>
      </slot>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: "PackageModal",
  directives: {
    clickOutside: vClickOutside.directive
  },
  props:{
    packageDetail:{
      type:Object,
      default:()=>{}
    }
  },
  methods:{
    close(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 90%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>