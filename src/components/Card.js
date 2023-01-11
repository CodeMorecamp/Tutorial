import React from 'react'

const cardStyle = {
    color: "red",
    margin: "0",
    border: "3px solid Blue",
    borderRadius: "10px",
    width: "50%",
    height: "100%",
}

const cardStyle2 = {
    color: "green",
    margin: "30px",
    border: "3px solid Blue",
    borderRadius: "10px",
    width: "50%",
    height: "100%",
}

const cardStyle1 = {
    color: "blue",
    margin: "50px",
    border: "3px solid Blue",
    borderRadius: "10px",
    width: "50%",
    height: "100%",
}

const Card = (props) => {
  return (
    <div style={cardStyle}>
        <h1>This an {props.header1} </h1>
        <h2>This an H2</h2>
    </div>
  )
}

const Card2 = (props) => {
    return (
      <div style={cardStyle1}>
          <h1>This an {props.header2}</h1>
          <h2>This an H2</h2>
      </div>
    )
  }

  const Card3 = (props) => {
    return (
      <div style={cardStyle2}>
          <h1>This an {props.header3} </h1>
          <h2>This an H2</h2>
      </div>
    )
  }



export default Card 
export {Card2, Card3}