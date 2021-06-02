
//Promise.resolve('data') // timer with 0 ms

const getUser = () => {
    let user = { id: 1, name: 'ram' };
    //user=null;
    if (user) {
        //Promise Constructors
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, user);
            //ajax api
            //websocket api
            //dom api
            //networking api
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, { message: 'No user found' });
        })
    }
};

console.log('start')
getUser()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('done'));
console.log('end')