import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList33 } from "../Store/Post-list-store";
import ErrorMessage from "./ErrorMessage";
import LoaderSpinner from "./LoaderSpinner";
const PostList=()=>{
    let {postList,addInitialPost}=useContext(PostList33);
    let [fetching,setFetching]=useState(false);
    useEffect(()=>{
        if(postList.length > 0) {
        return;
        }
        setFetching(true);

        const controller=new AbortController();
        const signal=controller.signal;
        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then(data=> {
            console.log(data.posts)
            addInitialPost(data.posts);
            setFetching(false);

        });
        return ()=>{
            console.log("use Effect is cleaning up..");
            controller.abort();
        }
    },[]);
    // if(!dataFetched){
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(data=> {
    //         console.log(data.posts)
    //         addInitialPost(data.posts);

    //     });
    //     setdataFetched(true);
    // }
    // console.log(postList);
    // const onclickFetch=()=>{
    //     console.log("button is clicked;");
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(data=> {
    //         console.log(data.posts)
    //         addInitialPost(data.posts);
    //     });
        
    // }

    // let {postList}=useContext(PostList33)
    // console.log(postList);
    return <>
        {fetching && <LoaderSpinner></LoaderSpinner>}
        {!fetching && postList.length==0 && <ErrorMessage /*handleronClick={onclickFetch}*/></ErrorMessage>}
        {!fetching && postList.map((val)=>(
            
            <Post key={val["id"]}post={val}></Post>
            
        ))}

    </>
}
export default PostList;