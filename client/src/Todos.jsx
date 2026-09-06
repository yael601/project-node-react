
import { useEffect, useState } from "react"

import Axios from "axios"
const Todos = () => {
    const [apiName, setApiName] = useState("todos")
    const [q, setQ] = useState("")
    const [arr, setArr] = useState([])
    const fetchData = async () => {
        const { data } = await
            Axios.get(`https://jsonplaceholder.typicode.com/todos`)
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
        {
            <ul>
                {arrS.map(element =>
                    <li>"id":{element.id} <br /> "title":{element.title} <br /> "completed":{String(element.completed)}<br /> </li>)}
            </ul>}
    </>
}
export default Todos