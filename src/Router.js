import React from 'react'
import {
    createBrowserRouter,
    Link,
    Navigate,
    Outlet,
    RouterProvider,
    useNavigate,
    useRouteError,
} from "react-router-dom";


const NavBar = () => {
    console.log("Navbar was rerendered")
    return (
        <div style={{ display: "flex" }}>
            <Link to="/">
                <button>
                    Home
                </button>
            </Link>

            <Link to="/about">
                <button>
                    About
                </button>
            </Link>

            <Link to="/contact">
                <button>
                    Contact
                </button>
            </Link>

            <Link to="/blog">
                <button>
                    Blog
                </button>
            </Link>

        </div>
    )
}

const Layout = () => {
    return (
        <div>
            <NavBar />

            <Outlet />

            <h1>Footer</h1>
        </div>
    )
}


const About = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}

const Home = () => {

    const navigate = useNavigate()

    const throwError = () => {
        throw new Error("IM a error")
    }


    return (
        <div>
            <h1>Home</h1>
            <button onClick={throwError}>Throw some error</button>
            <button onClick={() => navigate("/about")}>Take me to about</button>
        </div>
    )
}

const ErrorElement = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>{error.status}</h1>
            <h1>{error.message}</h1>
        </div>
    )
}




const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
]);


const AppRouter = () => <RouterProvider router={router} />

export default AppRouter