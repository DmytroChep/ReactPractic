import { useEffect, useState } from "react";
import styles from "./homeWithTags.module.css"
import { Filter } from "../../components/Filter/FIlter";
import { Posts } from "../../components/Posts/Posts";
import { Header } from "../../app/Header/Home-Header";
import { Entry } from "../../shared/Entry";
import { IPost } from "../../components/Post/post-types";
import { Main } from "../../app/Main";
import { isLogin } from "../../shared/types";
import { Welcome } from "../../components/Welcome/Welcome";
import { usePosts } from "../../hooks/use-posts";
import { FourSquare } from "react-loading-indicators";
import { ITag } from "../../components/Filter/filter-types";
import { useTags } from "../../hooks/use-tags";


export function HomePage(){ 
    
    const {posts, isLoaded} = usePosts()
    const tags = useTags()
    const [filteredPosts, setfilteredPosts] = useState<IPost[]>(posts)
    const [choosedTags, setChoosedTags] = useState<ITag[]>(tags)
    const [value, setValue] = useState(0);
    function setValueFunc(value: number){
        setValue(value)
    }
    console.log(choosedTags)
    function setFilteredPostsFunc(posts: IPost[]){
        setfilteredPosts(posts)
    }
    function setTagsFunc(tags: ITag[]){
        setChoosedTags(tags)
    }

    useEffect(() => {
        console.log(choosedTags)
    }, [choosedTags])


    return (
        <div className={styles.parentElement}>
            <Header>
                {
                    isLogin ? (<Entry find="posts" setFilteredPosts={setFilteredPostsFunc}/>): false
                }
            </Header>
            {
                isLogin ? (
                    <div className={styles.main}>
                            <Filter setValue={setValueFunc} 
                            value={value} setFilteredPosts= {setFilteredPostsFunc} 
                            posts={filteredPosts}
                            setChoosedTags= {setTagsFunc}/>
                            {isLoaded ? (<Posts filteredPosts={filteredPosts}/>) : 
                            (<div className={styles.loadingShell}>
                            <FourSquare color="white" size="medium" text="" textColor="" />
                            </div>)}
                            
                    </div>
                ): <Welcome/>
            }
        </div>
    )
}
