<template>
    <div>
        <h1>Fruits</h1>
        <div>
            <input type="text" v-model="fruit" @keypress.enter="add" />
            <ul>
                <li v-for="(fruit, index) in fruits" :key="index">{{ fruit }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import fruitMixin from './fruit.mixin';

export default {
    mixins: [fruitMixin],
};
</script>

<style></style>
