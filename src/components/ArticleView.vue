<template>
  <div class="top-pad" >
  <h1 v-show="loadingFlag">Loading ...</h1>
   {{msgData.name}}
   <div v-html="markDownToHtml(msgData.text)"></div>

   <b-button size="sm" variant="outline-success" :href="'#/categories/' + categoryId + '/articles/' + articleId + '/edit'">
          Modify Article
  </b-button>

  </div>
</template> 

<script>
import markdown from 'markdown';

export default {
  name: 'hello',
  data () {
    return {
      loadingFlag : true ,
      categoryId : this.$route.params.categoryId,
      articleId : this.$route.params.articleId,
      msgData : []
    }
  },
  computed : {
    fiteredData : function(){
      return this.msgData.filter(function(item){return item});
    }
  },
  methods : {
      markDownToHtml : function(data){
        var converter = new showdown.Converter();
        return converter.makeHtml(data);
        // return markdown.markdown.toHTML( data )
      },
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

      

      var startMsgRef = firebase.database().ref('categories/'+vueObj.categoryId+'/articles/'+vueObj.articleId+'/');
      startMsgRef.on('value', function(snapshot) {

        vueObj.setData(snapshot.val());
      });

      var msgRefs = firebase.database().ref('categories/'+vueObj.categoryId+'/articles/'+vueObj.articleId+'/');
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
