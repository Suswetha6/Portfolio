import './Tile.css'
function Tile({bgColor,img,header,paragraph}){
  return(
  <div className={`tile ${bgColor}`}>
    <div className="imgParent">
      <img src={img} alt="gradCap"/>
    </div>
    <div className="description">
      <h2>{header}</h2>
      <p>{paragraph}</p>
    </div>
  </div>
  )
}
export default Tile