<script setup>
useHead({
    meta: {
        title: "My Count",
        description: "My Count",
        keywords: "My Count",
    },
    titleTemplate: "My Count",
});
</script>
<template>
    <div>
        <header>기본 레이아웃</header>
        <main>
            <!-- 여기에 페이지가 로드됩니다. -->
            <slot />
        </main>
    </div>
</template>
