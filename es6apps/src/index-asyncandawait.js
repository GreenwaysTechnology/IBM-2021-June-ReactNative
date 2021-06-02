const getUser = () => {
    let user = { id: 1, name: 'ram' };
    //user=null;
    let err = {
        message: 'User not found'
    }
    if (user) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, user)
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, err)
        });
    }
};

const login = user => {
    let status = "Login success"
    let err = "Login failed"
    if (user.name === 'ram') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, status)
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, err)
        });
    }
}

const showPage = status => {
    if (status === 'Login success') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, { message: 'You are registered user' });
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, { message: 'You are guest' });
        });
    }
}

// getUser()
//     .then(user => login(user))
//     .then(status => showPage(status))
//     .then(page => console.log(page))
//     .catch(err => console.log(err))

//async ... await keywords
async function main() {
    try {
        const user = await getUser();
        const status = await login(user)
        const page = await showPage(status);
        console.log(user, status, page)
    }
    catch (err) {
        console.log(err)
    }
}

main()