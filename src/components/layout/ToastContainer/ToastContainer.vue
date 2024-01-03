<template>
  <div class="fixed top-6 right-2">
    <transition-group
      v-bind:enter-to-class="$style.enter_to"
      v-bind:enter-active-class="$style.active_transition"
      v-bind:leave-active-class="$style.active_transition"
    >
      <div
        v-for="(toast, i) in toasts"
        v-bind:key="i"
        v-bind:class="$style.toast"
        class="px-4 py-2 mt-6 bg-white rounded"
      >
        {{ toast.text }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { ToastProvider } from './toast.provider'

const { toasts } = inject(ToastProvider)
</script>

<style module>
.toast {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.enter_to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.active_transition {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
