import GList from './GList'
import GListItem from './GListItem'
import { useState, useEffect } from "react"


function GroceryLists({groceryList, setGroceryList}){

    const [currentList, setCurrentList] = useState(groceryList[0])
    
    function viewList(thisList){
        setCurrentList(thisList)
    }

    function deleteList(list){
        fetch(`http://localhost:3000/Lists/${list.id}`,{
            method: "DELETE"
        })
        setGroceryList(groceryList.filter(l => l.id !== list.id))
        setCurrentList(null)
    }

    return(
        currentList === null ? <span>No Lists to Display</span>:
            <div className='groceryListUI'>
                <ul className='gLists'>
                    {groceryList.map(l => <GList key={l.id} list={l} viewList={viewList} deleteList={deleteList}/>)}
                </ul>
                <ul className='gListItems'>
                    {currentList.list.map(item => <GListItem key={item.id} item={item}/>)}
                </ul>
            </div>
        
    )
}

export default GroceryLists