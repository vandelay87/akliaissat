<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, trI) in data" :key="trI">
        <td v-for="(td, tdI) in tr" :key="tdI">{{ td }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'Table',
    props: {
      headers: {
        type: Array,
        required: true,
      },
      data: {
        type: Array,
        required: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/colours.scss';

  table {
    width: 100%;
    border-spacing: 0;

    thead {
      background-color: $blue;
      color: $white;
      text-align: left;

      th {
        padding: 1em;
      }
    }

    tbody {
      tr {
        background-color: $gray;

        &:nth-child(odd) {
          background-color: $lightGray;
        }

        td {
          padding: 1em;
        }
      }
    }
  }
</style>
