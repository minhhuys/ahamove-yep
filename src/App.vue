<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
*,
:after,
:before {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
#app {
  font-family: "Roboto", sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main-layout {
  max-width: 1200px;
  margin: 0 auto;
}
.d-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.text-center {
  text-align: center;
}
.space-between {
  justify-content: space-between;
}
.space-around {
  justify-content: space-around;
}
.btn-customize {
  background-color: #ff8200;
  height: 48px;
  border: none;
  color: white;
  font-weight: 600;
  outline: none;
  cursor: pointer;
}

@media screen and (max-width: 780px) {
  .main-layout {
    max-width: 100%;
  }
}
</style>
