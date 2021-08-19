<template>
  <div class="card">
    <span v-html="icon"></span>
    <div class="card__info">
      <p class="counter subtitle">{{ count }}</p>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["count", "subtitle", "icon"]
};
</script>

<style lang="scss">
.card {
  padding: 20px;
  background-color: #a4ac86b4;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__info {
    text-align: center;
    .counter {
      margin-bottom: 20px;
      font-size: 25px;
      font-weight: bold;
    }
  }
}
</style>
