const { createApp } = Vue;
createApp({
    data() {
        return {
            todoList: [
                "pasta",
                "riso",
                "latte",
                "uova",
                "cioccolato",
                "cereali",
            ]
            
        }
    }
    
}).mount('#app');