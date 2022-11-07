

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    //Default lenght is 3 after adding a element to list it would be 4
    test("add_todo", () => {
        expect(todo_service.add_todo(todo1).todo.length).toEqual(4);
    });


 //  length of the todo list after adding is 4 //after deleting it would be 3.
    test("delete_todo", () => {
        expect(todo_service.delete_todo(1).todo.length).toEqual(3);
    });


    // Updating todo of id 1 with data from custom todo input and checking if it's equal to provided data
    test("update_todo", () => {
        expect(todo_service.delete_todo(1,todo1).todo[1]["title"]).toEqual("T4");
    });

});