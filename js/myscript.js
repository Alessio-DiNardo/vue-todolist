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

        addNewTodoList(todoElement){
            if (this.newElement !== ""){
                this.todoList.push(todoElement);
                this.newElement = "";
            }
        },

        removedNewTodoList(todoElementIndex){
            if (todoElementIndex >= this.todoList.length || todoElementIndex < 0){

            }else {
                const removeElement = this.todoList.splice(todoElementIndex, 1);
                this.todoList.splice(todoElementIndex, 1);
            }
        }
    },
    
}).mount('#app');