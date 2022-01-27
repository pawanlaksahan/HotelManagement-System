import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';



export default class createRequest extends Component{

  

  constructor(props){
    super(props);
    this.state={
      name:"",
      nic:"",
      request:""

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
    const {name,nic,request} = this.state;

    const data ={
      name:name,
      nic:nic,
      request:request
    }
    console.log(data)
    axios.post("http://localhost:8000/request/save",data).then((res) =>{
      if(res.data.success){
        alert("Your Request saved successfully")
        this.setState(
          {
            name:"",
            nic:"",
            request:""
          }
        )
      }
    })



  }
  
  render(){
    return(
      <html>
      <body>
        <section style={{backgroundImage:`url('https://media.istockphoto.com/photos/light-green-defocused-blurred-motion-abstract-background-picture-id1138288758?k=20&m=1138288758&s=612x612&w=0&h=LMtberFagKLWqz4BdhZt4Ukh28m3TYJNZ-i5NegN1ro=')`,
        backgroundSize:'cover'}}>
      
      <div className = "container" >
            <NavBar/>
       <div className="col-md-8 mt-4 mx-auto" style={{
      backgroundImage:`url('https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background.jpg')`,
      backgroundPosition:'center',
      backgroundSize:'cover'
    }}></div>
      <br></br>
        <h1  style={{marginTop:'25px'}}><center> Request Form</center></h1>
        <br></br>
        <form className="row" onSubmit={this.onSubmit} style={{ margin:"25px 85px 75px 100px"}}>
            <div className="form-group" style={{marginBottom:'15px'}}>
               <label style={{marginBottom:'5px'}}>Registered Name</label>
               <input type="text"
               className="form-control"
               name="name"
               placeholder="Enter Your Registered Name"
               pattern="[a-z A-Z .]+"
               value={this.state.name}
               onChange={this.handleInputChange}
               required/>
               <br></br>
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
               <br></br>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Request</label>
              <textarea
              className="form-control"
              name="request"
              placeholder="Enter Your Updating Details
                                    eg:my new mobile number is 07* *******"
              value={this.state.request}
              onChange={this.handleInputChange}
              required/>
               <br></br>
            </div>

           
             <table>
              <tr>
                <td>
            <button className="btn btn-success" type="submit" style={{margin:"25px 85px 75px 15px"}} >
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
            </td>
            </tr>
            </table>
            </form>
            


        

      </div>
      </section>
       </body>
      </html>
      
      
      
      
    )
    }
}