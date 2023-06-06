const { createApp } = Vue;
createApp({
    data() {
        return {
            todoList: [
                {
                    text: "pasta",
                    done: "true",
                },
                {
                    text: "pollo",
                    done: "false",
                },
                {
                    text: "riso",
                    done: "false",
                },
                {
                    text: "latte",
                    done: "false",
                },
                {
                    text: "cioccolata",
                    done: "true",
                },
                {
                    text: "uova",
                    done: "true",
                }
                
            ],
            newElement: "",
            
        }
    }
    
}).mount('#app');