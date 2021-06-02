
// export default class TodoService {
//     constructor() {
//         console.log('todo constructor')
//     }
//     findAll() {
//         return 'findAll'
//     }
// }
//export default foo = "bar";

export const foo = "bar";

class TodoService {
    constructor() {
        console.log('todo constructor')
    }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, "findall")
        })
    }
}

export default TodoService;
