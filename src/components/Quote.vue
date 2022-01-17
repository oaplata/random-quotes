<template>
  <div class="quote">
    <div class="quote-text">{{ text }}</div>
    <div class="quote-author" v-if="author" @click="gotToAuthor">
      <div>
        <span>{{ author }}</span>
        <span>{{ gender }}</span>
      </div>
      <span class="material-icons"> trending_flat </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text', 'author', 'gender'],
  methods: {
    gotToAuthor () {
      this.$router.push(`/${this.author}`)
    }
  }
}
</script>

<style lang="scss">
.quote {
  align-self: center;
  text-align: left;
  .quote-text {
    width: 100%;
    max-width: 600px;
    padding-left: 50px;
    border-left: solid 3px var(--secondary-color);
    font-size: 36px;
    line-height: 42px;
    font-weight: 500;
  }
  .quote-author {
    padding: 50px 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    cursor: pointer;
    transition: all ease-in 0.2s;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    &:hover {
      background-color: var(--primary-color);
      color: #f2f2f2;
    }
    &>div {
      display: flex;
      flex-direction: column;
      &>span:nth-child(2) {
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
        color: #828282;
      }
    }
  }
}
</style>
