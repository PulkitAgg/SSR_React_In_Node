import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: 'yes i am data',
    };
  }

  componentDidMount() {
   console.log('in componentDidMount');
   setTimeout(() => {
     this.setState({
       data: 'data has been changed'
     })
   },2000)
  }

  test(){
    console.log('test call');
  }

  render() {;
    console.log('in render');
    return (
       <div>
         <label>App js file {this.state.data}</label>
         <label>Yuppp its workign fine</label>
         <button onClick={() => this.test()}>Test</button>
       </div>
    );
  }
}
 
export default App;
