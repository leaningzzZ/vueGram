<template>
    <div class="filter-type">
        <p>{{ filter.name}}</p>
        <div class="img" 
        :style="{backgroundImage: 'url('+ image +')' }"
        :class="filter.name"
        @click="seclectFilter"
        ></div>
    </div>
</template>
<script>
import eventBus from "../event-bus.js"
export default {
    props:{
        filter:Object,
        image:String,
    },
    methods:{
        seclectFilter(){
            eventBus.$emit("selectFilter",this.filter.name)
            console.log(eventBus)
        }
    }
}
</script>
<style lang="scss" src="../styles/filter-type.scss">

</style>
