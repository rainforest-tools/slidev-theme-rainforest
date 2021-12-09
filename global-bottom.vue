<template>
  <footer class="fixed bottom-0 px-3 py-2 footer">
    <div class="flex justify-center items-center w-full">
      <select
        class="select select-bordered select-xs"
        data-choose-theme
        v-model="selected"
      >
        <option :key="theme" v-for="theme in $themes" :value="theme">
          {{ theme }}
        </option>
      </select>
      <div class="flex-grow"></div>
      <span
        v-if="$slidev.nav.currentLayout !== 'cover'"
        class="visible text-base-content"
        >{{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}</span
      >
    </div>
  </footer>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  onMounted,
  getCurrentInstance,
} from "vue";
// @ts-ignore
import { themeChange } from "theme-change";
import useCurrentInstance from "./hooks/useCurrentInstance";

export default defineComponent({
  setup() {
    const { globalProperties } = useCurrentInstance();
    const selected = ref(globalProperties.$themeData);
    watch(
      () => selected,
      (value) => globalProperties.$setThemeData(value)
    );
    onMounted(() => themeChange(false));
    return { selected };
  },
});
</script>
<style lang="postcss" scoped>
footer {
  &:hover {
    @apply bg-neutral text-neutral-content;
    * {
      @apply text-neutral-content;
    }
    > * {
      @apply visible;
    }
    .select-bordered {
      @apply text-base-content;
    }
  }
  > * {
    @apply invisible;
  }
}
</style>