<template>
  <layout>
    <div class="main">
      <div class="hipsum">
        <router-view></router-view>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '@/components/Layout/Default';

export default {
  name: 'HelloWorld',
  components: {
    Layout
  }
};
</script>