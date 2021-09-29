import React from 'react'
import "./all.css"
 class  List extends React.Component  {


render(){

    let {Country,city,temp}=this.props.data;  
   
  
    const list=()=>{
   
     return (
         
         
             <div className="listbox">
             <div>
             <span>Country</span>
             <span>{Country}</span>
             </div>
             <div>
             <span>City</span>
             <span>{city}</span>
             </div>
             <div>
             <span> temp</span>
             <span>{ `${(temp-273.15).toFixed(1)}`}</span>
             </div>
            
             
         </div>
             )
   

    }
    
    return (
    
      
  <>
  {temp!=="" && list()}
  
  </>
    
    
    )
}}


export default List;