<template>
  <div class="justify-center px-16 py-10 min-w-md">
    <h1 class="text-3xl font-extrabold leading-10 tracking-tigh">
      Lists
    </h1>
    <ul v-if="!fetching" class="flex flex-col gap-2 mt-8">
      <router-link
        v-for="conference in conferences?.conferences || []"
        v-bind:key="conference.id"
        v-bind:to="{ name: 'ConferencePage', params: { id: conference.id } }"
      >
        <Card
          v-bind:name="conference.name"
          v-bind:start-date="conference.startDate"
          v-bind:end-date="conference.endDate"
          v-bind:slogan="conference.slogan"
        ></Card>
      </router-link>
    </ul>
    <div v-else>Loading conferences...</div>
  </div>
</template>

<script setup lang="ts">
import { useListConferencesQuery } from '../../generated/graphql'
import useToast from '../../hooks/Toast'
import Card from '../../components/List/Card.vue'

const {
  data: conferences,
  fetching,
  error,
} = useListConferencesQuery({
  requestPolicy: 'network-only',
})

useToast(fetching, error)
</script>
