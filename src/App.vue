<template>
  <commonHeader/>
  <router-view/>
  <commonFooter/>

</template>

<script>
import commonHeader from './components/common/common-header.vue';
import commonFooter from './components/common/common-footer.vue';


export default {
  name: 'App',
  components: {
    commonHeader,
    commonFooter
  }
}
</script>

<style>

</style>
