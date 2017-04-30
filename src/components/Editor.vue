<template>
  <textarea>{{initMsg}}</textarea>
</template>

<script>
export default {
  name: 'editor',
  props : ['initMsg'],
  data () {
    return {
      id: new Date()
    }
  }
  ,methods : {
    getContent : function(){
      return tinymce.activeEditor.getContent();
    }
  }
  ,mounted : function(){
    var vueObj = this;
   // vueObj.summernote = $(vueObj.$el).summernote();

   vueObj.tinymce =  tinymce.init({selector : 'textarea'});
   vueObj.$watch('initMsg', function(){
    vueObj.tinymce =  tinymce.init({selector : 'textarea'});
   })
   this.msg = new Date()
   
  }, created : function(){
    for (var i = tinymce.editors.length - 1 ; i > -1 ; i--) {
            var ed_id = tinymce.editors[i].id;
            tinyMCE.execCommand("mceRemoveEditor", true, ed_id);
        }
  }
}
</script>
