
const Card =(props)=>{
    return(
        <div className="card">
            <img src={props.imgS} alt=""/>
            <h2 className="content" id="title"><b >{props.title}</b></h2>
            <h2 className="content"><b>Director:</b> {props.director}</h2>
            <h2 className="content"><b>Initial release:</b> {props.relDate}</h2>
            <h2 className="content"><b>Rating:</b> {props.rating}</h2>
            <button><a href={props.link} target="_blank"><b>Watch Now</b></a></button>
        </div>
    );
}
export default Card;