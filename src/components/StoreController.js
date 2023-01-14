import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";

class StoreController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList});
    this.setState({formVisibleOnPage: false});
  }

  render(){
    let currentlyVisisbleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisisbleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisisbleState = <KegList />
      buttonText = "Add New Keg";
    }

    return(
      <>
      {currentlyVisisbleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default StoreController;