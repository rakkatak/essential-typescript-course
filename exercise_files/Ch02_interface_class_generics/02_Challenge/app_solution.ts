
// interface CodingCourse {
//   id: number;
//   title: string;
//   status: Status;
//   completedOn?: Date;
// }

// enum Status {
//     Active = "active",
//     Inactive = "inactive",
//     Done = "done",
//     New = "new",
//     InProgress = "in-progress",
//     ToDo = "todo"
// }

// const todoItems:CodingCourse[] = [
//     { id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11") },
//     { id: 2, title: "Learn TypeScript", status: Status.InProgress },
//     { id: 3, title: "Write the best app in the world", status: Status.ToDo },
// ]

// function addTodoItem(todo: string): CodingCourse {
//     const id = getNextId(todoItems)

//     const newTodo:CodingCourse  = {
//         id,
//         title: todo,
//         status: Status.ToDo,
//     }

//     todoItems.push(newTodo)

//     return newTodo
// }

// function getNextId<T extends CodingCourse>(items: T[]):number {
//     // return items.reduce(myFunc, 0) + 1
//     return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1;
// }

// function myFunc(max, x): number {
//     return x.id > max ? x.id : max;
// }

// const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

// console.log(JSON.stringify(newTodo))
