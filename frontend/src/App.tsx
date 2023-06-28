import { useState } from 'react';
import { createBrowserRouter,  RouterProvider, Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import MenuSidebar from '@/components/MenuSidebar';
import ProductDisplay from '@/pages/ProductDisplay';
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
        path: '/product/:id',
        element: <ProductDisplay />
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
      </div>
    </ApolloProvider>
  )
}

export default App