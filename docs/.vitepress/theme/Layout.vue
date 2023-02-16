<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";

const { Layout } = DefaultTheme;

const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <!-- <template #doc-before
      ><div class="page-first-time">
        首次发布时间：{{ toDate(frontmatter.date) }}
      </div>
    </template> -->
  </Layout>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  methods: {
    toDate(_date) {
      const date = new Date(_date);
      //日期
      const DD = String(date.getDate()).padStart(2, "0"); // 获取日
      const MM = String(date.getMonth() + 1).padStart(2, "0"); //获取月份，1 月为 0
      const yyyy = date.getFullYear(); // 获取年
      return `${yyyy}-${MM}-${DD}`;
    },
  },
};
</script>
<style>
.page-first-time {
  margin-bottom: 30px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
