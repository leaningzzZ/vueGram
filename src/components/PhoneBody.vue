<template>
    <div class="phone-body">
        <div class="feed" v-if="step ===1" v-dragscroll>
            <VuegramPost
            v-for="(post,index) in posts"
            :key="index"
            :post="post"
            ></VuegramPost>
        </div>
        <div v-if="step === 2 ">
            <div  class="selected-image" 
                :style="{backgroundImage: 'url('+ image +')' }"
                :class="selectFilter">
            </div>
            <div class="filter-container" v-dragscroll>
                <filter-type
                v-for="filter in filters"
                :key="filter.name"
                :filter="filter"
                :image="image"
                ></filter-type>
            </div>
        </div>
        <div v-if="step==3">
            <div  
                class="selected-image" 
                :style="{backgroundImage: 'url('+ image +')' }"
                :class="selectFilter"
                ></div>
                <div class="caption-container">
                    <textarea placeholder="Write a caption..." :value="value" @input="inputText"></textarea>
                </div>
        </div>
    </div>
</template>
<script>
import VuegramPost from "./VuegramPost.vue"
import filterType from "./filterType.vue"
export default {
    props:{
        posts:Array,
        step:Number,
        image:String,
        filters:Array,
        selectFilter:String,
        value:String,
    },
    components:{
        VuegramPost,
        filterType,
    },
    data(){
        return {
            filterName:""
            }
    },
    methods:{
        inputText(event){
            this.$emit("input",event.target.value);
            console.log(event.target.value)
        }
    }
}
</script>
<style lang="scss" src="../styles/phone-body.scss">

</style>