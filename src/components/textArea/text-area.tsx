import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import styles from './text-area.module.css'

export function TextArea(){
    const [value, setValue] = useState('');
    
    return (
        <div className={styles.quillShell}>
            <ReactQuill theme="snow" value={value} onChange={setValue} placeholder='enter your comment here...'/>
        </div>
    )
}   