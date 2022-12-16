import {
    doc, getDoc, getDocs, updateDoc, addDoc,
    collection, serverTimestamp,
    query, orderBy, deleteDoc,
} from '@firebase/firestore'
import {  database } from '../firebase-config'

export const GetSingleData = async (collection, uid) => {
    const snapshot = await getDoc(doc(database, collection, uid))
    const data = snapshot.data();
    return data
}

export const AddBlogData = async (newBlog, clearInputField) => {
    try {
        const currentUserInfo = JSON.parse(localStorage.getItem('currentUser'))
        const blogRef = await addDoc(collection(database, "blogs"), { ...newBlog, createdAt: serverTimestamp() });
        const newUserData = {
            'userEmail': currentUserInfo.userEmail,
            'lastName': currentUserInfo.lastName,
            'firstName': currentUserInfo.firstName,
            "blogs": [
                ...currentUserInfo.blogs,
                blogRef.id
            ],
            'uid':currentUserInfo.uid
        }
        UpdateData(currentUserInfo.uid,'users',newUserData)
        localStorage.setItem('currentUser', JSON.stringify(newUserData))
        clearInputField()
    }
    catch (e) {
        console.error("Error adding document: ", e.message);
    }
}

export const GetAllOrderedBlogs = async (fieldPath) => {
    const blogs = [];
    const blogCollection = collection(database, "blogs");
    const orderByCreatedQueryAndLimit = query(blogCollection, orderBy(fieldPath, 'desc'));
    const blogsSnapshot = await getDocs(orderByCreatedQueryAndLimit);

    blogsSnapshot.forEach((doc) => {
        const blogDoc = doc.data();
        blogDoc.id = doc.id;
        blogs.push(blogDoc)
    })

    return blogs
}

export const GetBlogById = async (id) => {
    const blogRef = await getDoc(doc(database, "blogs", id));
    return blogRef.data();
}

export const DeleteBlogById = async (id) => {
    try {
        await deleteDoc(doc(database, 'blogs', id))
        const currentUserData = JSON.parse(localStorage.getItem('currentUser'))
        const newUserData = {
            'uid':currentUserData.uid,
            'userEmail': currentUserData.userEmail,
            'lastName': currentUserData.lastName,
            'firstName': currentUserData.firstName,
            "blogs": [...currentUserData.blogs.filter(blogId => blogId !== id)],
        }
        await updateDoc(doc(database, 'users', currentUserData.uid), newUserData)
        localStorage.setItem('currentUser',JSON.stringify(newUserData))
    } catch (error) {
        console.log('An error has occured', error)
    }
}

export const UpdateData = async (id, collection, newData,clearInputField) => {
    try {
        await updateDoc(doc(database, collection, id), newData)
        clearInputField()
    } catch (e) {
        console.error("Error adding document: ", e.message);
    }
}

export const GetAllUser = async () => {
    const users = [];
    const userCollection = collection(database, "users");
    const usersSnapshot = await getDocs(userCollection);

    usersSnapshot.forEach((doc) => {
        const userDoc = doc.data();
        userDoc.id = doc.id;
        users.push(userDoc)
    })

    return users
}
