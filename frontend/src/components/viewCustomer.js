import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class viewCustomer extends Component {
  constructor(props){
    super(props);

    this.state={
         customer:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/customer/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          customer:res.data.customer
        });

        console.log(this.state.customer);
      }
    });
  }

  render(){

    const {name,email,address,nic,contactNumber} = this.state.customer;
    return(
      <div className = "container" >
      <NavBar/>
      <div style={{marginTop:'20px'}}>
        <h4>{name}</h4>
        <hr/>

        <dl className="row">
          <dt className="col-sm-3">Email</dt>
          <dd className="col-sm-9">{email}</dd>

          <dt className="col-sm-3">Address</dt>
          <dd className="col-sm-9">{address}</dd>

          <dt className="col-sm-3">NIC</dt>
          <dd className="col-sm-9">{nic}</dd>

          <dt className="col-sm-3">Contact Number</dt>
          <dd className="col-sm-9">{contactNumber}</dd>
          <br/>
          <br/>

          
        </dl>

        <h4> If you want to update your details, you need to request to the hotel</h4>
        <button className="btn btn-success"><a href="/createRequest" style={{textDecoration:'none',color:'white'}}>Create Request</a></button>

      </div>
      </div>
    )
  }
}