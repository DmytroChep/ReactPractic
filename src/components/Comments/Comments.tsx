import { useState, useEffect } from "react";
import styles from "./comments.module.css";
import { IMAGES } from "../../shared/images";
import { useCreateComment } from "../../hooks/use-create-comment";
import { IComment } from "./comments.types";
import { TextArea } from "../textArea";
import { Comment } from "../Comment/Comment";

export function Comments({ comments: initialComments, postId }: { comments: IComment[] | undefined, postId: number }) {
    const [inputData, setInputData] = useState("");
    const [localComments, setLocalComments] = useState<IComment[]>(initialComments || []);
    
    const { createComment } = useCreateComment(postId, inputData);
    
    const handleSend = async () => {
        if (!inputData.trim()){
            return;
        } 

        const newComment = await createComment();

        if (newComment) {
            // Просто создаем новый массив на основе текущего localComments
            setLocalComments([newComment, ...localComments]); 
            setInputData("");
        }
    };

    return (
        <div className={styles.comments}>
            <div className={styles.entryShell}>
                <TextArea inputData={inputData} setInputData={setInputData} />
                <div className={styles.sendComment} onClick={handleSend}>
                    <img src={IMAGES.send} className={styles.sendImage} alt="send" />
                </div>
            </div>
            <div className={styles.onlyComment}>
                {localComments.map((element, idx) => (
                <Comment key={element.id || idx} commentData={element} />
                ))}
            </div>
            
        </div>
    );
}