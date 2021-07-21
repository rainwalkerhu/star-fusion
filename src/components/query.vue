<template>
  <el-form ref="form" :model="form" label-width="80px" class="query__scope">
    <el-row :gutter="16">
      <el-col :span="12">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="用户类型">
          <el-select v-model="form.type" placeholder="请选择用户类型">
            <el-option label="租户" value="user"></el-option>
            <el-option label="管理员" value="admin"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="24" style="text-align: right">
        <el-button plain @click="onReset">重置</el-button>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name: "Query",
  data() {
    return {
      form: {
        name: "",
        type: "",
      },
    };
  },
  methods: {
    onReset() {
      this.form = {
        name: "",
        type: "",
      };
      this.onSubmit();
    },
    onSubmit() {
      this.$emit("submit", this.form);
    },
  },
};
</script>
<style>
.query__scope {
  margin-bottom: 22px;
}
.query__scope .el-select {
  width: 100%;
}
</style>