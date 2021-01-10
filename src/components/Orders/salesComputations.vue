<template>
  <div class="computations">
    <div class=" item current-sale">
      <p class="title">Current Sales</p>
      <span class="figure">
        {{ currentSales }}
      </span>
    </div>
    <div class="item total-sales">
      <p class="title">Total sales</p>
      <span class="figure">
        {{ totalSales }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "salesComputation",

  data() {
    return {
      currentSales: "$400",
      totalSales: "$ 800,0000"
    };
  }
};
</script>
<style scoped>
.computations {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.item {
  /* background: gray; */
  margin: 2px;
  padding: 10px;
  flex-grow: 1;
  border-radius: 5px !important;
  box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
}
</style>
