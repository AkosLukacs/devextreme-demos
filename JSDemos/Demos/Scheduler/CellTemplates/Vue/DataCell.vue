<template>
  <div :class="markDataCell(cellData)">
    <slot/>
  </div>
</template>
<script>
import Utils from './utils.js';

export default {
  props: {
    cellData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    markDataCell(cellData) {
      const date = cellData.startDate;
      const isDisableDate = Utils.isHoliday(date) || Utils.isWeekend(date);
      const isDinner = !isDisableDate && Utils.isDinner(date);

      return {
        'disable-date': isDisableDate,
        dinner: isDinner,
      };
    },
  },
};
</script>
