import Main from "../pages/Main.jsx"
import Error from "../pages/Error.jsx"
import Basket from "../pages/Basket.jsx"
import MainItem from "../pages/ItemCard.jsx"

export const routesArray = [
    {path: '/', element: Main},
    {path: '/main', element: Main},
    {path: '/basket', element: Basket},
    {path: '/main/:id', element: MainItem},
    {path: '/error', element: Error}
]