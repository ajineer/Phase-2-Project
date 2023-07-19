function AroundItem({item}){
    return(
        <div className="pantryItems">
            {item===undefined ? <>Loading...</> : <>
                <img width={100} height={100} src={item.image} alt="loading"/>
            </>}
        </div>
    )
}

export default AroundItem