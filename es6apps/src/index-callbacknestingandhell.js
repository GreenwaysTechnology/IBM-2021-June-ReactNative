const getUser = (resolve, reject) => {
    let user = { id: 1, name: 'ram' };
    //user = null;
    if (user) {
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(reject, 1000, { message: 'No user found' });
    }
};


const login = (user, resolve, reject) => {
    if (user.name === 'ram') {
        setTimeout(resolve, 1000, 'login success');
    } else {
        setTimeout(reject, 1000, { message: 'login failed' });
    }
}

//show page  based on login
const showPage = (status, resolve, reject) => {
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'You are registered User');
    } else {
        setTimeout(reject, 1000, { message: 'You are guest' });
    }
}

getUser(user => {
    console.log('get user is called')
    login(user, status => {
        console.log('login is called')
        showPage(status, page => {
            console.log('show page is called')
            console.log(page)
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}, err => console.log(err));

