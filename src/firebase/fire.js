import auth from '@react-native-firebase/auth';

export function login(email, password) {
    auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });

    console.log('login');
}

export function signup(email, password) {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });

    console.log('signup');
}


export function logout() {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}


export function makeAdmin() {
    auth().currentUser.updateProfile({
        displayName: "admin"
    }).then(() => {
        console.log('made admin!');
    }).catch(function (error) {
        // An error happened.
    });
}