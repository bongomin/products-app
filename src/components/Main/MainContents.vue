<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h3 class="h3">Dashboard</h3>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Share
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Export
          </button>
        </div>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary dropdown-toggle"
        >
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis sit nemo
    enim magnam reiciendis facilis! Dicta distinctio et reprehenderit
    praesentium eum iusto, ducimus voluptatem architecto! Natus exercitationem
    necessitatibus nulla.

    <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>
  </main>
</template>
<script>
export default {};
</script>
<style scoped></style>
