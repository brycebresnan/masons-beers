import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){

  return (
    <>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg 
          whenTicketClicked={props.onKegSelection}
          name={keg.name}
          brewery={keg.brewery}
          style={keg.style}
          abv={keg.abv}
          id={keg.id}
          key={keg.id}/>
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;