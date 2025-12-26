import { Navigate, useNavigate, useParams } from "react-router-dom";
import { usePostById } from "../../hooks/use-post-by-id";
import { Header } from "../../app/Header/Home-Header";
import { Main } from "../../app/Main";
import { isLogin } from "../../shared/types";
import { Post } from "../../components/Post";
import styles from  "./post.module.css"
import { Comments } from "../../components/Comments";


export function PostPage(){ 

    const postId = useParams().id

    const result = usePostById(Number(postId)).post

    console.log(result)
    if  (!result){
        return <p>post not found</p>
    }
    return (
        <div className={styles.parentElement}>
            <Header />
            {isLogin ? (
            <Main>
                <div className={styles.main}>
                    <div className={styles.postAndComments}>
                        <Post postData={result} />
                        <Comments comments={result.comments}/>
                    </div>
                </div>
            </Main>
            ) : (
            <Navigate to="/" replace />
            )}
        </div>
    );
}
