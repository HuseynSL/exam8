import NotFound from "../pages/NotFound/NotFound";
import UserRoot from "../pages/UserRoot";
import Home from "../pages/Home/Home"
import Add from "../pages/Add/Add"
import Wishlist from "../pages/Wishlist/Wishlist"
import Details from "../pages/Details/Details";

const Routers=[
    {path:"/",element:<UserRoot/>,
    children:[
        {path:"/",element:<Home/>},
        {path:"/add",element:<Add/>},
        {path:"/wishlist",element:<Wishlist/>},
        {path:"/detail/:id",element:<Details/>},
        {path:"*",element:<NotFound/>},
    ]
    }
]

export default Routers