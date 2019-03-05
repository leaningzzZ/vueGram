<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <a
         @click="goToHome"
         v-if=" step===2 || step===3"
         class="cancel-cta">Cancel</a>
        <img src="./assets/vue_gram_logo_cp.png" alt="">
        <a 
         @click="step++"
         v-if=" step===2"
         class="next-cta">Next</a>
        <a
         v-if="step==3"
         @click="share"
         class="next-cta">Share</a>
      </div>
      <Phone-Body 
      :posts="posts"
      :step="step"
      :image="image"
      :filters="filters"
      :selectFilter="selectFilter"
      v-model="caption"
      ></Phone-Body>
      <div class="phone-footer">
        <div class="home-cta">
          <i 
            @click="goToHome"
            class="fas fa-home fa-lg"></i>
        </div>
        <div class="upload-cta">
          <input type="file" name="file" id="file" 
          @change="uploadImg"
          :disabled="step !== 1"
          >
          <label for="file" >
            <i class="fas fa-plus-square fa-lg" ></i>
            </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneBody from "./components/PhoneBody.vue"
import posts from "./data/posts"
import filters from "./data/filters"
import eventBus from "./event-bus.js"
// import func from './vue-temp/vue-editor-bridge';
// console.log(posts)
export default {
  name: 'app',
  created(){
    eventBus.$on("selectFilter",evt=>{
      this.selectFilter=evt;
      console.log(evt)
    })
  },
  components:{
    PhoneBody,
  },
  data(){
    return {
      posts,
      step:1,
      image:"",
      filters,
      selectFilter:"",
      caption:"123",
      }
  },
  methods:{
    uploadImg:function(e){
      const files=e.target.files;
      if(!files.length) return;
      
      const reader =new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload=e=>{
        this.image =e.target.result;
        this.step=2;
        // console.log(this.step)
        // console.log(this.image)
      }
    },
    goToHome(){
      this.step=1;
      this.image="";
      this.selectFilter="";
    },
    share(){
      const post={
        username: "liuzhe",
        userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
        postImage:this.image,
        likes: 0,
        hasBeenLiked: false,
        caption: this.caption,
        filter: this.selectFilter,
      }
      this.posts.unshift(post);
      this.goToHome();
    }
  }
}
</script>

<style lang="scss" src="./styles/app.scss">

</style>
