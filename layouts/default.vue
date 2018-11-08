<template>
  <div>
    <noscript>
      Please enable Javascript in your browser.
    </noscript>
    <div class="lang-switcher">
      <nuxt-link :to="switchLocalePath('en')" v-show="this.$nuxt.$i18n.locale == 'de'">Switch to english version</nuxt-link>
      <nuxt-link :to="switchLocalePath('de')" v-show="this.$nuxt.$i18n.locale == 'en'">Zu deutscher Version wechseln</nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<style>

noscript {
  margin: 0 auto 1rem;
  display: block;
  width: 100%;
  text-align: center;
  background-color: rgb(139, 15, 15);
  color: white;
  font-weight: bold;
  font-size: 14px;
}

</style>


