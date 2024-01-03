<template>
  <li
    class="flex gap-8 px-8 py-4 shadow-8 border-2 mb-4 last:mb-0 hover:bg-blue-100 rounded cursor-pointer"
  >
    <div>{{ name }}</div>
    <div>
      {{ startDate }}
    </div>
    <div>{{ endDate }}</div>
    <div>{{ slogan }}</div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  name: { type: String, default: null },
  startDate: { type: String, default: null },
  endDate: { type: String, default: null },
  slogan: { type: String, default: null },
})
</script>
