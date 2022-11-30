const ArtikliItem = (props) => {
  const item = props.item;
  
  return (
    <div className="artikal-item">
      <div className="tiple">{item.naziv}</div>
      <div className="cena">{item.cena}</div>
    </div>
  )
}

export default ArtikliItem;