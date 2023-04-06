export default function Lists({item ,add}){

    return(
        <div className="LIsts">
            <h1>{item.name}</h1>
            <p>{item.familiya}</p>
            <span>{item.yosh}</span>
            <button onClick={() =>  add(item.id , item.name ,item.familiya , item.yosh)}>Jadvalga Qoshish</button>
        </div>
    )
}