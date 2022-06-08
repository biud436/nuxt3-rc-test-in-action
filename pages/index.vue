<script setup>
import { MyCount } from "~/components/MyCount";

const myCount = ref(new MyCount());
</script>

<template>
    <div class="my-count">
        <div>{{ myCount.count }}</div>
        <button @click="myCount.increment">+</button>
    </div>
    <ul>
        <li v-for="(item, index) in Array(myCount.count).fill(0)" :key="index">
            {{ index }}
        </li>
    </ul>
</template>

<style lang="scss">
.my-count {
    color: red;
}
</style>
