import PropTypes from "prop-types";

function KegDetail(props){

  const keg = props; 

  return (
    <>
      <h1>Keg Detail</h1>
      <h3>{keg.brewery} - {keg.name}</h3>
      <h4>Style: {keg.style}</h4>
      <h4>ABV: {keg.abv}%</h4>
      {/* <p>Quantity: {keg.quantity}</p> */}
      <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
};

export default KegDetail;