import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const get = (data) => {
    return {
        type: 'GET',
        payload: data
    }
}

export const getAsync = () => {
    return async dispatch => {
        try {
            const querySnapshot = await getDocs(collection(db, "product"));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch(get(data));
        } catch (error) {
            console.log(error);
        }
    };
};