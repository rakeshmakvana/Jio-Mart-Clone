import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { db, storage } from "../../firebase"

export const add = (data) => {
    return {
        type: 'ADD',
        payload: data
    }
}

export const get = (data) => {
    return {
        type: 'GET',
        payload: data
    }
}

export const update = (data) => {
    return {
        type: 'UPDATE',
        payload: data
    }
}

export const delet = () => {
    return {
        type: 'DELET',
    }
}

export const addAsync = (data, imageFile) => {
    return async dispatch => {
        try {
            const user = JSON.parse(localStorage.getItem('jiouser2'));
            let downloadURL = '';
            if (imageFile) {
                const storageRef = ref(storage, `images/${imageFile.name}`);
                const uploadTask = uploadBytesResumable(storageRef, imageFile);
                await new Promise((resolve, reject) => {
                    uploadTask.on(
                        'state_changed',
                        snapshot => { },
                        error => reject(error),
                        async () => {
                            downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            resolve();
                        }
                    );
                });
            }
            const docRef = await addDoc(collection(db, "product"), { ...data, imageUrl: downloadURL, userId: user.uid });
            dispatch(add({ id: docRef.id, ...data, imageUrl: downloadURL, userId: user.uid }));
            dispatch(getAsync());
        } catch (error) {
            console.log(error);
        }
    };
};

export const getAsync = () => {
    return async dispatch => {
        try {
            const user = JSON.parse(localStorage.getItem('jiouser2'));
            const q = query(collection(db, "product"), where("userId", "==", user.uid));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch(get(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateAsync = (id, updatedData, imageFile) => {
    return async dispatch => {
        try {
            const docRef = doc(db, "product", id);
            let downloadURL = updatedData.imageUrl;
            if (imageFile) {
                const storageRef2 = ref(storage, downloadURL);
                deleteObject(storageRef2);
                const storageRef = ref(storage, `images/${imageFile.name}`);
                const uploadTask = uploadBytesResumable(storageRef, imageFile);
                await new Promise((resolve, reject) => {
                    uploadTask.on(
                        'state_changed',
                        snapshot => { },
                        error => reject(error),
                        async () => {
                            downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            resolve();
                        }
                    );
                });
            }
            await updateDoc(docRef, { ...updatedData, imageUrl: downloadURL });
            dispatch(update({ id, ...updatedData, imageUrl: downloadURL }));
            dispatch(getAsync());
        } catch (error) {
            console.log(error);
        }
    };
};

export const deletAsync = (id) => {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const product = state.productReducer.products.find(p => p.id === id);
            if (product) {
                const imageUrl = product.imageUrl;
                if (imageUrl) {
                    const storageRef = ref(storage, imageUrl);
                    await deleteObject(storageRef);
                }
            }
            const docRef = doc(db, "product", id);
            await deleteDoc(docRef);
            dispatch(delet());
            dispatch(getAsync());
        } catch (error) {
            console.log(error);
        }
    };
};
