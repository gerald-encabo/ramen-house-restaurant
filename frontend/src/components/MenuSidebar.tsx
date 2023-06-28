import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import '@/styles/menu-sidebar.scss';
import { MenuSidebarButton, SelectedMenu } from "@/types/listTypes";

const MenuSideBar = ({handleMenuSidebar}: MenuSidebarButton) => {

    return (
      <div className='menu-sidebar'>
        <div className='menu-sidebar-container' >
          <div className='menu-sidebar-close' onClick={handleMenuSidebar}>
              <FaTimes />
          </div>
          <div className='menu-sidebar-list'>
              <Link
                to={SelectedMenu.Special.toLowerCase()}
                onClick={() => {
                  const specialOption: HTMLElement | null  = document.getElementById('special');
                  specialOption && specialOption.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {SelectedMenu.Special}
              </Link>
              <Link
                to={SelectedMenu.Ramen.toLowerCase()}
                onClick={() => {
                  const ramenOption: HTMLElement | null = document.getElementById('ramen');
                  ramenOption && ramenOption.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {SelectedMenu.Ramen}
              </Link>
              <Link
                to={SelectedMenu.Side.toLowerCase()}
                onClick={() => {
                  const sideOption: HTMLElement | null = document.getElementById('side');
                  sideOption && sideOption.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {SelectedMenu.Side}
              </Link>
              <Link
                to={SelectedMenu.Dessert.toLowerCase()}
                onClick={() => {
                  const dessertOption: HTMLElement | null = document.getElementById('dessert');
                  dessertOption && dessertOption.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {SelectedMenu.Dessert}
              </Link>
              <Link
                to={SelectedMenu.Drink.toLowerCase()}
                onClick={() => {
                  const drinkOption: HTMLElement | null = document.getElementById('drink');
                  drinkOption && drinkOption.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {SelectedMenu.Drink}
              </Link>
          </div>
          <div onClick={handleMenuSidebar}>
            <Button button="Order Now" />
          </div>
        </div>
      </div>
    )
  }
  
  export default MenuSideBar