import GList from './GList'
import GListItem from './GListItem'
import useStore from './store'


function GroceryLists(){

    const { groceryList, setGroceryList, groceryListidx, setGroceryListidx } = useStore()

    function nextSlide(){
        setGroceryListidx(groceryListidx === groceryList.length? 0: groceryListidx+1)
    }
    function prevSlide(){
        setGroceryListidx(groceryListidx === 0 ? groceryList.length:groceryListidx-1)
    }

    function deleteList(list){
        fetch(`http://localhost:3000/Lists/${list.id}`,{
            method: "DELETE"
        })
        setGroceryList(groceryList.filter(l => l.id !== list.id))
    }

    return(
        
        <div className='flex flex-col bg-Gray border-[.5rem] border-black rounded-xl h-full'>
            {groceryList[groceryListidx] ?
            <div className='flex flex-col self-center bg-white mt-[2rem] mb-[1rem] rounded-xl w-[100%] h-[80%]'>
                <h2 className='text-xl ml-auto mr-auto mt-[1rem] mb-[1rem]'>List: {groceryList[groceryListidx].id}</h2>
                <section className={`grid grid-cols-3 grid-rows-${groceryList[groceryListidx].list.length % 3 + 1} gap-5 w-[100%] h-[80%] justify-items-center overflow-y-scroll`}>
                    {groceryList[groceryListidx].list.map(item => 
                        <div key={item.id} className='flex flex-col border-[.2rem] border-Tan p-[1rem]'>
                            <img width={100} height={100} src={item.image}></img>
                            <p className='text-xs max-w-[100px]'>{item.description}</p>
                        </div>)}

                </section>
            </div>
            :
            <div className='flex ml-auto mr-auto mt-auto mb-auto w-[100%] h-[80%]'>
                <span className='ml-auto mr-auto mb-auto mt-auto'>No Lists to Display</span>
            </div>
            }
            <div className="flex space-x-4 self-center mb-auto mt-auto">
                <button className='bg-white p-[.5rem] border-[.2rem] border-black rounded hover:bg-Tan' onClick={prevSlide}>{"\u276c"}</button>
                <button className='bg-Red pl-[.5rem] pr-[.5rem] border-[.2rem] rounded border-black hover:bg-red-800' onClick={() => deleteList(groceryList[groceryListidx])}>Delete</button>
                <button className='bg-white p-[.5rem] border-[.2rem] rounded border-black hover:bg-Tan' onClick={nextSlide}>{"\u276d"}</button>
            </div>
        </div>
    )
}

export default GroceryLists