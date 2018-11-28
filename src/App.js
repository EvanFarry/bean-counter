import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      water: 200,
      ratio: 16,
      beans: 0,
    }
    this.handleWaterChange = this.handleWaterChange.bind(this)
    this.handleRatioChange = this.handleRatioChange.bind(this)
  }

//Functions
//=======================================================================
  componentDidMount(){
    this.setState({beans: (this.state.water/this.state.ratio).toPrecision(3)})
  }

  handleWaterChange(e){
    this.setState({water: e.target.value})
    this.setState({beans: (e.target.value/this.state.ratio).toPrecision(3)})
  }

  handleRatioChange(e){
    this.setState({ratio: e.target.value})
    this.setState({beans: (this.state.water/e.target.value).toPrecision(3)})
  }
//=======================================================================

  render() {
    return (
      <div className="App">

        <h1 className="main-header">Bean Counter</h1>
        <p className="sub-header">Make consistent coffee</p>

        <Water water={this.state.water} handleWaterChange={this.handleWaterChange} />

        <Ratio ratio={this.state.ratio} handleRatioChange={this.handleRatioChange} />

        <Beans beans={this.state.beans}/>
      </div>
    );
  }
}

class Water extends Component{

  render() {
    return (
      <div className='water'>
      <p>Using <strong>{this.props.water} mL</strong> of water</p>
      <div className="inputGrid">
        <div className="slide-label">100mL</div>
        <input
          type='range'
          min='100'
          max='500'
          step='25'
          value={this.props.water}
          onChange={this.props.handleWaterChange}
        />
        <div className="slide-label">500mL</div>
      </div>
      </div>
    );}
}


class Ratio extends Component{
  render(){
    return(
      <div className='ratio'>
        <p>and targeting a <strong>1:{this.props.ratio}</strong> coffee:water ratio</p>
        <div className="inputGrid">
          <div className="slide-label">strong brew</div>
          <input
            type='range'
            min='10'
            max='20'
            step='1'
            value={this.props.ratio}
            onChange={this.props.handleRatioChange}
          />
          <div className="slide-label">light brew</div>
        </div>
      </div>
    )
  }
}

class Beans extends Component{

  render(){
    return(
      <div className='beans'>
        <p>you should use <strong>{this.props.beans}</strong> grams of coffee.</p>
      </div>
    )
  }
}

export default App;
