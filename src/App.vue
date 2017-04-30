<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <b-navbar toggleable type="inverse" variant="success" :class="'page-header'">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <span>Circlee</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item v-for="item in navItemList" 
          :key="item"
          :active="checkActive(item.path)"
          :href="'#' + item.path">
          {{item.name}}
          </b-nav-item>

        </b-nav>
        
        <!-- <b-nav is-nav-bar class="ml-auto">
          
          
          <b-nav-item-dropdown text="Lang" right-alignment>
            <b-dropdown-item to="#">EN</b-dropdown-item>
            <b-dropdown-item to="#">ES</b-dropdown-item>
            <b-dropdown-item to="#">RU</b-dropdown-item>
            <b-dropdown-item to="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          
          <b-nav-item-dropdown right-alignment>
            <template slot="text">
              <span style="font-weight: bold;">User</span>
            </template>
            
            <b-dropdown-item to="#">Profile</b-dropdown-item>
            <b-dropdown-item to="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
         
        </b-nav> -->
      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
  , data : function(){
    return {
      navItemList : [
        {path : '/categories', name : 'Categories'}
        ,{path : '/about', name : 'About'}
        ,{path : '/hello', name : 'hello'}
      ]
    }
  }
  , methods : {
    navClick : function(){
      this.$root.$emit('collapse::toggle', 'nav_collapse')
      window.t = this.$route
    }
    , checkActive : function(path){
      return Boolean(this.$route.path.match(path));
    }
  }
  , mounted : function(){

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/

}


.top-pad {
  padding : 10px;
}

</style>
