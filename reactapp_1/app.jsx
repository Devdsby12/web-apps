import { useEffect, useState } from "react";

function Nav(){
  return(
  <>
  <div style={{ margin:"0px",padding:"0",alignItems:"center", justifyContent:"end" , backgroundColor:"green",width:"100vw", height:"33px", zIndex:"10" , position:"fixed",top:"0px" , display:"flex" ,gap:"30px" }} >
  <div style={{fontSize :"20px",display:"flex" , position:"absolute" , right :"5px" , margin :"30px" , padding:"30px", gap:"30px"}} >
  <div>Home</div>
  <div>Shop</div>
  <div>Contact</div>
  <div>About</div>
  <div>More</div> </div>

  </div>
  </>)
}


function Flexbox(props){
  return(
    <>
    
    <div className="divcontainer"
    style={ {  position: "relative", display:"flex" ,padding: "20px",width :"97vw" , gap:"10px", backgroundColor :props.color  , flexDirection:"column"}}

    
    >
      

      <img src ={props.src} width= "10%" style={{border: "solid 10px white" , borderRadius:"50px"}}  />
      {props.tag}
      <button onClick={()=>{ async function added(){
        const data = await fetch("http://localhost:3000/fivestar/post/add")
        const response = await data.json()
        if (response.status === "ok"){
          alert("added to card")
        }
      } added()


      }} style={{cursor :"pointer" , backgroundColor: "brown" , position: "absolute" , top: "15%" ,right :"10%" ,height :"30px" , width:"150px" ,  }} >BUY NOW</button>
    </div>
    
    
    </>

  )
}



function App(){
  const [old ,setold] = useState(null)
  useEffect(()=>{
    async function ffetch(){
    const data = await fetch("http://localhost:3000/fivestar/post")
    const response = await data.text()
    setold(response)
    } 
  ffetch() 
} , []
)
  return(
    <>
    <Nav/>
    <Flexbox 
    color = "yellow"
    tag = {<h1> {old}</h1>} 
    src = "https://th.bing.com/th/id/OIP.khgw7kjB_Tgbp46reo8vDQHaLH?w=202&h=303&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" 
    
    />

    <Flexbox 
    color = 'pink'
    
    tag = {<h1> {old}</h1>} 
    src = "https://th.bing.com/th/id/OIP._dT0y6dLmvVy0gqe3UhOTQHaL4?w=197&h=316&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" 
    
    />
    <Flexbox 
    color = "brown"
    tag = {<h1> </h1>} 
    src = "https://th.bing.com/th/id/OIP.REyAuS9Letkbh70cSmT0hQHaLG?w=202&h=303&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" 
    />
<Flexbox 
    color = "blue"
    tag = {<h1> {old}</h1>} 
    src = "https://th.bing.com/th/id/OIP.khgw7kjB_Tgbp46reo8vDQHaLH?w=202&h=303&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" 
    />

    <Flexbox 
    color = 'yellow'
    
    tag = {<h1> {old}</h1>} 
    src = "https://th.bing.com/th/id/OIP._dT0y6dLmvVy0gqe3UhOTQHaL4?w=197&h=316&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" 
    
    />
    <Flexbox 
    color = "red"
    tag = {<h1> {old}</h1>} 
    src = "https://th.bing.com/th/id/OIP.REyAuS9Letkbh70cSmT0hQHaLG?w=202&h=303&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" 
    />

    </>


  )
}
export default App
