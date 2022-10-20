function Card(props){
  console.log(props.value)


    return(
    <div className="carddiv">
     
    <img src={props.value.img.src}></img>
    <h1>{props.value.title} {props.value.ranking}</h1>
    <h3>{props.value.distributor}</h3>
    <h3>Amount : {props.value.amount}</h3>
    <h3>Releast in the year : {props.value.year}</h3>
    </div>
    )
}
export default Card