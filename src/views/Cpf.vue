<template>
    <div>
        <div>{{ cpf | cpf | inverter }}</div>
        <hr />
        <div>
            <input type="text" :value="cpf | cpf" />
        </div>
        <hr />
        <div>
            <input type="text" v-model="cpf" />
        </div>
    </div>
</template>

<script>
export default {
    filters: {
        cpf(value) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
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
