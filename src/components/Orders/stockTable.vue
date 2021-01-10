<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">Qty</th>
        <th scope="col">Type</th>
        <th scope="col">Price</th>
        <th scope="col">year</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(sale, id) in sales" :key="`sales_id${id}`">
        <td>
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
        </td>
        <td>{{ sale.name }}</td>
        <td>{{ sale.quantity }}</td>
        <td>{{ sale.type }}</td>
        <td>{{ sale.price }}</td>
        <td>{{ sale.date }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "stockTable",

  data() {
    return {
      sales: [
        {
          name: "suger",
          quantity: "2kgs",
          type: "Kakira",
          price: "300,000",
          date: "2021"
        },
        {
          name: "suger",
          quantity: "2kgs",
          type: "Kakira",
          price: "300,000",
          date: "2021"
        },
        {
          name: "suger",
          quantity: "2kgs",
          type: "Kakira",
          price: "300,000",
          date: "2021"
        }
      ]
    };
  }
};
</script>
