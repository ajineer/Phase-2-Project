function PItem({item}){
    return(
        <div>
            <img src={item === undefined ? "" :item.images[0].sizes[1]?.url} alt="loading"/>
        </div>
    )
}

export default PItem