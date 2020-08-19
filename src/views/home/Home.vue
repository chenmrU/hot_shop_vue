<template>
    <div>
        <van-search
                v-model="value"
                shape="round"
                background="#4fc08d"
                placeholder="请输入搜索关键词"
        />
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <van-grid>
            <van-grid-item icon="photo-o" text="文字"/>
            <van-grid-item icon="photo-o" text="文字"/>
            <van-grid-item icon="photo-o" text="文字"/>
            <van-grid-item icon="photo-o" text="文字"/>
            <van-grid-item icon="photo-o" text="文字"/>
            <van-grid-item icon="photo-o" text="文字"/>
            <van-grid-item icon="photo-o" text="文字"/>
            <van-grid-item icon="photo-o" text="文字"/>
        </van-grid>
        <van-row>
            <van-col span="12">
                <ProductBlock/>
            </van-col>
            <van-col span="12">
                <ProductBlock/>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import ProductBlock from "../../components/ProductBlock";

    export default {
        name: 'Home',
        components: {ProductBlock},
        data() {
            return {
                value: null
            }
        }
    }
</script>

<style lang="less">
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
</style>