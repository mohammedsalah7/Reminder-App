import React, { Component } from 'react';
import {add_Reminders,remove_Reminder,clear_Reminder} from './actions/index'
import {connect} from 'react-redux';
import  moment from "moment";
import './index.css';
import logo from './icon.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



 class App extends Component  {
   state ={

    text :'',
    date : new Date(),
    time : new Date()
    
   }

    render_Reminder =() => {
const {reminder} = this.props;
return (
  <ul className="list-group">
    {
      reminder.map(reminder=>{
        return(
          <li key= {reminder.id} className="list-group-item">
             <div>{reminder.text}</div>  
        <div>{ moment(new Date(reminder.date)).fromNow() }</div>   
  
             <div className="closeIcon btn btn-danger"  
             onClick={()=> this.props.remove_Reminder(reminder.id)}>X</div>
          </li>     
             )
      })

    }


  </ul>
)
    }
   render(){

      return (
        
        <div  className="App">
           <img  src = {logo} alt= "logo "/>
          <div className="reminder-title">
                <h2> What should you DO ?</h2>
            </div>

            <input  
            onChange ={(e)=> this.setState({text:e.target.value})}
            className="form-control"
             type="text"
             value={this.state.text}
             placeholder="Enter What you Do "
            />
            
            {/* <input type="date" 
            onChange ={(e)=> this.setState({date:e.target.value})}
            value={this.state.date}
              className="form-control" /> */}

              <DatePicker
               
               className="form-control"
               value={this.state.date}
               placeholderText="Enter Date"
               selected={this.state.date}
               onChange={(date) => {this.setState({date})}}
               showTimeSelect
               timeFormat="HH:mm"
               dateFormat="MMMM d, yyyy h:mm aa"
               timeCaption="time"
           />



            {/* <input type="time" 
            onChange ={(e)=> this.setState({time:e.target.value})}
            value={this.state.time}
             className="form-control" /> */}
           
            {this.render_Reminder()}

          <button 
          onClick={() => {
            this.props.add_Reminders(this.state.text, this.state.date , this.state.time)
            this.setState({text:'', date:'' ,time:''}) 
           }}
           className="btn btn-primary btn-block"> 
           Add Reminder
           </button>

          <button  onClick={()=> this.props.clear_Reminder()}
          className="btn btn-danger btn-block clearReminder"> 
          Clear Reminder</button>
        </div>
       
      );
    }
   }
   

  //  function mapDispatchToProps (dispatch){
  //    return {
  //      add_Reminders : ()=> dispatch(add_Reminders())
  //    }
  //  }

//   function mapStateToProps(state){
// return{
//   reminder: state
// }

//   }


export default connect(state=>{
  return {
    reminder: state
  }
},{
  add_Reminders , remove_Reminder ,clear_Reminder

})(App);
