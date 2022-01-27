import React,{ Component } from 'react';
import axios from 'axios';


export default class createCustomer extends Component{

  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      address:"",
      nic:"",
      contactNumber:""

    }

  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;
    
    this.setState({
      ...this.state,
      [name]:value
    })
  }


  onSubmit = (e) =>{
    e.preventDefault();
    const {name,email,address,nic,contactNumber} = this.state;

    const data ={
      name:name,
      email:email,
      address:address,
      nic:nic,
      contactNumber:contactNumber
    }
    console.log(data)
    if(name && email && address && nic && contactNumber){
     
    axios.post("http://localhost:8000/customer/register",data).then((res) =>{
      if(res.data.success){
        alert("Customer Profile Created Successfully")
        this.setState(
          {
            name:"",
            email:"",
            address:"",
            nic:"",
            contactNumber:""
          }
        )
      }
    })
  }
   else{
    alert("invalid input")
   }



  }
  
  
  render(){
    return(
      <html>
      <body>
        <section style={{backgroundImage:`url('https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80')`,
        backgroundSize:'cover', height: '1000px'}}>    
      <div className="col-md-8 mt-4 mx-auto" style={{
        backgroundPosition:'center',
        backgroundSize:'cover'
      }}> 
       <br></br>
        <h1 style={{marginTop:'25px'}} ><center>Register Form</center></h1>
        <br></br>
          <form className="row" onSubmit={this.onSubmit} style={{ margin:"25px 85px 75px 100px"}} >
            
            <div className="form-group col-XS-3" style={{marginBottom:'15px'}}>
               <label style={{marginBottom:'5px',}}>Full Name</label>
               <input type="text"
               className="form-control"
               name="name"
               placeholder="Enter Your Full Name"
               pattern="[a-z A-Z .]+"
               value={this.state.name}
               onChange={this.handleInputChange}
               required/>
              
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input type="email"
              className="form-control"
              name="email"
              placeholder="Enter Your Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Address</label>
              <input type="text"
              className="form-control"
              name="address"
              placeholder="Enter Your Address"
              value={this.state.address}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>NIC</label>
              <input type="text"
              className="form-control"
              name="nic"
              placeholder="Enter your NIC Number"
              value={this.state.nic}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact Number</label>
              <input type="text"
              className="form-control"
              name="contactNumber"
              placeholder="Enter Your Mobile Number"
              pattern="[0-9]{10}"
              value={this.state.contactNumber}
              onChange={this.handleInputChange}
              required/>
            </div>
            
             <table>
                 <tr>
                     <td>
            <button className="btn btn-success" type="submit" style={{margin:"25px 85px 75px 15px"}} >
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
            </td>
            <td>
            <button className="btn btn-success" style={{margin:"0px 0px 45px 15px"}}><a href="/" style={{textDecoration:'none',color:'white'}}>Log in</a></button>
            </td>
            </tr>
            </table>
            </form>

            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        </section>
        
        </body>
        </html>
      
      
      
      
    )
    }
}
