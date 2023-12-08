


export function Modal({active, setActive}){

    return <div className={active[0]?"Modal active":"Modal"} onClick={()=>setActive([false])}>
        <div className="Modal_Content" onClick={(e)=>e.stopPropagation()}>
            {
                active[1]
            }
        </div>
    </div>

}