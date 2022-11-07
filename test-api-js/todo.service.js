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
const a = new todoservice();
/*a.add_todo({"id":4,"title":"dummy","done":true})*/
/*a.delete_todo(2,{"id":2,"title":"T1","done":false})*/
/*a.update_todo(2,{"id":2,"title":"sunny","done":false}) */

console.log(a.get_todos())


module.exports= todoservice;