import { useEffect } from "react"
import { useSelector } from "react-redux"
import reserves from "../features/reserves"
import Table from "../components/Table"

const Reservation = () => {
    const count = Array.from(Array(31).keys())
    const res = useSelector((state) => state.reserves.value)
    useEffect (() => {
        console.log(res)
    }, [])
    
    
    return(
        <div className="tableWrap">
        {count.map((x, i) => res.days.some(e => e.calendar === x) ?
        <Table day={x} key={i} reserved={true}></Table>:
        <Table day={x} key={i}></Table>
        )}
        </div>
        
    )
}

export default Reservation