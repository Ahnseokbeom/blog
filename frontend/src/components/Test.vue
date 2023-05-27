<template>
  <div>
    <p v-if="isShow">Superpil is awesome!</p>
    <p v-if="isNoShow">No Show</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      isNoShow: false,
    };
  },
};
</script>