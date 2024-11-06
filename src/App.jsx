import FirstPage from "./Components/FirstPage/FirstPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SecondPage from "./Components/SecondPage/SecondPage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/SecondPage" element={<SecondPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
