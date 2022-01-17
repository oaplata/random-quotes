<template>
  <div class="home">
    <Quote
      v-if="!loading && quote"
      :text="quote.quoteText"
      :author="quote.quoteAuthor"
      :gender="quote.quoteGenre"
    />
    <span v-else>Cargando informacion ...</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Quote: () => import('../components/Quote.vue')
  },
  computed: {
    ...mapState(['loading', 'errorMessage', 'quote'])
  }
}
</script>
<style lang="scss">
.home {
  align-self: center;
  text-align: left;
}

</style>
