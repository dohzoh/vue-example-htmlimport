<template>
  <div @click="changeName()">
    Hello, {{name}}.
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "world"
    };
  },
  methods: {
    changeName() {
      this.name = "foobar";
    }
  }
};
</script>

<style lang="less" scoped>
div {
  font-weight: bold;
  color: red;
}
</style>