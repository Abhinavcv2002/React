import React from 'react'

// ---------props-----------//
// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {name:props.name,age:props.age}
//   }
//   render(){
//     return(
//       <>
//       <h1>hello {this.state.name}</h1>
//       <h1>age {this.state.age}</h1>
//       </>
//     )
//   }
// }


// ------------nexted class Component--------------//

// class Demo extends React.Component {
//   render(){
//     return(
//     <>
//     <h1>Demo Component {this.props.name} </h1>
//     </>
//     )
//   }
// }

// class App extends React.Component {
//   render(){
//     return(
//     <>
//     <h1>hello</h1>
//     <h2>age {this.props.age} </h2>
//     <Demo name={this.props.age} />
//     </>
//     )
//   }
// }

// -----------age changing----------- //

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {age:21}
//   }
//   changeAge = () => {
//     this.setState({age:25})
//   }
//   render(){
//     return(
//     <>
//     <h1>hello</h1>
//     <h2>age {this.props.age} </h2>
//     <button onClick={
//       this.changeAge
//     }>change Age</button>
//     </>
//     )
//   }
// }

// --------------------mounting (getderivedStatefromprops)------------------//

// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {age:20}
//   }
//   changeAge = () => {
//     this.setState({age:25})
//   }

//   static getDerivedStateFromProps(props,state){
//     return {age:props.age}
//   }

//   render(){
//     return(
//     <>
//     <h1>hello</h1>
//     <h2>age {this.props.age} </h2>
//     <button onClick={this.changeAge}>change Age</button>
//     </>
//     )
//   }
// }

// -------------------componentDidMount()---------------------//

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { age: 20 };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ age: 30 });
//     }, 1000);
//   }

//   changeAge = () => {
//     this.setState({ age: 40 }); // Just an example
//   }

//   render() {
//     return (
//       <>
//         <h1>Hello</h1>
//         <h2>Age: {this.state.age}</h2>
//         <button onClick={this.changeAge}>Change Age</button>
//       </>
//     );
//   }
// }

// -------------------componentDidMount()---------------------//

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { age: 20 };
//   }

//   shouldComponentUpdate(){
//     return true;
//   }

//   changeAge = () => {
//     this.setState({ age: 30 });
//   }

//   render(){
//     return (
//       <>
//         <h1>Hello</h1>
//         <h2>Age: {this.state.age}</h2>
//         <button onClick={this.changeAge}>Change Age</button>
//       </>
//     );
//   }
// }

// -------------------getSnapshotBeforeUpdate()---------------------//

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { age: 20 };
//   }

//   changeAge = () => {
//     this.setState({ age: 30 });
//   }

//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({age:30})
//     },1000);
//   }

//   getSnapshotBeforeUpdate(prevprops,prevstate){
//     console.log(prevprops,prevstate);
//   }

//   componentDidUpdate(){
//     console.log("component updated");
    
//   }
//   render(){
//     return (
//       <>
//         <h1>Hello</h1>
//         <h2>Age: {this.state.age}</h2>
//         <button onClick={this.changeAge}>Change Age</button>
//       </>
//     );
//   }
// }

// ------------------------componentWillUnmount()---------------------//

class App extends React.Component {
  constructor(){
    super();
    this.state = {show:true};
  }

  deleteHead = () => {
    this.setState({ show:false });
  }

  render(){
    let myhead;
    if(this.state.show){
      myhead = <Sub/>
    }
    return (
      <div>
        {myhead}
        <h1>Hello</h1>
        <button onClick={this.deleteHead}>Delete </button>
      </div>
    );
  }
}

class Sub extends React.Component{
  componentWillUnmount(){
    alert("componentWillUnmount")
  }
  render() {
    return (
      <div>
        <h1>Sub</h1>
      </div>
    );
  } 
}

export default App;
