import "./App.css";
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App container">
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
