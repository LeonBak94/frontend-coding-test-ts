import { inject, Ref, watch } from 'vue'
import { CombinedError } from '@urql/vue'
import {
  ToastProvider,
  ToastProviderType,
} from '../components/layout/ToastContainer/toast.provider'

export default function useFetchingToast(
  fetching: Ref<boolean>,
  error: Ref<CombinedError | undefined>,
) {
  const { showToast } = inject(ToastProvider) as ToastProviderType

  watch(fetching, () => {
    if (!error.value)
      showToast({ text: 'Data fetching Success!', duration: 3000 })
    else showToast({ text: `Error:${error.value}`, duration: 3000 })
  })
}
