import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../../firebase"
const provider = new GoogleAuthProvider();

export const logIn = (user) => {
    localStorage.setItem('jiouser', JSON.stringify(user));
    return {
        type: 'LOGIN',
        payload: user
    }
}

export const logOut = () => {
    localStorage.removeItem('jiouser');
    return {
        type: 'LOGOUT'
    }
}

export const googleLogInAsync = () => {
    return async dispatch => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                dispatch(logIn(user))
            }).catch((error) => {
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage);
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
