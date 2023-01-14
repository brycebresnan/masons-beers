import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";

class StoreController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null
    };
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
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

  handle

  render(){
    let currentlyVisisbleState = null;
    let buttonText = null;

    if (this.state.selectedKeg == !null) {
      currentlyVisisbleState = <KegDetail keg={this.state.selectedKeg}/>
      buttonText = "Return to Keg LIst";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisisbleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisisbleState = <KegList kegList={this.state.mainKegList}/>
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