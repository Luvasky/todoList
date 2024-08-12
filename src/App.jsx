import * as lib from "./libraries/libraries.js";
function App() {
  return (
    <>
      <lib.BrowserRouter>
        <lib.Routes>
          <lib.Route path="/" element={<lib.Login></lib.Login>}></lib.Route>
        </lib.Routes>
        <lib.Routes>
          <lib.Route
            path="/create-account"
            element={<lib.CreateAccount></lib.CreateAccount>}
          ></lib.Route>
        </lib.Routes>
      </lib.BrowserRouter>
    </>
  );
}

export default App;
