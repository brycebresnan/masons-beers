import PropTypes from "prop-types";

function Keg(props){

  return (
    <>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brewery} - {props.name}</h3>
        <h4>Style: {props.style}</h4>
        <h4>ABV: {props.abv}%</h4>
        <p>Quantity: {props.quantity}</p>
        <button onClick={onBuying}></button>
        <hr/>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  style: PropTypes.string,
  abv: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;