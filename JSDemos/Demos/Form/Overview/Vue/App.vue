<template>
  <div id="form-demo">
    <div class="widget-container">
      <div v-if="labelMode === 'outside'">Select company:</div>
      <DxSelectBox
        :data-source="companies"
        :label-mode="companySelectorLabelMode"
        label="Select company"
        v-model:value="company"
        display-expr="Name"
      />
      <DxForm
        id="form"
        :form-data="company"
        :label-mode="labelMode"
        :read-only="readOnly"
        :show-colon-after-label="showColon"
        :label-location="labelLocation"
        :min-col-width="minColWidth"
        :col-count="colCount"
        :width="width"
      />
    </div>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <span>Label mode:</span>
        <DxSelectBox
          :items="['outside', 'static', 'floating', 'hidden']"
          v-model:value="labelMode"
        />
      </div>
      <div class="option">
        <span>Label location:</span>
        <DxSelectBox
          :items="['left', 'top']"
          v-model:value="labelLocation"
        />
      </div>
      <div class="option">
        <span>Columns count:</span>
        <DxSelectBox
          :items="['auto', 1, 2, 3]"
          v-model:value="colCount"
        />
      </div>
      <div class="option">
        <span>Min column width:</span>
        <DxSelectBox
          :items="[150, 200, 300]"
          v-model:value="minColWidth"
        />
      </div>
      <div class="option">
        <span>Form width:</span>
        <DxNumberBox
          :max="550"
          v-model:value="width"
        />
      </div>
      <div class="option">
        <DxCheckBox
          v-model:value="readOnly"
          text="readOnly"
        />
      </div>
      <div class="option">
        <DxCheckBox
          v-model:value="showColon"
          text="showColonAfterLabel"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DxCheckBox from 'devextreme-vue/check-box';
import DxSelectBox from 'devextreme-vue/select-box';
import DxNumberBox from 'devextreme-vue/number-box';
import DxForm from 'devextreme-vue/form';
import service from './data.js';

export default {
  components: {
    DxCheckBox,
    DxSelectBox,
    DxNumberBox,
    DxForm,
  },
  data() {
    const companies = service.getCompanies();
    return {
      labelMode: 'floating',
      labelLocation: 'left',
      readOnly: false,
      showColon: true,
      minColWidth: 300,
      colCount: 2,
      companies,
      company: companies[0],
      width: null,
    };
  },
  computed: {
    companySelectorLabelMode() {
      if (this.labelMode === 'outside') {
        return 'hidden';
      }
      return this.labelMode;
    },
  },
};
</script>
<style scoped>
.widget-container {
  margin-right: 320px;
  padding: 20px;
  max-width: 550px;
  min-width: 300px;
}

#form {
  margin-top: 25px;
}

.options {
  padding: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 260px;
  top: 0;
  background-color: rgba(191, 191, 191, 0.15);
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option {
  margin-top: 10px;
}
</style>
