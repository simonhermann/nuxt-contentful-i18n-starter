<!-- Contentful.vue by Stefan Judis: https://www.contentful.com/blog/2018/01/23/how-to-write-reusable-sane-api-based-components/ -->
<template>
  <div>
    <!-- define a named slot `render` and pass items into it -->
    <slot name="render" :items="items"></slot>
  </div>
</template>

<script>
import { createClient } from 'contentful'

const client = createClient({
  space: 'YOUR SPACE ID',
  accessToken: 'YOUR ACCESS TOKEN'
})

export default {
  props: {
    // make the `query` object required
    // no query no call ;)
    query: {
      type: Object,
      required: true
    }
  },

  data () {
    // set default data
    return {
      items: [],
      error: null
    }
  },

  beforeMount () {
    // make the API call using the passed in query
    // and set it to the object
    // -> it will be passed to the `render` slot
    client.getEntries(this.query)
      .then(({ items }) => {
        this.items = items;
      })
      .catch(error => this.error = error)
  }
}
</script>


// Component in use:
// <Contentful :query="{ content_type: 'yourContentTypeHere', limit: 5, order: '-sys.createdAt', locale: this.$nuxt.$i18n.locale }">
//   <!-- set this part of the template to go into the named slot `render` -->
//   <!-- make the scoped data available via `slot-scope` -->
//   <ul slot="render" slot-scope="{ items }">
//     <li v-for="item in items" :key="item.sys.id">
//       {{ item.fields.title }}
//     </li>
//   </ul>
// </Contentful>