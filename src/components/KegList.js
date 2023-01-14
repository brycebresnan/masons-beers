import Keg from "./Keg";
import { Box, Content } from "react-bulma-components";
import PropTypes from "prop-types";

function KegList(props){

  return (
    <>
      <hr/>
      
      {props.kegList.map((keg) =>
        <Box>
          <Content>
            <Keg 
              whenKegClicked={props.onKegSelection}
              name={keg.name}
              brewery={keg.brewery}
              style={keg.style}
              abv={keg.abv}
              quantity={keg.quantity}
              whenBuyingPint={props.onBuyingPint}
              id={keg.id}
              key={keg.id}/>
          </Content>
        </Box>
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onBuyingPint: PropTypes.func
};

export default KegList;