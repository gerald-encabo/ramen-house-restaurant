import React, { useEffect, useRef } from "react"
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { GiNoodles } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { NavbarButton } from "@/types/listTypes";
import '@/styles/navbar.scss';
import { useSelector} from "react-redux"
import { State } from '@/redux/store'

const Navbar = ({handleCartSidebar, handleMenuSidebar}: NavbarButton) => {

  const navbarRef = useRef<React.MutableRefObject<any> | any>(null)
  const totalQuantity = useSelector((state: State) => state.cart.totalQuantity)

  // Navbar background change when its scroll down below 80
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbarRef.current.classList.add('navbar-shrink')
      } else {
        navbarRef.current.classList.remove('navbar-shrink')
      }
    })
  }, [])

  return (
    <nav className='navbar' ref={navbarRef}>
        <div className='navbar-cart' onClick={handleCartSidebar}>
              Cart
              <span><FaShoppingCart /></span>
              <span className="navbar-quantity">{totalQuantity}</span>
        </div>
        <div className='navbar-logo'>
            <p className='navbar-logo-container'>
                <span className='navbar-logo-name'>Ramen</span>
                <span className='navbar-logo-icon'><BsFillHouseDoorFill /></span>
                <span className='navbar-logo-name'>House</span>
            </p>
        </div>
        <div className='navbar-menu' onClick={handleMenuSidebar}>
            <span><GiNoodles /></span>
            Menu
        </div>
    </nav>
  )
}
export default Navbar