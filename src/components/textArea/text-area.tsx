import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import styles from './text-area.module.css'

export function TextArea(props: {setInputData: (value: string) => void, inputData: string}){
    // const [value, setValue] = useState('');
    const {setInputData, inputData} = props
    
    return (
        <div className={styles.quillShell}>
            <ReactQuill theme="snow" value={inputData} onChange={setInputData} placeholder='enter your comment here...'/>
        </div>
    )
}   