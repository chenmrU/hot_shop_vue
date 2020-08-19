<template>
    <div>
        <van-row>
        <van-image
                width="80%"
                height="100"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg">
            <template v-slot:loading>
                <van-loading type="spinner" size="20"/>
            </template>
            <template v-slot:error>加载失败</template>
        </van-image>
        </van-row>
        <van-row>
            <span>一只猫</span>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "ProductBlock"
    }
</script>

<style lang="less">
    span {
        color: #ff543e;
        font-size: 20px;
        font-family: SimSun,serif
    }
</style>