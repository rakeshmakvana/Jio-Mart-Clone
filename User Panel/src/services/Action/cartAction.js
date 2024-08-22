import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase"

export const set = (data) => {
    return {
        type: 'SET',
        payload: data
    }
}

export const add = (data) => {
    return {
        type: 'ADD',
        payload: data
    }
}

export const remove = () => {
    return {
        type: 'REMOVE'
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}

export const incrementQuantity = (productId) => ({
    type: 'INCREMENT',
    payload: productId
});

export const decrementQuantity = (productId) => ({
    type: 'DECREMENT',
    payload: productId
});

export const setAsync = () => {
    return async dispatch => {
        try {
            const user = JSON.parse(localStorage.getItem('jiouser'));
            const q = query(collection(db, "cart"), where("userId2", "==", user.uid));
            const querySnapshot = await getDocs(q);
            const cartItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch(set(cartItems));
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    }
}

export const addAsync = (product) => {
    return async dispatch => {
        try {
            const user = JSON.parse(localStorage.getItem('jiouser'));
            const cartCollection = collection(db, "cart");
            const docRef = await addDoc(cartCollection, { userId2: user.uid, quantity: 1, ...product });
            dispatch(add({ id: docRef.id, ...product }));
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    }
}

export const removeAsync = (productId) => {
    return async dispatch => {
        try {
            const docRef = doc(db, "cart", productId);
            await deleteDoc(docRef);
            dispatch(remove());
            setAsync();
        } catch (error) {
            console.error("Error removing from cart:", error);
        }
    }
}
