class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todos.todo.push(todo);
        return this.todos;
    }

    delete_todo(id){
        this.todos.todo.splice(id,1);
        return this.todos;
    }

    update_todo(id, todo){
       this.todos.todo[id]["title"]=todo["title"];
       this.todos.todo[id]["description"]=todo["description"];
       this.todos.todo[id]["done"]=todo["done"];
        return this.todos;
    }
   
}


module.exports= todoservice;