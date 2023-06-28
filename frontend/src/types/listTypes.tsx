export enum SelectedMenu {
    Special = "Special",
    Ramen = "Ramen",
    Side = "Side",
    Dessert = "Dessert",
    Drink = "Drink"
}

export interface ProductDataType {
    id: number,
    attributes: {
        name: string,
        desc: string,
        price: number,
        img: any,
        altImg?: string,
        title?: string,
        category: string
    }
}

export interface ProductProps {
    id: string,
    heading: string
}

export interface TitleProps {
    heading: string
}

export interface ProductCardProps {
    data: ProductDataType,
    id: number,
    prodCategory: string
}
  
export interface ButtonProps {
    button: string
}

export interface TypeState {
    cartItems: CartItem[],
    totalQuantity: number,
    totalAmount: number
}

export interface CartItem {
    id: number,
    name: string,
    img: string,
    price: number,
    quantity: number,
    totalPrice: number
}

export interface RootState {
    cart: any,
    isOn: boolean
}

export interface NavbarButton {
    handleCartSidebar: React.MouseEventHandler<HTMLDivElement>,
    handleMenuSidebar: React.MouseEventHandler<HTMLDivElement>
}

export interface CartSidebarButton {
    handleCartSidebar: React.MouseEventHandler<HTMLDivElement>
}

export interface MenuSidebarButton {
    handleMenuSidebar: React.MouseEventHandler<HTMLDivElement>
}