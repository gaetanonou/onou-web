<template>
  <div class="mt-5 flex space-x-4">
    <a
      :class="{ 'bg-gradient text-white': active(locale) }"
      class="p-1 rounded"
      v-for="locale in $i18n.locales"
      :key="locale"
      @click.prevent.stop="$i18n.setLocale(locale)"
      >{{ locale }}</a
    >
  </div>
</template>

<script>
export default {
  methods: {
    active(locale) {
      return locale == this.$i18n.locale
    },
  },
}
</script>

<style></style>
