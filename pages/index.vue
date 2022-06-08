<script setup>
import { MyCount } from "~/components/MyCount";
definePageMeta({
    layout: "default",
});

const myCount = ref(new MyCount());
</script>

<template>
    <div :class="$style.red">
        <div>{{ myCount.count }}</div>
        <button :class="$style.buttonPrimary" @click="myCount.increment">
            +
        </button>
        <button :class="$style.buttonPrimary" @click="myCount.decrement">
            -
        </button>
    </div>
    <ul>
        <li
            v-for="(item, index) in Array(myCount.count).fill(0)"
            :key="index"
            :class="$style.green"
        >
            {{ index }}
        </li>
    </ul>
</template>

<style lang="scss" module>
// 모듈화 테스트
.red {
    color: red;
}

.green {
    color: green;
}

.buttonPrimary {
    display: inline;
    justify-content: space-around;
    background: #efefef;
    border: 1px solid #ccc;
    font-size: 1em;
    padding: 0.5em;
}
</style>
