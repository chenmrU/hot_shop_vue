<template>
    <div>
        <van-search
                v-model="value"
                shape="round"
                background="#4fc08d"
                placeholder="请输入搜索关键词"
        />
        <van-tree-select
                :items="items"
                :active-id.sync="activeId"
                :main-active-index.sync="activeIndex"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [{text: '分组 1'}, {text: '分组 2'}],
                activeId: 1,
                activeIndex: 0,
                value: null
            };
        },
    };
</script>

<style lang="less">
    .home div {
        // background: darkblue;
        width: 75px;
        height: 75px;
        font-size: 18PX;

        i {
            color: red;
        }
    }
</style>