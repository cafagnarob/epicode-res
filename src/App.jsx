// importo il foglio di bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
// quedta riga ha importato il foglio css di bootstrap in tutto il progetto
// importo react-bootstrap
import RestaurantNavbar from "./components/RestaurantNavbar"
import RestaurantFooter from "./components/RestaurantFooter"
import Home from "./components/Home"
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <RestaurantNavbar />
      </header>
      <main className="flex-grow-1">
        <Home />
      </main>
      <footer>
        <RestaurantFooter />
      </footer>
    </div>
  )
}

export default App
