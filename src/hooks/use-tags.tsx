import { useEffect, useState } from "react";
import { ITag } from "../components/Filter/filter-types";


export function useTags() {
    const [tags, setTags] = useState<ITag[]>([]);

    useEffect(() => {
        async function getAllTags() {
            try {
                const response = await fetch(`http://127.0.0.1:8000/tags`);
                const data = await response.json();
                setTags(data); 
            } catch (error) {
                console.error("Failed to fetch Tags:", error);
            }
        }
        getAllTags();
    }, []);

    return tags;
}