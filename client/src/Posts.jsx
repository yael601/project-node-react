
import { useEffect, useState } from "react"

import Axios from "axios"
const Posts = () => {
    const [apiName, setApiName] = useState("posts")
    const [q, setQ] = useState("")
    const [arr, setArr] = useState([])
    const fetchData = async () => {
        const { data } = await
            Axios.get(`https://jsonplaceholder.typicode.com/posts`)
        setArr(data)
    }
    useEffect(() => {
        fetchData()
    }, [apiName])
    const arrS = arr.filter(element => String(element.id).includes(q) || String(element.title).includes(q) || String(element.body).includes(q) || String(element.completed).includes(q))
    return <>
        <input placeholder="Add word to search"
            onChange={(e) => setQ(e.target.value)} />
        <h1>{apiName}</h1>
        {<ul>
            {arrS.map(element =>
                <li>"id":{element.id} <br /> "title":{element.title} <br />"body":{element.body}<br /> </li>)}
        </ul>}
        
    </>
}
export default Posts