import { useState } from 'react';
import { createBrowserRouter,  RouterProvider, Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Analytics } from '@vercel/analytics/react';
import CartSidebar from '@/components/CartSidebar';
import MenuSidebar from '@/components/MenuSidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home'
import '@/styles/globalStyle.scss';

// Apollo Client connect to Graphql server
const client = new ApolloClient({
  uri: import.meta.env.VITE_RAMEN_HOUSE_GRAPHQL_URL,
  cache: new InMemoryCache()
})

const Layout = () => {

  const [toggleCartSidebar, setToggleCartSidebar] = useState<boolean>(false)
  const [toggleMenuSidebar, setToggleMenuSidebar] = useState<boolean>(false)

  const handleCartSidebar = () => setToggleCartSidebar(!toggleCartSidebar);
  const handleMenuSidebar = () => setToggleMenuSidebar(!toggleMenuSidebar);

  return (
    <div>
      <Navbar handleCartSidebar={handleCartSidebar} handleMenuSidebar={handleMenuSidebar}/>
      {/* Cart Sidebar */}
      { toggleCartSidebar && <CartSidebar handleCartSidebar={handleCartSidebar} /> }
      {/* Menu Sidebar */}
      { toggleMenuSidebar && <MenuSidebar handleMenuSidebar={handleMenuSidebar} /> }
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '*',
        element: <Home/>
      },
    ]
  },
])

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
          <RouterProvider router={router} />
          <Analytics />
      </div>
    </ApolloProvider>
  )
}

export default App