import styles from "./homeWithTags.module.css"
import { Post } from "../Post/Post"
import { IPost } from "../Post/post-types"
import { Modal } from "../../shared/Modal"
import { useState } from "react"
import { ICONS } from "../../shared/images"
import { PostCreation } from "../Post-creation"


export function Posts(props: {filteredPosts: IPost[]}){
    const {filteredPosts} = props
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const closeModal = () => setIsModalOpen(false)
    function handleInputFocus(event: React.MouseEvent) {
		setIsModalOpen(!isModalOpen);
        event.stopPropagation();
	}
    return( 
        <div className={styles.allPosts}>
            <div className={styles.addPost} onClick={handleInputFocus }>
                <span>+</span>
            </div>


            <Modal 
            className=""
			isOpen={isModalOpen} 
			onClose={closeModal} 
			doCloseOnOutsideClick={false}>
                <div className={styles.modal} >
                    <div className={styles.headerModal}>
                        <button className={`${styles.open} ${styles.headerButton}`} >
                            <ICONS.success className={styles.crossImage}/>
                        </button>
                        <button className={`${styles.close} ${styles.headerButton}`} onClick={handleInputFocus}>
                            <ICONS.cross className={styles.crossImage}/>
                        </button>
                    </div>

                    <PostCreation />
                </div>
                
			</Modal>

            {filteredPosts.map((element: IPost, idx: number) => {
                return <Post key={idx} postData={element}/>
            })} 
        </div>
    )
}