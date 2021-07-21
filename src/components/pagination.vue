<template>
  <el-pagination
    class="pagination__scope"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
  >
  </el-pagination>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      pageSizes: [1, 2, 5, 10],
      pageSize: 1,
      currentPage: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.$emit("size-change", {
        pageSize: this.pageSize,
        currentPage: this.currentPage,
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.$emit("current-change", {
        pageSize: this.pageSize,
        currentPage: this.currentPage,
      });
    },
  },
};
</script>
<style>
.pagination__scope {
  text-align: right;
  margin-top: 22px;
}
</style>