import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brewery: event.target.brewery.value, 
      style: event.target.style.value,
      abv: event.target.abv.value,
      quantity: 120,
      id: v4()
    });
  }

  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Create Keg" />
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;