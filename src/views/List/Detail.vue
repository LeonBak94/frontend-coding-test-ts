<template>
  <div class="justify-center w-full p-10 m-auto">
    <h1 class="text-3xl font-extrabold leading-10 tracking-tigh">
      List Detail View
    </h1>
    <section
      v-if="!fetching"
      class="flex flex-col justify-between w-full gap-16 mt-8"
    >
      <section
        class="flex flex-col justify-start gap-4 p-16 rounded shadow-lg bg-gray-50"
      >
        <h2 class="text-xl font-bold">{{ conference.name }}</h2>
        <div>{{ conference.slogan }}</div>
        <a
          v-bind:title="conference.name"
          v-bind:href="conference.websiteUrl"
          class="text-blue-500"
          target="_blank"
          rel="noopener"
        >
          HomePage
        </a>
        <div class="flex justify-center gap-6">
          <div>from: {{ conference.startDate }}</div>
          <div>to: {{ conference.startDate }}</div>
        </div>
      </section>
      <section
        v-if="conference.allSpeakers?.length"
        class="flex flex-col justify-end flex-1 gap-4 p-8 rounded shadow-lg bg-gray-50"
      >
        <ul class="flex flex-col gap-2">
          <li
            v-for="(speaker, index) in conference.allSpeakers"
            v-bind:key="index"
            class="flex justify-start gap-6 px-8 py-4 mb-4 border-2 rounded shadow-8 last:mb-0 hover:bg-blue-100"
          >
            <img
              v-if="speaker.image?.url"
              v-bind:src="speaker.image.url"
              v-bind:title="speaker.image.title"
              v-bind:alt="speaker.image.title"
              class="w-32 h-32 rounded-full"
            />
            <div class="flex flex-col w-full h-32 gap-6">
              <div class="font-bold text-gray-600">{{ speaker.name }}</div>
              <div>{{ speaker.aboutShort }}</div>
            </div>
          </li>
        </ul>
      </section>
    </section>
    <div v-else>Loading conference...</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useGetConferenceQuery } from '../../generated/graphql'
import useToast from '../../hooks/Toast'

const { params } = useRoute()

const { data, fetching, error } = useGetConferenceQuery({
  variables: { id: params?.id || '' },
  requestPolicy: 'network-only',
})

const conference = computed(() => data.value?.conference || {})

useToast(fetching, error)
</script>
