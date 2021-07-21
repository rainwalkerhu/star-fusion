<template>
    <el-dialog
        title="提示"
        align="left"
        :visible.sync="dialogVisible"
        width="600px">
        <span>我是弹窗，传入数据{{user}}</span>
    </el-dialog>
</template>
<script>
export default {
    name: "Dialog",
    props: {
        // user: {
        //     type: Object,
        //     default: null
        // }
    },
    data() {
        return {
            dialogVisible: false,
            user: ''
        }
    },
    methods: {
        show(visible = true, params) {
            this.dialogVisible = visible
            if (params) this.user = params
        }
    }
}
</script>