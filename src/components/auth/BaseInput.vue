<template>
  <div class="input-wrapper">
    <!-- Icon as SVG component -->
    <span v-if="icon" class="input-icon">
      <component :is="icon" class="w-5 h-5 text-gray-400" />
    </span>

    <!-- Input field -->
    <input
      class="base-input"
      :class="{ 'has-icon': icon }"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: { type: String, default: "" },
    type: { type: String, default: "text" },
    placeholder: String,
    icon: { type: [Object, Function], default: null }, 
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.input-wrapper {
  position: relative;
  width: 100%;
}

.input-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.base-input {
  width: 100%;
  padding: 15px;
  padding-left: 45px; 
  margin-bottom: 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 1rem;
}

.base-input.has-icon {
  padding-left: 45px;
}
</style>
