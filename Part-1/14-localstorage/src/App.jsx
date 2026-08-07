import React from 'react'

function App() {

  const user = {
    userName: "Ritesh",
    age: "20",
    city: "Karnal"
  }

  localStorage.setItem("user", JSON.stringify(user))
  console.log(user);

  console.log(JSON.parse(localStorage.getItem('user')));
    
  localStorage.clear()
  return (
    <div>
      
    </div>
  )
}
 
export default App
