import CreateTodo from "./Component/CreateTodo";
import Navbar from "./Component/Navbar";
import Todos from "./Component/Todos";

function App() {
  return (
    <div className="App">
      <div className="container my-5">
        <div className="row justify-content-center" >
          <div className="col-8 ">
            <Navbar/>
            <CreateTodo/>
            <hr/>
            <Todos/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
