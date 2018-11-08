<template>
  <section class="container">
    <div>

      <section>
        <h1>{{ $t('headingText') }}</h1>
      </section>

      <Contentful :query="{ content_type: 'blogPost', limit: 5, order: '-sys.createdAt', locale: this.$nuxt.$i18n.locale }">
        <ul slot="render" slot-scope="{ items }">
          <li v-for="item in items" :key="item.sys.id">
            {{ item.fields.title }}
          </li>
        </ul>
      </Contentful>

    </div>
  </section>
</template>

<script>
import Contentful from '~/components/Contentful.vue'

export default {
  components: {
    Contentful
  }
}
</script>

<style>

</style>
