function PItem({item}){

    return(
        <div>
            <img src={item.images[0].sizes[1].url}/>
        </div>
    )
}

export default PItem