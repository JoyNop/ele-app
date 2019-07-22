<template>
  <div class='text_group'>
    <div class="input_group">
      <input 
      :type="type" 
      :value='value' 
      :placeholder="placeholder" 
      :name='value'
      @click="$emit('input',$event.target.value)"
      />
    </div>
    <!-- 输入框后面的按钮 -->
    <button v-if="btnTitle" :disabled='disabled' @click="$emit('btnClick')">{{btnTitle}}</button>
  <!-- 错误 -->
  <div v-if="error" class="invalid-feedback">{{error}}</div>
  </div>
</template>

<script>
export default {
  name:'inputGroup',
  props:{
    type:{
      type:String,
      default:'text'
    },
    value:String,
    placeholder:String,
    name:String,
    btnTitle:String,
    disabled:Boolean,
    error:String
  }
}
</script>

<style scoped>

</style>
