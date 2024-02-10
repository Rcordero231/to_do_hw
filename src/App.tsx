import Navigation from "./components/Navigation"
import Container from "react-bootstrap/Container"
import ToDo from "./views/ToDo"

export default function App() {
  return (
    <>
      <Navigation />
      <Container>
        <ToDo />
      </Container>
    </>
  )
}
