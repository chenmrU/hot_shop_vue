<template>
    <div>
        <van-image
                width="100%"
                height="100"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg">
            <template v-slot:loading>
                <van-loading type="spinner" size="20"/>
            </template>
            <template v-slot:error>加载失败</template>
        </van-image>
        一只猫
    </div>
</template>

<script>
    export default {
        name: "ProductBlock"
    }
</script>