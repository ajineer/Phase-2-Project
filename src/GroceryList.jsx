import GItem from './GItem'

function GroceryList({aList, removeItem}){

    return(

        <div className="groceryItems">
            {aList.map(item => <GItem removeItem={removeItem} key={item.id} item={item}/>)}
        </div>
    )
}

export default GroceryList