<template>
  <commonHeader v-if="$route.name !== 'Error'"></commonHeader>
  <router-view/>
  <commonFooter v-if="$route.name !== 'Error'"></commonFooter>
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
