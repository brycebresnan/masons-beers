import PropTypes from "prop-types";
import { Content } from "react-bulma-components";

function KegDetail(props){

  const keg = props; 

  return (
    <>
      <Content>
        <h1>Keg Detail</h1>
        <h2>{keg.brewery} - {keg.name}</h2>
        <h4>Style: {keg.style}</h4>
        <h4>ABV: {keg.abv}%</h4>
        <h4>Quantity: {keg.quantity}</h4>
      </Content>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
};

export default KegDetail;