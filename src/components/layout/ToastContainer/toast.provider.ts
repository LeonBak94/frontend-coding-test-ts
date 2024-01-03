import { provide, ref } from 'vue'

export const ToastProvider = Symbol('toast')

export type ToastProviderType = ReturnType<typeof provideToast>

export type Toast = {
  text: string
  duration: number
}

export default function provideToast() {
  const toasts = ref<Toast[]>([])

  function showToast(toast: Toast) {
    toasts.value?.push(toast)
    setTimeout(() => {
      toasts.value?.shift()
    }, toast.duration || 3000)
  }

  const state = {
    toasts,
    showToast,
  }

  provide(ToastProvider, state)

  return state
}
