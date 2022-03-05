export default {
    data() {
        return {
            fruit: '',
            fruits: ['orange', 'apple', 'strawberry'],
        };
    },
    methods: {
        add() {
            this.fruits.push(this.fruit);
            this.fruit = '';
        },
    },
};
