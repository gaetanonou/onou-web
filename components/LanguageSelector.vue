<template>
  <div class="mt-5 flex space-x-4">
    <a
      :class="{ 'bg-gradient text-white': active(locale) }"
      class="p-1 rounded w-8 h-8 text-center cursor-pointer bg-gray-100"
      v-for="locale in $i18n.locales"
      :key="locale.code"
      @click.prevent.stop="$i18n.setLocale(locale.code)"
      >{{ locale.code }}</a
    >
  </div>
</template>

<script>
export default {
  methods: {
    active(locale) {
      return locale.code == this.$i18n.locale
    },
  },
}
</script>

<style></style>
