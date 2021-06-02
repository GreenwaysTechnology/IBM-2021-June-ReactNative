import TodoService, { foo } from './services/TodoService';

async function main() {
    let { findAll } = new TodoService();
    try {
        console.log(await findAll())
        console.log(foo)
    }
    catch (err) {

    }
}
main()