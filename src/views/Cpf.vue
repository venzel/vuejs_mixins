<template>
    <div>{{ cpf | cpf }}</div>
</template>

<script>
export default {
    filters: {
        cpf(value) {
            const arr = value.split('');

            arr.splice(3, 0, '.');
            arr.splice(7, 0, '.');
            arr.splice(11, 0, '-');

            return arr.join('');
        },
    },
    data() {
        return {
            cpf: '67589190178',
        };
    },
};
</script>

<style></style>
