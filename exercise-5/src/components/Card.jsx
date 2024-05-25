export default function Card({card}){
    const {id,image,name,hobby,address} = card;
    return(
        <div class="card">
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <>Class {address}</>
          <p>
          {hobby}
          </p>
        </div>
    )
}