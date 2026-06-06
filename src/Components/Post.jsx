import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList33 } from "../Store/Post-list-store";

const Post = ({post}) => {
    const {deletePost}=useContext(PostList33);
    return (
        <div className="card post-card" style={{ width: "30rem" }}>
            <div className="card-body">
                <h5 className="card-title">{post.title}
                     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                     onClick={()=>{
                        
                        deletePost(post.id)
                        
                     }}
                     >
                       <MdDelete />
                         <span className="visually-hidden">unread messages</span>
                     </span>
                </h5>
                <p className="card-text">
                    {post.body}
                </p>
                {post["tags"].map((val)=>(
                    <span key={val} className="badge text-bg-primary tag-effect">{val}</span>
                ))}

                <div className="alert alert-success reaction" role="alert">
                Post is viewed by {post.reaction} people
                </div>
                
            </div>
        </div>
    );
};
export default Post;
