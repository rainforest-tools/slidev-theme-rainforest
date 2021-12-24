<template>
  <div class="slidev-layout flex flex-col">
    <div
      v-if="$slots.title"
      class="flex-shrink"
      :class="[`col-span-${colsNum}`]"
    >
      <slot name="title" />
    </div>
    <div class="grid auto-rows-auto flex-grow" :class="[gridCols, gridRows]">
      <div
        :key="idx"
        v-for="(item, idx) in items"
        :class="[`row-span-${item[1]}`]"
      >
        <slot v-if="idx === 0" />
        <slot v-else :name="`item_${idx}`" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { sum, zip, max } from "lodash";

export default defineComponent({
  props: {
    colsNum: {
      default: 1,
      type: Number,
    },
    rowsNum: {
      default: 1,
      type: Number,
    },
    cols: {
      default: [1],
      type: Array,
    },
    rows: {
      default: [1],
      type: Array,
    },
  },
  setup({ colsNum, rowsNum, cols, rows }) {
    const gridCols = `grid-cols-${colsNum}`;
    const gridRows = `grid-rows-${rowsNum}`;
    const items = zip(cols, rows);
    return { colsNum, rowsNum, gridCols, gridRows, items };
  },
});
</script>
