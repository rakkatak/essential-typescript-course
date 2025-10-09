
class ToDo {
    id: number
    title: string
    status: ToDoStatus
    completedOn?: Date
}

enum ToDoStatus {
    Done = "done",
    ToDo = "todo",
    InProgress = "in-progress"
}

const todoItems: ToDo[] = [
    { id: 1, title: "Learn HTML", status: ToDoStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: ToDoStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: ToDoStatus.ToDo },
]

function addTodoItem(toDoTitle: string): ToDo {
    const id = getNextId(todoItems)

    const newTodo: ToDo = {
        id,
        title: toDoTitle,
        status: ToDoStatus.ToDo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends ToDo>(items: T[]): number {
    return  items.reduce(getMaxId2, 0) + 1
}

function getMaxId2<T extends ToDo>(max: number, x: T): number {
    return x.id > max ? x.id : max;
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))
