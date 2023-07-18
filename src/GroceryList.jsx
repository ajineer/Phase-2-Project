import GItem from './GItem'

function GroceryList({aList, removeItem}){

    return(

        <div className="groceryItems">
            {aList.map(item => <GItem removeItem={removeItem} key={item.productId} item={item}/>)}
        </div>
    )
}

export default GroceryList