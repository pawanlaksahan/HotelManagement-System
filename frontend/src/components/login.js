import React,{ Component } from 'react';
import axios from 'axios';

export default class createCustomer extends Component{
  
  // const [user, setUser] = useState({
  //   email:"",
  //   contactNumber:""
  // })

  //  const  handleChange = e =>{
  //     const {name,value} = e.target;
      
  //     setUser({
  //       ...user,
  //       [name]:value
  //     })
  //   }
    
  //   const login = () => {
  //     axios.post("http://localhost:8500/customer/login",data).then((res) => console.log(res))
  //   }
  // }







  render(){
    return(
      //<BrowserRouter>
      <div className="container">
          <html>
      <body>
        <section style={{backgroundImage:`url('https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80')`,
        backgroundSize:'cover', height: '1000px'}}>
      <div className="col-md-8 mt-4 mx-auto" style={{
        backgroundPosition:'center',
        backgroundSize:'cover'
      }}> 

      <br></br>
      <br></br>
      
        <h1 style={{marginTop:'25px'}} ><center>WELCOME TO HOTEL PARADISE</center></h1>
          <form className="row" style={{ margin:"25px 85px 75px 100px"}} >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            

            <div className="form-group" style={{marginBottom:'15px'}}>
            <br></br>
            <br></br><br></br>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input type="email"
              className="form-control"
              name="email"
              placeholder="Enter Your Email"
              //value={this.state.email}
              //onChange={this.handleInputChange}
              />
              <br></br>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
            <br></br>
              <label style={{marginBottom:'5px'}}>Contact Number</label>
              <input type="text"
              className="form-control"
              name="contactNumber"
              placeholder="Enter Your Mobile Number"
              //value={this.state.contactNumber}
              //onChange={this.handleInputChange}
              />
              <br></br>
            </div>
            </form>

            <button className="btn btn-success" style={{margin:"25px 85px 75px 120px"}}><a href="/register" style={{textDecoration:'none',color:'white'}}>Create New Account</a></button>
             &nbsp;
            &nbsp;
            <button className="btn btn-success"  style={{margin:"25px 85px 75px 40px"}}><a href="/Home" style={{textDecoration:'none',color:'white'}}>Log in</a></button>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        </section>
        </body>
        </html>

      </div>
      
      
      //</BrowserRouter>
      
    )
    }
}