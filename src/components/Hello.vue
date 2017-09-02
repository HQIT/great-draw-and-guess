<template>
  <div class="container">
    <div class="title">Formdata 上传 demo</div>

    <!-- Document：https://developer.qiniu.com/kodo/manual/form-upload -->
    <form id="testform" method="post" enctype="multipart/form-data">
      <input name="key" id="key" type="hidden" value="" :value="key">
      <input name="token" type="hidden" value="QWYn5TFQsLLU1pL5MFEmX3s5DmHdUThav9WyOWOm:kbjZynq_4dHbcmeSw-zjKtNQ6ms=:eyJkZWxldGVBZnRlckRheXMiOjcsInNjb3BlIjoianNzZGsiLCJkZWFkbGluZSI6MTUwNDM1NzYzN30=">
      <input id="userfile" name="file" type="file" @change="on_file_changed">

      <!-- take photo with phone -->
      <!-- <input id="userfile" name="file" accept="image/*" type="file" /> -->

      <!-- take video with phone -->
      <!-- <input id="userfile" name="file" type="file" accept="video/*"/> -->

      <input name="accept" type="hidden">
    </form>
    
    <!-- add file -->
    <label for="userfile">
      <span></span>
      <em>添加文件</em>
    </label>

    <a href="https://segmentfault.com/a/1190000008479698">https://segmentfault.com/a/1190000008479698</a>

    <p>https://scotch.io/tutorials/how-to-handle-file-uploads-in-vue-2</p>

    <!-- upload info -->
    <div class="selected-file">{{files}}</div>
    <div class="progress">{{progress}}</div>
    <div class="uploaded-result">{{uploaded_result}}</div>
  </div>
</template>

<script>
/*
  $("#userfile").change(function() {  // you can ues 'onchange' here to uplpad automatically after select a file
    $uploadedResult.html('');
    var selectedFile = $userfile.val();
    if (selectedFile) {
      // randomly generate the final file name
      var ramdomName = Math.random().toString(36).substr(2) + $userfile.val().match(/\.?[^.\/]+$/);
      $key.val(ramdomName);
      $selectedFile.html('文件：' + selectedFile);
    } else {
      return false;
    }
    var f = new FormData(document.getElementById("testform"));
    $.ajax({
      url: 'http://upload.qiniu.com/',  // Different bucket zone has different upload url, you can get right url by the browser error massage when uploading a file with wrong upload url.
      type: 'POST',
      data: f,
      processData: false,
      contentType: false,
      xhr: function(){
        myXhr = $.ajaxSettings.xhr();
        if(myXhr.upload){
          myXhr.upload.addEventListener('progress',function(e) {
            if (e.lengthComputable) {
              var percent = e.loaded/e.total*100;
              $progress.html('上传：' + e.loaded + "/" + e.total+" bytes. " + percent.toFixed(2) + "%");
            }
          }, false);
        }
        return myXhr;
      },
      success: function(res) {
        console.log("成功：" + JSON.stringify(res));
        var str = '<span>已上传：' + res.key + '</span>';
        if (res.key && res.key.match(/\.(jpg|jpeg|png|gif)$/)) {
          str += '<img src="' + domain + res.key + '"/>';
        }
        $uploadedResult.html(str);
      },
      error: function(res) {
        console.log("失败:" +  JSON.stringify(res));
        $uploadedResult.html('上传失败：' + res.responseText);
      }
    });
    return false;
  }); */

export default {
  name: 'hello',
  data () {
    return {
      key: '',
      files: [],
      progress: 0,
      uploaded_result: ''
    }
  },
  created () {
  },
  watch: {
  },
  methods: {
    on_file_changed (e) {
      console.log('on_file_changed',
        e,
        e.target,
        e.target.value,
        e.target.files,
        this.files)
      this.files = e.target.files
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
