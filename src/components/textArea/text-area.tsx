import { useContext, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import styles from './text-area.module.css'
import { LocalizationContext } from '../../context/localization-context';

export function TextArea(props: {setInputData: (value: string) => void, inputData: string}){
    // const [value, setValue] = useState('');
    const {setInputData, inputData} = props

    const translateContext = useContext(LocalizationContext);
    if (!translateContext){
        return null
    }
    
    const {translate} = translateContext
    
    return (
        <div className={styles.quillShell}>
            <ReactQuill theme="snow" value={inputData} onChange={setInputData} placeholder={`${translate("TextArea-placeholder")}`}/>
        </div>
    )
}   