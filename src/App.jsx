import React from "react";
import Card from './Cards'
import './index.css'
import sdata from './sdata'

function App(){
    return (
    <>
        <h1 className="heading_style">List of top 5 Netflix Series...</h1>

        {sdata.map( (val) => {    
            return(     
            <Card 
            key = {val.id}
            imgsrc = {val.imgsrc}
            title = {val.title}
            sname = {val.sname}
            link =  {val.link}/>
            )})}
    </>
    )
}
export default App;
