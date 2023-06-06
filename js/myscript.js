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
    },

    methods: {

        //? dovrò creare una funzione che determina che done true mi sbarri le parole

        barredText(){
            if(todoList.done === "true")
        }
        
    },
    
}).mount('#app');