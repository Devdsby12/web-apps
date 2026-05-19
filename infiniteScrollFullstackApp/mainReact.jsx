// import { useEffect, useState } from "react";
// const path = "http://localhost:3000/fivestar"
// function handlescroll() {
//    console.log("scroll")
// }
// function Generate(){
//   const [list ,setlist] = useState([])
//   const [num ,setnum] = useState(0)
//   useEffect(()=>{
//     async function Getdata(path) {
//       const Response = await fetch(`${path}?num=${num}`)
//       const data = await Response.json()
//       setlist(prev => [...prev, ...data.list])
//       setnum(prev => prev + 6)
      
//     }
//     Getdata()
//   } ,[]

//   )
//   return( 
//   <>
//   <div onScroll={generate} style={{display:"flex" ,height:"100vh",width:"100vw"}}>
//   <h1>{list[0]}</h1>
//   <h1>{list[1]}</h1>
//   <h1>{list[2]}</h1>
//   <h1>{list[5]}</h1>
//   <h1>{list[4]}</h1>
//   <h1>{list[3]}</h1>
  

//   </div> </>)
// }
// function App(){
//   <Generate/>
// }

// export default App


import { useEffect, useState } from "react";

const path = "http://localhost:3000/fivestar"

function Generate() {

  const [list, setlist] = useState([])
  const [num, setnum] = useState(0)

  async function Getdata() {

    const Response = await fetch(`${path}?num=${num}`)

    const data = await Response.json()

    setlist(prev => [...prev, ...data.list])

    setnum(prev => prev + 6)
  }

  useEffect(() => {

    Getdata()

  }, [])

  function handlescroll(e) {

    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 5

    if (bottom) {

      Getdata()
      Getdata()
      Getdata()
      Getdata()
      Getdata()
      Getdata()
      Getdata()
      
    }
  }

  return (

    <div
      onScroll={handlescroll}
      style={{
        height: "100vh",
        overflowY: "scroll"
      }}
    >

      {
        list.map((item, index) => (
          <h1 style={{
  height: "100vh",
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  border: "5px solid red"
}} key={index}>{item}</h1>
        ))
      }

    </div>
  )
}

function App() {

  return <Generate />
}

export default App
