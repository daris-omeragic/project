import React, { useState, createContext } from "react";

export const PostContext = createContext({
    post: {},
    setPost: () => { },
});

const PostContextProvider = ({ children }) => {
    const [post, setPost] = useState({});

    const values = {
        post,
        setPost,
    };

    return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export default PostContextProvider;