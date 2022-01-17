<template>
  <div class="author">
    <h2 class="title">{{ author }}</h2>
    <template v-if="!loading && !errorMessage">
      <Quote
        v-for="quote of quotes"
        :key="quote._id"
        :text="quote.quoteText"
      />
    </template>
    <span v-else-if="loading">Cargando lista de: {{ author }} ...</span>
    <span v-else>{{ errorMessage }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Author',
  components: {
    Quote: () => import('../components/Quote.vue')
  },
  computed: {
    author () {
      return this.$route.params.author
    },
    ...mapState(['loading', 'quotes', 'errorMessage'])
  },
  mounted () {
    this.$store.dispatch('loadAuthorQuotes', this.author)
  }
}
</script>

<style lang="scss">
.author {
  align-self: center;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 140px;
  .title {
    width: 100%;
    max-width: 600px;
    padding-left: 50px;
    font-size: 36px;
    line-height: 42px;
    font-weight: 700;
    color: #333333;
  }
}
</style>
