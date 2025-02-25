import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayouts from "./layouts/DefaultLayouts"
import HomePage from "./pages/HomePage"
import AddPropertyPage from "./pages/AddPropertyPage"
import SearchPage from "./pages/SearchPage"
import DetailPage from "./pages/DetailPage"
import Error404Page from "./pages/Error404Page"
import { GlobalProvider } from "./context/GlobalContext"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayouts}>
            <Route path="/" Component={HomePage} />
            <Route path="/property/:id" Component={DetailPage} />
            <Route path="/property/add" Component={AddPropertyPage} />
            <Route path="/search" Component={SearchPage} />
            <Route path="/*" Component={Error404Page} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App