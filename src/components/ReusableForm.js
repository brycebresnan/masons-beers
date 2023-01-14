import PropTypes from "prop-types";
import { Form, Section } from "react-bulma-components";


function ReusableForm(props) {
  return (
    <>
      <Section>
        <form onSubmit={props.formSubmissionHandler}>
          <Form.Field>
            <input
              type='text'
              name='name'
              placeholder='Beer Name' />
          </Form.Field>
          <Form.Field>
            <input
              type='text'
              name='brewery'
              placeholder='Brewery' />
          </Form.Field>
          <Form.Field>
            <input
              type='text'
              name='style'
              placeholder='Style' />
          </Form.Field>
          <Form.Field>
            <input
              type='text'
              name='abv'
              placeholder='ABV' />
          </Form.Field>
          
          <button type='submit'>{props.buttonText}</button>
        </form>
      </Section>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;