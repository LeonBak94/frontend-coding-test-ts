<template>
  <div
    class="min-w-full min-h-screen font-sans text-sm antialiased bg-gray-100 text-center"
  >
    <router-view />
    <teleport to="#popups">
      <ToastContainer />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { provideClient } from '@urql/vue'
import ToastContainer from './components/layout/ToastContainer/ToastContainer.vue'
import provideToast from './components/layout/ToastContainer/toast.provider'

provideClient({ url: 'https://api.react-finland.fi/graphql' })
provideToast()
</script>
