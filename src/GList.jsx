function GList({list, viewList, deleteList}){

    return(
        <li>
            <span>List: {list.id}</span>
            <button className="viewBtn" onClick={()=> viewList(list)}>View</button>
            <button onClick={()=> deleteList(list)}>Delete</button>
        </li>
    )
}

export default GList