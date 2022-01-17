<template>
  <div id="app">
    <div class="header">
      <div class="header-button" @click="randomQuote">
        <div class="header-text">random</div>
        <span class="material-icons header-icon"> autorenew </span>
      </div>
    </div>
    <router-view class="content" />
  </div>
</template>
<script>
export default {
  methods: {
    randomQuote () {
      if (this.$route.name !== 'Home') {
        this.$router.push('/')
      }
      this.$store.dispatch('loadRandomQuote')
    }
  },
  mounted () {
    this.$store.dispatch('loadRandomQuote')
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap");

:root {
  --primary-color: #333333;
  --secondary-color: #f7df94;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header {
  display: flex;
  gap: 11px;
  justify-content: flex-end;
  padding: 31px 100px;
  position: sticky;
  background: #fff;
  top: 0;
  width: 100%;
  .header-button {
    display: flex;
    gap: 11px;
    justify-content: flex-end;
    color: #333;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    cursor: pointer;
  }
}
.content {
  flex: 1;
  display: flex;
  align-items: center;
}
</style>
