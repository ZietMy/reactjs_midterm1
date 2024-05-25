import { LIST_USERS } from "./data.js";
import Card from "./components/Card.jsx";

function App() {
  return <>
  <div class="cards-view">
      <div class="cards-grid">
  {
    LIST_USERS.map((card,index)=>(
      <Card key={index} card={card}/>
    ))
  }
    </div>
  </div>
  </>;
}

export default App;
