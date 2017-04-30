<template>
  <div class="top-pad" >
  <h1 v-show="loadingFlag">Loading ...</h1>
  <b-button size="sm" variant="outline-success" href="">
          Add Article
  </b-button>
   <b-list-group>
    <b-list-group-item  v-for="item, idx in fiteredData"
    v-show="item" 
    :key="item"
    :to="'/categories/'+ categoryId + '/articles/' + item.id + '/view'">
      {{item.name}}
    </b-list-group-item>
  </b-list-group>
  </div>
</template> 

<script>
export default {
  name: 'hello',
  data () {
    return {
      loadingFlag : true ,
      categoryId : this.$route.params.categoryId,
      msgData : []
    }
  },
  computed : {
    fiteredData : function(){
      this.msgData.forEach(function(item,idx){ item.id = idx;});
      
      return this.msgData.filter(function(item){return item});
    }
  },
  methods : {
      setData : function(data){
        this.loadingFlag = false;
        if(data) {
          this.msgData = data;
        }
        
      }
      , setDataValue : function(key , val) {
        if(key) {
          this.msgData[key] = val;
        }
        
      }
      , delDataValue : function(key) {
        if(key) {
          this.msgData[key];
        }
      }
  },
  created : function(){
      var vueObj = this;

      

      var startMsgRef = firebase.database().ref('categories/'+vueObj.categoryId+'/articles');
      startMsgRef.on('value', function(snapshot) {
        vueObj.setData(snapshot.val());
      });

      var msgRefs = firebase.database().ref('categories/'+vueObj.categoryId+'/articles');
      msgRefs.on('child_added', function(data) {
        vueObj.setDataValue(data.key , data.val());
      });

      msgRefs.on('child_changed', function(data) {
        vueObj.setDataValue(data.key , data.val());
      });

      msgRefs.on('child_removed', function(data) {
        vueObj.delDataValue(data.key);
      });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
