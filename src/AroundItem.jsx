function AroundItem({item}){
    return(
        <div className="pantryItems">
            {item===undefined ? <>Loading...</> : <>
                <img width={100} height={100} src={item.images[0].sizes[1]?.url} alt="loading"/>
            </>}
        </div>
    )
}

export default AroundItem