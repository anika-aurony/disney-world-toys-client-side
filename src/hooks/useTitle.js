import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Disney World Toys | ${title} `;
    },[title])
};

export default useTitle;