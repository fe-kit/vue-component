<template>
  <div class="container">
    <h1>h1</h1>
    <div class="product-wrapper">
      <ScrollAnim className="product">
        <template v-slot:default="slotProps">
          <div
            class="product-item list-complete-item"
            v-for="(item, index) in list"
            :key="index"
            v-show="slotProps.visible"
          >
            <div class="product-title">{{ item.title }}</div>
            <div class="product-bd">{{ item.msg }}</div>
          </div>
        </template>
      </ScrollAnim>
    </div>
    <h1>h1</h1>
    <div class="product-wrapper">
      <ScrollAnim className="product">
        <template v-slot:default="slotProps">
          <div
            class="product-item list-complete-item"
            v-for="(item, index) in list"
            :key="index"
            :data-index="index"
            v-show="slotProps.visible"
          >
            <div class="product-title">{{ item.title }}</div>
            <div class="product-bd">{{ item.msg }}</div>
          </div>
        </template>
      </ScrollAnim>
    </div>
    <h1>h1</h1>
    <div class="product-wrapper">
      <ScrollAnim className="product">
        <template v-slot:default="slotProps">
          <div
            class="product-item list-complete-item"
            v-for="(item, index) in list"
            :key="index"
            :data-index="index"
            v-show="slotProps.visible"
          >
            <div class="product-title">{{ item.title }}</div>
            <div class="product-bd">{{ item.msg }}</div>
          </div>
        </template>
      </ScrollAnim>
    </div>
    <h1>h1</h1>
    <div class="product-wrapper">
      <ScrollAnim className="product">
        <template v-slot:default="slotProps">
          <div
            class="product-item"
            v-for="(item, index) in list"
            :key="index"
            :data-index="index"
            v-show="slotProps.visible"
          >
            <div class="product-title">{{ item.title }}</div>
            <div class="product-bd">{{ item.msg }}</div>
          </div>
        </template>
      </ScrollAnim>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>
<script>
import Vue from "vue";
import ScrollAnim from "../components/ScrollAnim/index";
Vue.use(ScrollAnim);
export default {
  name: "scrollPage",
  components: { ScrollAnim },
  data() {
    return {
      list: [
        {
          title: "“双10亿+”性能",
          msg:
            "支持10亿+的链上账户数，以及链上各类交易10亿/天的处理能力，支撑亿级城市的区块链的平台的建设。1",
        },
        {
          title: "10万+ 跨链信息处理能力",
          msg:
            "跨链中继组件性能具备横向扩展能力，能同时处理十万级别的跨链流量，且实现端到端延时毫秒级。",
        },
        {
          title: "25,000+ TPS 存证能力",
          msg:
            "在极其严格的全局共识和单片条件下，存证性能达到每链 25,000 TPS。",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding-top: 300px;
  .product {
    border: solid 1px #ccc;
    position: relative;
    counter-reset: func;
    display: -ms-grid;
    display: grid;
    min-height: 240px;
    grid-gap: 64px;
    grid-template-columns: repeat(3, 1fr);
    &-item {
      position: relative;
      padding-top: 37px;
    }

    &-title {
      margin: 0 0 24px;
      color: #0d1a26;
      font-size: 24px;
      line-height: 32px;
    }
    &-bd {
      margin-top: 24px;
      margin-bottom: 0;
      color: #697b8c;
      font-size: 14px;
      line-height: 26px;
    }
  }
}
</style>
