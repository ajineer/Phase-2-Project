import GList from './GList'
import GListItem from './GListItem'
import { useState, useEffect } from "react"


function GroceryLists({groceryList, setGroceryList, setCurrentList, currentList}){

    
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
        currentList === undefined ? <span>No Lists to Display</span>:
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