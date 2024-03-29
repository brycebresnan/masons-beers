import PropTypes from "prop-types";

function Keg(props){

  // const buttonFunc = () => 

  return (
    <>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h2>{props.brewery} - {props.name}</h2>
        <h4>Style: {props.style}</h4>
        <h4>ABV: {props.abv}%</h4>
        <h4>Quatntiy: </h4>
          {props.quantity == 0 
          ? <h4>Out Of Stock</h4>
          : <h4>{props.quantity}</h4>
        }
      </div>
      <button onClick={() => props.whenBuyingPint(props.id)}> Buy Pint </button>
      <hr/>
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
  whenKegClicked: PropTypes.func,
  whenBuyingPint: PropTypes.func
}

export default Keg;