import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class editCustomer extends Component{

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
    const id = this.props.match.params.id;
    const {name,email,address,nic,contactNumber} = this.state;

    const data ={
      name:name,
      email:email,
      address:address,
      nic:nic,
      contactNumber:contactNumber
    }
    console.log(data)
    axios.put(`http://localhost:8000/customer/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Customer Profile Updated Successfully")
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


  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/customer/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          name:res.data.customer.name,
          email:res.data.customer.email,
          address:res.data.customer.address,
          nic:res.data.customer.nic,
          contactNumber:res.data.customer.contactNumber
        });

        console.log(this.state.customer);
      }
    });
  }


  render(){
    return(
      <html>
      <body>
      <div className = "container" >
            <NavBar/> </div>
        <section style={{backgroundImage:`url('https://media.istockphoto.com/photos/light-green-defocused-blurred-motion-abstract-background-picture-id1138288758?k=20&m=1138288758&s=612x612&w=0&h=LMtberFagKLWqz4BdhZt4Ukh28m3TYJNZ-i5NegN1ro=')`,
        backgroundSize:'cover'}}>
      
      
      <div className="col-md-8 mt-4 mx-auto" style={{
        backgroundImage:`url('https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background.jpg')`,
        backgroundPosition:'center',
        backgroundSize:'cover'
      }}> 
        <h1 ><center> Update Profile</center></h1>
        <form className="row" style={{ margin:"25px 85px 75px 100px"}}>
            <div className="form-group" style={{marginBottom:'15px'}}>
               <label style={{marginBottom:'5px'}}>Full Name</label>
               <input type="text"
               className="form-control"
               name="name"
               placeholder="Enter Your Full Name"
               value={this.state.name}
               onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input type="text"
              className="form-control"
              name="email"
              placeholder="Enter Your Email"
              value={this.state.email}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Address</label>
              <input type="text"
              className="form-control"
              name="address"
              placeholder="Enter Your Address"
              value={this.state.address}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>NIC</label>
              <input type="text"
              className="form-control"
              name="nic"
              placeholder="Enter your NIC Number"
              value={this.state.nic}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact Number</label>
              <input type="text"
              className="form-control"
              name="contactNumber"
              placeholder="Enter Your Mobile Number"
              value={this.state.contactNumber}
              onChange={this.handleInputChange}/>
            </div>
            </form>

            <button className="btn btn-success" type="submit" style={{margin:"25px 85px 75px 100px"}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>


        

      </div>
      </section>
      </body>
      </html>
      
      
      
      
    )
    }
}