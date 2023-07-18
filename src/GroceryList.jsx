import GItem from './GItem'

function GroceryList({aList, removeItem}){

    return(

        <>
            {aList.map(item => <GItem removeItem={removeItem} key={item.id} item={item}/>)}
        </>
    )
}

export default GroceryList