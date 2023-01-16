import react from "react";
import Article from "./Article";

const ArticleList = (props)=>{
    const{posts}= props;
    return(
        <main>
            {posts.map((post, index)=>(
                <Article key={post.id} post />
            ))}
        </main>
    )
}
export default ArticleList;