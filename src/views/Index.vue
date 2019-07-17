<template>
  <div class="index">
    主页
    <router-view></router-view>
    <!-- <TabBar :data="tabbarData"/> -->
  </div>
</template>

<script>
// import TabBar from "../components/TabBar";
export default {
  name: "Index",
  
};
</script>

<style scoped>
.index {
  width: 100%;
  height: calc(100% - 45px);
}
</style>
