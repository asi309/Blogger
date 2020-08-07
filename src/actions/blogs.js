// import database from '../firebase/firebase';

export const addBlog = (blog) => ({
    type: 'ADD_BLOG',
    blog
});

// export const startAddBlog = (
//     {
//         title = '',
//         content,
//         createdAt = 0
//     } = {}
// ) => {
//     return (dispatch, getState) => {
//         const expense = { title, content, createdAt };
//         return database.ref()
//     }
// }

export const removeBlog = (id) => ({
    type: 'REMOVE_BLOG',
    id
});

export const editBlog = (id, updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
});

export const setBlogs = (expenses) => ({
    type: 'SET_BLOGS',
    blogs
});