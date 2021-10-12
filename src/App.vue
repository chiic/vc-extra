<template>
  <button class="btn" @click="btn">btn</button>
</template>

<script lang="ts" setup>
  import { ModalService } from './components/modal/modal.service';
  import Test from './tes.vue';

  const btn = () => {
      const modal = new ModalService({
        title: '测试弹窗',
        content: Test,
        width: 640
      });
  }
</script>
<style>
</style>
