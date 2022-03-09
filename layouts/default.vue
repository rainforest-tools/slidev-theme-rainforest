<template>
  <div class="flex flex-col slidev-layout">
    <div
      v-if="$slots.title"
      class="flex-shrink z-1"
      :class="[`col-span-${colsNum}`]"
    >
      <slot name="title" />
    </div>
    <div
      class="grid flex-grow overflow-hidden flex-2"
      :class="[gridCols, gridRows, `gap-${gap}`]"
    >
      <div
        :key="idx"
        v-for="(item, idx) in items"
        :class="[`col-span-${item[0]}`, `row-span-${item[1]}`]"
        class="flex flex-col full"
      >
        <slot v-if="idx === 0" />
        <slot v-else :name="`item_${idx}`" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import * as lodash from "lodash";

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
    gap: {
      default: 2,
      type: Number,
    },
  },
  setup({ colsNum, rowsNum, cols, rows }) {
    const gridCols = `grid-cols-${colsNum}`;
    const gridRows = `grid-rows-${rowsNum}`;
    const items = lodash.zip(cols, rows);
    return { colsNum, rowsNum, gridCols, gridRows, items };
  },
});
</script>
