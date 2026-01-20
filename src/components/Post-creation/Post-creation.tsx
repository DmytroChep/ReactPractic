import styles from "./post-creation.module.css"
import { ICONS, IMAGES } from "../../shared/images"
import { useLikePost } from "../../hooks/use-like-post"
import { useLikeOrUnlike } from "../../hooks/use-like-or-unlike"
import { useContext, useState } from "react"
import { IPost } from "../Post/post-types"
import { createPortal } from "react-dom"
import { ModalContext } from "../../context/modal-context"

export function PostCreation(){



    function addTag(tagText: string, createAt: HTMLElement){
        return createPortal(
            <p>{tagText}</p>,
            createAt
        )
    }

    const modalData = useContext(ModalContext);
    if (!modalData) return null; 
    const {setPostDataFunc, postData} = modalData;


    return( 
        <div className={styles.post}>
            <div className={styles.headerPost}>
                <div className={styles.firstHalfHeader}>
                    <img src={IMAGES.profile} className={styles.userAvatar} alt="" />
                    <p className={styles.createdByName}></p>
                </div>
                <div className={styles.secondHalfHeader}>
                    <img src={IMAGES.threeDots} className={styles.tripleDots} alt="" />
                </div>
            </div>
            <div className={styles.mainPost}>
                <input className={styles.title} onChange={(event) => {setPostDataFunc({title: event.target.value})}}></input>
                <input className={styles.description} onChange={(event) => {setPostDataFunc({description: event.target.value})}}></input>
                {/* <img src={IMAGES.cat} className={styles.postImage} alt={postData.image} />
                <div className={styles.footerPost}>
                    {
                        postData.tags?.map((element, index) => {
                            return <p key={index} className={styles.tag}>#{element.name}</p>
                        })
                    }
                </div> */}

                <div className={styles.tags}>
                    <input type="text" className={styles.tagCreation}/>
                    <button className={`${styles.open} ${styles.headerButton}`} >
                        <ICONS.success className={styles.crossImage}/>
                    </button>
                </div>
            </div>
        </div>
    )
}