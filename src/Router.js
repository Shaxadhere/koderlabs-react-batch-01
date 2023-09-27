import React, { useEffect, useState } from 'react'
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
    const [movies, setMovies] = useState([])

    // const throwError = () => {
    //     throw new Error("IM a error")
    // }


    // if(agar user authenticated nahi hai) {
    //     return <Navigate to="/login" />
    // }

    // const fetchMovies = async () => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     const data = await response.json()
    //     console.log(data)
    // }


    useEffect(() => {
        // fetch("http://localhost:3000/products.json")
        fetch("http://localhost:3000/objects.json")
            .then((response) => response.json())
            .then((data) => {
                // alert(data?.message)
                setMovies(data?.results)
            })
    }, [])

    const [user, setUser] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const sendData = () => {
        fetch("https://evolvlmsdev.azurewebsites.net/api/authorize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Email: email,
                Password: password
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success === true) {
                    console.log(data?.data?.user)
                    setUser(data?.data?.user)
                }
                else {
                    alert(data.apiMessage)
                }
            })
    }



    return (
        <div>
            <h1>Welcom Home {user?.name}</h1>
            {/* <button onClick={throwError}>Throw some error</button> */}
            <button onClick={() => navigate("/about")}>Take me to about</button>

            {JSON.stringify(user)}

            <div>
                <input type='text'
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <input type='password'
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />

                <button onClick={sendData}>Login</button>
            </div>


            <div style={{ display: "flex", flexWrap: "wrap", marginTop: 50 }}>

                {movies?.map((item, index) => {
                    return (
                        <div key={index} style={{ padding: 10, border: "1px solid", marginInline: 10 }}>
                            <img src={item.imageUrl} style={{ width: 200 }} />
                            <h2>{item.title}</h2>
                            <p>{item.director}</p>
                            <p>{item.year}</p>
                            <p>{item.duration}</p>
                        </div>
                    )
                })}




            </div>
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