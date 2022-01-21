import React, {useEffect, useState} from 'react';
// import '../Loader/LoadingHOC.css';
// import Oval from '../Loader/oval.svg'


const WithLoadingComponent = (WrappedComponent) => props => {

  return <WrappedComponent {...props}/>  

}

const Hoc = (WithLoadingComponent);

export default Hoc;


//Исходный компонент с работающим Loader

// const HOC = (WrappedComponent) => {
//   return class WithLoadingComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         show: false,
//       };
//     }

//     componentDidMount() {
//       this.timeout = setTimeout(() => this.setState({ show: true}), 1000)
//     }

//     commponentDidUpdate() {
//       clearTimeout(this.interval)
//     }

//     render() {
//       return this.state.show 
//       ? <WrappedComponent {...this.props}/> 
//       : <div className="loading">Loading...
//           <img src={Oval} alt='Loader'/>
//         </div>
//     }
//   }
// }

// const WithLoadingComponent = (WrappedComponent) => props =>{

//     let [show, setShow] = useState(false);
  
//     useEffect(() => {
//       setInterval(() => setShow(show = true), 1000)
//     })

//     return(
//       show ? <WrappedComponent {...props}/> 
//       : <div className="loading">Loading...
//         <img src={Oval} alt='Loader'/>
//         </div>
//     ) 
  
//   }

//   const HOC = (WithLoadingComponent);

// export default HOC;