import React,{Component} from 'react';
import Card from './CardUI';
import './dividePageReserve.css';
import NavBar from '../NavBarCus.js';

import img1 from '../../assets/c.jpeg';
import img2 from '../../assets/t.jfif';
import img3 from '../../assets/k.jpg';
import img4 from '../../assets/room 4.jpg';
import img8 from '../../assets/5547527_18080111100067219956.png';
import img11 from '../../assets/Alpha-Hotel-Canberra-Twin-Room-2.jpg';
import img7 from '../../assets/Bedroom-triple-design.jpg';
import cover from '../../assets/cover1.jpg';

//import Logo from '../logo.svg';




class Cards extends Component {
    render(){
        
        return (
            
            <div className="container" >
                <br></br>
                <NavBar/>
            

                <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                
                    

                    <div className="col-md-4" style={{textAlign: 'center'}}>
                    <img src={img4} width="1350" height="600" alt="img4" />
                    </div>
                    </div>
                
                </div>

                <hr/>

                <br>  
                </br>
                <div className="middle-Text" id="middle-Text">
                    Book a Room at an affordable price<br></br>
                ~ Cheap Rooms ~
                <br></br>

                </div>

                <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                
                    <div className="col-md-4">
                        <Card imgsrc={img8} title='Single' text='A room assigned to one person, Less costly'/>
                    </div>

                    
                    <div className="col-md-4">
                        <Card imgsrc={img11} title='Double' text='A room assigned to two people, 2 Bed'/>
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={img7} title='Triple' text='A room that can accommodate three persons, 3 Bed'/>
                    </div>
                
            </div>
            </div>
















               

                <div className="Upcolour" id= "upcolor">
                

                {/* get images from src folder */}
                <img src={cover} width="500" alt="cover_photo" />

                <div className="RightText" id= "righttext">
                <div className="rightTextStyle" id= "rightTextStyle">
                    
                <p>
                <div className = "dsaf" style={{color: "white"}}>
                    WORLD CLASS ACCOMMODATION
                    <hr/> 


                
                Our Hotel Room Booking 
                system will allow online
                room reservations easier and 
                increase direct bookings. This makes it 
                easier for maintaining room availability, get 
                direct bookings and also instant confirmations with credit 
                card payments. It’s a powerful online hotel reservation 
                system that can be used on any website offering bed and
                breakfast or hotel accommodation services. This is a 
                feature rich and customizable room booking system. 
                You can manage room types, hotel rates and booking options. 
                It comes with a online reservation manager at the back-end 
                with invoices and reports functionality.
                </div>
                </p>
                
                </div>
                </div>
                
                   

                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className="middle-Text" id="middle-Text">
                Discover a hotel that defines a 
                <br></br>new dimension of luxury

                </div>
                
                

                

            <div className="container-fluid d-flex justify-content-center">
                
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title='Standard Suite' text='2 Bed, Scenic View, Free Wifi, Less costly'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title='Delux Suite' text='2 Bed, Luxorious interior, Free Wifi'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title='Superior Suite' text='2 Bed, Complimentary liquor, Free Wifi'/>
                    </div>
                </div>

            
            </div>
            
            
            
            </div>

            






            

        );
    }
}

export default Cards;