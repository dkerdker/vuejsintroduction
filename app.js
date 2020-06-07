new Vue({
    el: '#app',
    data: {
        title: 'Vue Slayer',
        name: 'Devion',
        url: 'http://www.youtube.com',
        classes: ['one', 'two'],
        table_class: 'three',
        wage: 10,

        coords: {
            x: 0,
            y: 0
        },
        showRicardo: true,

        monsters: ['Orage Mushrooms', 'Blue Snails', 'Stumps', 'Pigs', 'Slimes'],

        troopers: [
            { name: 'Younger', age: 41, rank: 'Sergeant Major'},
            { name: 'Eli', age: 38, rank: 'Leftenant Prime'},
            { name: 'Ryu', age: 39, rank: 'Leftenant'},
            { name: 'Hersh', age: 29, rank: 'Private'}
        ]
    },

    methods: {
        greet(time){
            return `Hello World! Good ${time}! We are gonna become a ${this.title}`
        },
        changeWage(amount) {
            this.wage += amount
        },
        logClickEvent(eventObject) {
            console.log(eventObject)
        },
        logCoordinate(eventObject) {
            this.coords.x = eventObject.offsetX
            this.coords.y = eventObject.offsetY
        },
        // logKeyUpEvent(eventObject) {
        //     this.name = eventObject.target.value
        // }
        toggleName() {
            this.showRicardo = !this.showRicardo
        },
        doMath(index) {
            index+1
        }
    }
})