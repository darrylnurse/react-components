import './dropdown.css'
import Dropdown from './components/Dropdown.js'

function App() {
  return (
      <div className={"bg-green-100 m-5 p-5 rounded-2xl"}>
        <Dropdown text={["Length of Trip", "Hours", "Days", "Weeks"]}/>
        <Dropdown text={["Chicken", "Randall", "Kimbo", "Alex", "Barney"]}/>
      </div>
  );
}

export default App;
