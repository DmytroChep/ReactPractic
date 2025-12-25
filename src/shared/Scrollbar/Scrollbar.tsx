import { useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import styles from "./scrollbar.module.css";
import { usePosts } from '../../hooks/use-posts';
import { IPost } from '../../components/Post/post-types';

export function ScrollBar(props: {
    setValue: (value: number) => void, 
    value: number, 
    setFilteredPosts: (posts: IPost[]) => void, 
    filteredPosts: IPost[]
}) {
    const { setValue, value, setFilteredPosts } = props;
    const { posts } = usePosts();
    
    const allPosts: IPost[] = posts || [];

    const likes = allPosts.map((item) => item.likesCount);
    const maxLikes = allPosts.length > 0 ? Math.max(...likes) : 100;

    useEffect(() => {
        if (allPosts.length > 0) {
            const result = allPosts.filter((post) => post.likesCount >= value);
            setFilteredPosts(result);
        }
    }, [value, allPosts]);    

    const handleUpdate = (values: any) => {
        if (values && typeof values.left === 'number') {
            const scrollPercent = Math.round(values.left * maxLikes);
            if (scrollPercent !== value) {
                setValue(scrollPercent);
            }
        }
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.likesCard}>
                <p className={styles.likesText}>likes: {value}</p>

                <div className={styles.scrollbarCenterer}>
                    <Scrollbars
                        onUpdate={handleUpdate}
                        style={{ width: 180, height: 20 }}
                        renderTrackHorizontal={({ style, ...props }) => (
                            <div {...props} className={styles.trackHorizontal} />
                        )}
                        renderThumbHorizontal={({ style, ...props }) => (
                            <div {...props} className={styles.thumbHorizontal} />
                        )}
                    >
                        <div style={{ width: '1000px', height: '100%' }} />
                    </Scrollbars>
                </div>
            </div>
        </div>
    );
}