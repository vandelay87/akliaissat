<template>
  <div class="mdc-data-table table">
    <table class="mdc-data-table__table" :aria-label="label">
      <thead class="mdc-theme--primary-bg">
        <tr class="mdc-data-table__header-row">
          <th
            v-for="(header, index) in headers"
            :key="index"
            :class="['mdc-data-table__header-cell mdc-theme--on-primary', header.isNumeric && 'center']"
            role="columnheader"
            scope="col"
          >{{ header.data }}</th>
        </tr>
      </thead>
      <tbody class="mdc-data-table__content">
        <tr v-for="(tr, trI) in rows" :key="trI" class="mdc-data-table__row">
          <td
            v-for="(td, tdI) in tr.data"
            :key="tdI"
            :class="['mdc-data-table__cell', td.isNumeric && 'mdc-data-table__cell--numeric']"
          >{{ td.data }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "VueTable",
  props: {
    label: {
      type: String,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@material/data-table/mdc-data-table";

.table {
  display: block;
  overflow: auto;
  width: 100%;

  .center {
    text-align: center;
  }
}
</style>
