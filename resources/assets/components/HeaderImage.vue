<template>
    <div class="header">
        <div class="header-img" :style="headerImageStyle" @click="$emit('header-clicked')">
            <button class="view-photos">View Photos</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-image",
        computed: {
            headerImageStyle(){
                return {'background-image':`url(${this.imageUrl})`};
            },
        },
        props: ['image-url']
    }
</script>

<style scoped>
    .header {height: 320px;}

    .header .header-img {
        background: #f5f5f5 no-repeat 50% 50%;
        background-size: cover;
        cursor: pointer;
        height: 100%;
        position: relative;
    }
    .header .header-img button{
        font-size: 14px;
        padding: 7px 18px;
        color: #484848;
        line-height: 1.43;
        background: #fff;
        font-weight: bold;
        border-radius: 4px;
        border: 1px solid #c4c4c4;
    }
    .header .header-img button.view-photos {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }

</style>