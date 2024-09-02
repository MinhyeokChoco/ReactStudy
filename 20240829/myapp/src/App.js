import { Suspense } from "react";
import Count from "./components/Count";
import Todo from "./components/Todo";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>loading...</>}>
        <Login />
      </Suspense>
      {/* <Count /> */}
    </div>
  );
}

export default App;
