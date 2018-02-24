<template>
    <div>
        <hr>
        <div class="list">
            <div class="title"><strong>{{ title }}</strong></div>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "feature-list",
        props: ['title','items']
    }
</script>

<style scoped>
    hr {
        border: 0;
        border-bottom: 1px solid #dce0e0;
    }
    .list {
        display: flex;
        flex-wrap: nowrap;
        margin: 2em 0;
    }

    .list .title {flex: 1 1 25%;}

    .list .content{
        display: flex;
        flex: 1 1 75%;
        flex-wrap: wrap;
    }

    .list .list-item{
        flex: 0 0 50%;
        margin-bottom: 16px;
    }

    .list .list-item > i {width: 35px;}

    @media(max-width: 743px){
        .list .title{flex: 1 1 33%;}
        .list .content{flex: 1 1 67%;}
        .list .list-item{ flex: 0 0 100%}
    }

</style>