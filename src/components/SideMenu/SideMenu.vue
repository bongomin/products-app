<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="sidebar-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active">
            <i class="mdi mdi-home"></i>
            Dashboard <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="mdi mdi-folder"></i>
            Orders
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="mdi mdi-shopping"></i>
            Products
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="mdi mdi-account-multiple"></i>
            Customers
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="mdi mdi-account-multiple"></i>
            Reports
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="mdi mdi-account-multiple"></i>
            Integrations
          </a>
        </li>
      </ul>

      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>Saved reports</span>
        <a
          class="d-flex align-items-center text-muted"
          aria-label="Add a new report"
        >
          <i class="mdi mdi-plus"></i>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <a class="nav-link">
            <i class="mdi mdi-folder-multiple"></i>
            Current month
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="mdi mdi-folder-multiple"></i>
            Last quarter
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="mdi mdi-folder-multiple"></i>
            Social engagement
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <span data-feather="file-text"></span>
            Year-end sale
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped></style>
