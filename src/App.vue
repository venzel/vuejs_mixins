<template>
    <div>
        <Cpf />
        <hr />
        <Fruit />
    </div>
</template>

<script>
import Cpf from './views/Cpf.vue';
import Fruit from './views/Fruit.vue';

export default {
    components: { Cpf, Fruit },
};
</script>

<style></style>
