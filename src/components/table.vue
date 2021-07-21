<template>
  <div class="ele-table__scope">
    <div style="text-align: left; margin-bottom: 22px">
      <el-button type="primary" @click="handleCreate">新增</el-button>
      <el-button
        type="danger"
        plain
        @click="handleBatchDelete"
        :disabled="ids.length === 0"
        >删除</el-button
      >
    </div>
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="用户名" prop="name"> </el-table-column>
      <el-table-column label="用户类型" prop="type"> </el-table-column>
      <el-table-column label="是否启用" prop="disable">
        <template slot-scope="scope">
          <span v-if="scope.row.disable === 0">
            <span class="user-status disable"></span>
            未启用</span
          >
          <span v-else>
            <span class="user-status enable"></span>
            启用</span
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <Dialog ref="new" />
  </div>
</template>

<script>
import Dialog from "./dialog";

export default {
  name: "Table",
  components: {
    Dialog,
  },
  data() {
    return {
      loading: false,
      ids: [],
      tableData: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.tableData = [
        {
          id: 1,
          type: "租户",
          name: "王小虎",
          disable: 0,
        },
        {
          id: 2,
          type: "管理员",
          name: "王大虎",
          disable: 1,
        },
      ];
      window.setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    handleCreate() {
      this.$refs.new.show();
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$refs.new.show(true, row);
    },
    handleDelConfirm(message, params) {
      console.log(params);
      this.$confirm(message, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
      // todo ajax ,传入{{params}}
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.handleDelConfirm("此操作将永久删除该数据, 是否继续?", row.id);
    },
    handleBatchDelete() {
      this.handleDelConfirm("此操作将永久选中的数据, 是否继续?", this.ids);
    },
    handleSelectionChange(selections) {
      const ids = selections.reduce((arr, cur) => {
        arr.push(cur.id);
        return arr;
      }, []);
      this.ids = ids;
    },
  },
};
</script>
<style>
.ele-table__scope .user-status {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
}
.ele-table__scope .user-status.enable {
  background-color: green;
}
.ele-table__scope .user-status.disable {
  background-color: red;
}
</style>