import Main from "../components/pages/Main.jsx"
import Error from "../components/pages/Error.jsx"
import Basket from "../components/pages/Basket.jsx"
import MainItem from "../components/pages/ItemCard.jsx"

export const routesArray = [
    {path: '/main', element: Main},
    {path: '/basket', element: Basket},
    {path: '/main/:id', element: MainItem},
    {path: '/error', element: Error}
]