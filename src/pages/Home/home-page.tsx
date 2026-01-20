import { useContext, useEffect, useState } from "react";
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
import { PostContext } from "../../context/post-context";


export function HomePage() { 
    const postData = useContext(PostContext);
    const tags = useTags();
    
    const [choosedTags, setChoosedTags] = useState<ITag[]>([]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (tags && tags.length > 0) {
            setChoosedTags(tags);
        }
    }, [tags]);

    if (!postData) return null; 

    const { filteredPosts, isLoaded, setFilteredPostsFunc } = postData;

    return (
        <div className={styles.parentElement}>
            <Header>
                {isLogin ? (
                    <Entry find="posts"/>
                ) : null}
            </Header>
            
            {isLogin ? (
                <div className={styles.main}>
                    <Filter 
                        setValue={setValue} 
                        value={value} 
                        setChoosedTags={setChoosedTags}
                    />
                    
                    {isLoaded ? (
                        <Posts filteredPosts={filteredPosts}/>
                    ) : (
                        <div className={styles.loadingShell}>
                            <FourSquare color="white" size="medium" />
                        </div>
                    )}
                </div>
            ) : <Welcome />}
        </div>
    );
}