import React, { Component  } from 'react';
import { render } from 'react-dom';
import './style.css';
import axios from 'axios';


var dataRes = []

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      results : [],
      value: "asc",
      dataDesc : [],
      gender : "",
      species : ""
    };
    this.switchData = false;
 
  }

  componentDidMount(){

    let url = 'https://rickandmortyapi.com/api/character/'
    axios.get(url).then((res) => { 
      this.setState({
        results : res.data.results
      })
      console.log('res',this.state.results)
      dataRes = this.state.results
      
      // this.setState({
      //   dataDesc : res.data.results.reverse()
      // })
  
    })
  }

  selectChange = (event) => {
    event.preventDefault()
    if(event.target.value === "asc"){
      console.log("asc")
      this.state.results.reverse()
      this.setState({ value: event.target.value });
      
    }else{
        console.log("desc else")
        this.setState({ value: event.target.value });
    }
  };

  radioHandle = (event) => {
    event.preventDefault()
    console.log("inside radio button click")
    console.log(event.target.value)
    if(event.target.value === "male") {
      this.setState({ gender: event.target.value })
      this.switchData= true;
      }
      else if(event.target.value === "female")
      {
        this.setState({ gender: event.target.value })
        this.switchData= true;
      }
      if(event.target.value === "human")
      {
        this.setState({ species: event.target.value })
        this.switchData= true;
      } else if(event.target.value === "alien")
      {
        this.setState({ species: event.target.value })
        this.switchData= true;
      }

    }

  render() {
  
    return (
      <div className="container">
        <h1 style={{border : "2px solid blue"}}>Telstra Assignment</h1>

        {/* bootstrap responsive ness classes */}
        <div  className="col-md-3 col-sm-3 col-xs-3 col-lg-3" >
          <h3>Filters</h3>
          <div className="species">
            <hr />
              <form>
              <label>Gender : </label> <br/>
                <input type="radio" id="male" name="gender" value="male"  onChange={this.radioHandle}/>
                <label for="male">Male</label><br/>
                <input type="radio" id="female" name="gender" value="female"  onChange={this.radioHandle}/>
                <label for="female">Female</label><br/>
              </form>
          </div>
          <hr />
          <div className="origin">
            <hr />      
            <form>
              <label>Species : </label> <br/>
              <input type="radio" id="human" name="species" value="human" onChange={this.radioHandle}/>
              <label htmlFor="human">human</label><br/>        
              <input type="radio" id="alien" name="species" value="alien" onChange={this.radioHandle}/>
              <label htmlFor="alien">alien</label><br/>
            </form> 
          </div>
        </div>
        <div  className="col-md-9 col-sm-9 col-xs-9 col-lg-9">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
            <select id="selectorder" onChange={this.selectChange.bind(this)}  className="selectorder">
              <option value="asc">Ascending</option>
              <option value="desc">Decending</option>
            </select>
          <br/>
          <div></div>

           {/* Human */}
           {this.state.species === "human" && this.switchData === true ?
             this.state.results.filter((item) => item.species === "Human").map((items,i) => {
                  return(
                    <div style={{
                     float:"left", border:"10px solid black",
                      justifyItems: "stretch" ,padding: "5px", margin: "5px"}}>
                       <div style={{width: "300px", height:"500px" }}>
                        <img src={items.image}/>
                    <ul style={{backgroundColor:"black", color:"white",
                    }}>
                       <li>{items.id}</li>
                       <li>{items.name}</li>
                       <li>{items.gender}</li>
                       <li>{items.status}</li>
                       <li>{items.created}</li>
                       <li>{items.origin.name}</li>
                       <li>{items.location.name}</li>
                       <li>{items.species}</li>
                    </ul>
                    </div>
                    </div>
                  )
                })
                :
               null                
            }
            {/*Alien*/}
            {this.state.species === "alien" && this.switchData === true ?
             this.state.results.filter((item) => item.species === "Alien").map((items,i) => {
                  return(
                    <div style={{
                     float:"left", border:"10px solid black",
                      justifyItems: "stretch" ,padding: "5px", margin: "5px"}}>
                       <div style={{width: "300px", height:"500px" }}>
                        <img src={items.image}/>
                    <ul style={{backgroundColor:"black", color:"white",
                    }}>
                       <li>{items.id}</li>
                       <li>{items.name}</li>
                       <li>{items.gender}</li>
                       <li>{items.status}</li>
                       <li>{items.created}</li>
                       <li>{items.origin.name}</li>
                       <li>{items.location.name}</li>
                       <li>{items.species}</li>
                    </ul>
                    </div>
                    </div>
                  )
                })
                :
               null                
            }

            {/* Male */}
            {this.state.gender === "male" && this.switchData === true ?
             this.state.results.filter((item) => item.gender === "Male").map((items,i) => {
                  return(
                    <div style={{
                     float:"left", border:"10px solid black",
                      justifyItems: "stretch" ,padding: "5px", margin: "5px"}}>
                       <div style={{width: "300px", height:"500px" }}>
                        <img src={items.image}/>
                    <ul style={{backgroundColor:"black", color:"white",
                    }}>
                       <li>{items.id}</li>
                       <li>{items.name}</li>
                       <li>{items.gender}</li>
                       <li>{items.status}</li>
                       <li>{items.created}</li>
                       <li>{items.origin.name}</li>
                       <li>{items.location.name}</li>
                       <li>{items.species}</li>
                    </ul>
                    </div>
                    </div>
                  )
                })
                :
               null                
            }
            
             {/* Female */}
            {
              this.state.gender === "female" && this.switchData === true ?
              this.state.results.filter((item) => item.gender === "Female").map((items,i) => {
                   return(
                     <div style={{
                      float:"left", border:"10px solid black",
                       justifyItems: "stretch" ,padding: "5px", margin: "5px"}}>
                        <div style={{width: "300px", height:"500px" }}>
                         <img src={items.image}/>
                     <ul style={{backgroundColor:"black", color:"white",
                     }}>
                        <li>{items.id}</li>
                        <li>{items.name}</li>
                        <li>{items.gender}</li>
                        <li>{items.status}</li>
                        <li>{items.created}</li>
                        <li>{items.origin.name}</li>
                        <li>{items.location.name}</li>
                        <li>{items.species}</li>
                     </ul>
                     </div>
                     </div>
                   )
                 })
                 :
                null  
            }

            {/*  asc */} 
            {
            this.state.value === "asc" && this.switchData === false ?
            this.state.results.map((items,i) => {
              return(
                <div style={{
                 float:"left", border:"10px solid black",
                  justifyItems: "stretch" ,padding: "5px", margin: "5px"}}>
                   <div style={{width: "300px", height:"500px" }}>
                    <img src={items.image}/>
                <ul style={{backgroundColor:"black", color:"white",
                }}>
                   <li>{items.id}</li>
                   <li>{items.name}</li>
                   <li>{items.gender}</li>
                   <li>{items.status}</li>
                   <li>{items.created}</li>
                   <li>{items.origin.name}</li>
                   <li>{items.location.name}</li>
                   <li>{items.species}</li>
                </ul>
                </div>
                </div>
              )
            }) : 
            null
            }

            {/* desc */}
            {
            this.state.value === "desc" && this.switchData === false 
            ?
            this.state.results.reverse().map((items,i) => {
              return(
                <div style={{
                 float:"left", border:"2px solid red",display:"flex"
                  ,justifyContent: "space-evenly",
                  justifyItems: "stretch"}}>
                   <div style={{width: "300px", height:"500px" }}>
                    <img src={items.image}/>
                <ul style={{backgroundColor:"black", color:"white",height:"100%"}}>
                   <li>{items.id}</li>
                   <li>{items.name}</li>
                   <li>{items.gender}</li>
                   <li>{items.status}</li>
                   <li>{items.created}</li>
                   <li>{items.origin.name}</li>
                   <li>{items.location.name}</li>
                   <li>{items.species}</li>
                </ul>
                </div>
                </div>
              )
            }): null
          } 
      
        </div>
  
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
