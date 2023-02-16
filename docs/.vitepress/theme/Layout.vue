<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";

const { Layout } = DefaultTheme;

const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #doc-footer-before> doc-footer-before </template>
    <template #doc-before> doc-before </template>
    <template #doc-after> doc-after </template>
    <template #aside-top> aside-top </template>
    <template #aside-bottom>aside-bottom </template>
    <template #aside-outline-before> aside-outline-before </template>
    <template #aside-outline-after> aside-outline-after </template>
    <template #aside-ads-before> aside-ads-before </template>
    <template #side-ads-after> side-ads-after</template>
    <!-- <span>
        🔗
        <span class="page-info" v-for="item in frontmatter.tags" :key="item">{{
          item
        }}</span>
      </span>
      <span class="page-info">✍️{{ frontmatter.author }}</span>
      <span class="page-info">🕐{{ frontmatter.date }}</span> -->
  </Layout>
</template>

<style>
.page-info {
  font-size: 13px;
  color: #7f7f7f;
  margin-right: 10px;
}
</style>
