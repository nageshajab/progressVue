<script >
import axios from 'axios'

export default {
  data() {
    return {
      name: 'Apples',
      message: 'I like apples',
      clicks: 0,
      items: null,
      data: null,
    }
  },
  methods: {
    async fetchData() {
      this.data = await axios.get("http://localhost:8080/api/topics");
    }
  },
  defineProps: {
    msg: {
      type: String,
      required: true
    }
  }
}

</script>

<template>
  <button @click="fetchData">Fetch data</button>
  <div v-if="data">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <div v-for="x in data.data" :key="x.id">
          <tr class="border">
            <th class="border" scope="row">{{ x.id }}</th>
            <td class="border">{{ x.title }}</td>
            <td class="border">{{ x.description }}</td>
          </tr>
        </div>
      </tbody>
    </table>
  </div>
  <pre v-if="data">{{ data }}</pre>
</template>

<style scoped></style>
