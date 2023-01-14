import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

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
    
    const newSelectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    console.log(newSelectedKeg)
    this.setState({selectedKeg: newSelectedKeg});
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
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

    if (this.state.selectedKeg != null) {
      currentlyVisisbleState = <KegDetail keg={this.state.selectedKeg}/>
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisisbleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisisbleState = <KegList onKegSelection={this.handleChangingSelectedKeg} kegList={this.state.mainKegList}/>
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