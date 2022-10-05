import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Food from './components/Food/Food';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Order from './components/Order/Order';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {path:'/', 
    element:<Main></Main>, 
    children:[
      {path: '/about', element:<About></About>},
      {path: '/',
      loader: async()=>{
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=f`)
      },
      element: <Food></Food>},
      {path: '/food',
      loader: async()=>{
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=f`)
      },
      element: <Food></Food>},
      {path: '/order', element: <Order></Order>},
      {path: '/food/:foodId',
      loader: async({params})=>{
        // console.log(params)
        return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)

      },
      element: <FoodDetails></FoodDetails>}
    ]}
  ])

  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
  
    </div>
  );
}

export default App;
