import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';


export default class generateReport extends Component{
  constructor(props){
    super(props);

    this.state={
      customers:[]
    };
  }

  componentDidMount(){
    this.retrieveCustomers();
  }

  retrieveCustomers(){
    axios.get("http://localhost:8000/customers").then(res =>{
      if(res.data.success){
        this.setState({
          customers:res.data.existingCustomers
        });
        console.log(this.state.customers)
      }
    });
  }


    render(){
      return(
        
        <div className="container">
          <NavBar/>
            <h2>All Customer Details</h2>
            <table className="table table-hover" style={{marginTop:'40px'}}>
            <thead>
              <tr>
                   <th scope="col">#</th>
                   <th scope="col">Name</th>
                   <th scope="col">Email</th>
                   <th scope="col">Address</th>
                   <th scope="col">Nic</th>
                   <th scope="col">Contact Number</th>
                   
              </tr>
            </thead>

            <tbody>
                 {this.state.customers.map((customers,index)=>(
                   <tr key={index}>
                     <th scope="row">{index+1}</th>
                     <td>{customers.name}</td>
                     <td>{customers.email}</td>
                     <td>{customers.address}</td>
                     <td>{customers.nic}</td>
                     <td>{customers.contactNumber}</td>
                                        </tr>
                 ))}
               </tbody>


            </table>
  
        </div>
        
        
       
        
      )
      }
  }