import styles from "./homeWithTags.module.css"
import { Post } from "../Post/Post"
import { IPost } from "../Post/post-types"
import { Modal } from "../../shared/Modal"
import { useState } from "react"


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
			className={styles.modal} 
			isOpen={isModalOpen} 
			onClose={closeModal} 
			doCloseOnOutsideClick={true}>
                <div className={styles.headerModal}>

                </div>
			</Modal>

            {filteredPosts.map((element: IPost, idx: number) => {
                return <Post key={idx} postData={element}/>
            })} 
        </div>
    )
}