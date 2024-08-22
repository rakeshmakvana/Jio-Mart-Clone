import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { auth } from "../../firebase"

export const logIn = (user) => {
    localStorage.setItem('jiouser2', JSON.stringify(user));
    return {
        type: 'LOGIN',
        payload: user
    }
}

export const register = (user) => {
    return {
        type: 'REGISTER',
        payload: user
    }
}

export const logOut = () => {
    localStorage.removeItem('jiouser2');
    return {
        type: 'LOGOUT'
    }
}

export const err = (err) => {
    return {
        type: 'ERROR',
        payload: err
    }
}

export const loading = () => {
    return {
        type: 'LOADING'
    }
}

export const logInAsync = (data) => {
    return async dispatch => {
        dispatch(loading());
        await signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(logIn(user));
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/network-request-failed).') {
                    dispatch(err('Invalid Network Connection.'));
                } else if (errorMessage === 'Firebase: Error (auth/invalid-credential).') {
                    dispatch(err('Invalid Email or Password.'))
                }
            });
    }
}

export const registerAsync = (data) => {
    return async dispatch => {
        dispatch(loading());
        await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const name = data.name;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png"
                })
                dispatch(register(user));
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                    dispatch(err('Email Already Register.'));
                } else if (errorMessage === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    dispatch(err('Password Must Be 6 Characters'));
                } else if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
                    dispatch(err('Invalid Email.'));
                } else if (errorMessage === 'Firebase: Error (auth/network-request-failed).') {
                    dispatch(err('Invalid Network Connection.'));
                }
            });
    }
}

export const logOutAsync = () => {
    return async dispatch => {
        await signOut(auth).then(() => {
            dispatch(logOut());
        }).catch((error) => {
            console.log(error);
        });
    }
}
