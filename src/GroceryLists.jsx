import GList from './GList'
import GListItem from './GListItem'
import useStore from './store'


function GroceryLists(){

    const { groceryList, setGroceryList, groceryListidx, setGroceryListidx } = useStore()

    function nextSlide(){
        setGroceryListidx(groceryListidx === groceryList.length-1? 0: groceryListidx+1)
    }
    function prevSlide(){
        setGroceryListidx(groceryListidx === 0 ? groceryList.length-1:groceryListidx-1)
    }

    function deleteList(list){
        fetch(`http://localhost:3000/Lists/${list.id}`,{
            method: "DELETE"
        })
        setGroceryList(groceryList.filter(l => l.id !== list.id))
    }

    return(
        
        <div className='flex flex-col bg-Gray h-[90%] ml-auto mr-auto mt-[1rem]'>
            {groceryList[groceryListidx]?
            <section key={groceryList[groceryListidx].id} className={`grid grid-cols-3 grid-rows-${groceryList[groceryListidx].length % 3 + 1} gap-5 w-[100%] h-[70%] justify-items-center overflow-y-scroll`}>
                <div className='flex flex-col bg-Tan text-xl w-[200px] h-[250px] items-center justify-top border-[.5rem] border-Beig'>
                    <h2 className='text-white mt-[1rem]'>
                        List: {groceryList[groceryListidx].id}
                    </h2>    
                    <button className='text-lg bg-Red pl-[.5rem] pr-[.5rem] mt-auto mb-auto border-[.2rem] rounded border-black hover:bg-red-800' onClick={() => deleteList(groceryList[groceryListidx])}>Delete</button>
                </div>
                {groceryList[groceryListidx].list.map(item =>
                <div key={item.id} className='flex flex-col bg-Tan border-[.5rem] border-Beig p-[1rem] w-[200px] h-[250px]'>
                    <img width={100} height={100} src={item.image}></img>
                    <p className='text-white text-xs max-w-[100px]'>{item.description}</p>
                </div>)}
            </section>:
            <section className='grid grid-cols-3 gap-5 w-[100%] h-[70%] justify-items-center'>
                <div className='flex flex-col bg-Tan text-xl w-[200px] h-[250px] items-center justify-top border-[.5rem] border-Beig'>
                    <h2 className='mt-[1rem]'>No lists</h2>
                </div>
            </section>
            }
            <div className="flex space-x-4 self-center mb-auto mt-auto">
                <button className='bg-white p-[.5rem] border-[.2rem] border-black rounded hover:bg-Tan' onClick={prevSlide}>{"\u276c"}</button>
                <button className='bg-white p-[.5rem] border-[.2rem] rounded border-black hover:bg-Tan' onClick={nextSlide}>{"\u276d"}</button>
            </div>
        </div>
    )
}

export default GroceryLists