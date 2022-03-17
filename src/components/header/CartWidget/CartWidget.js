import cart from './cart.svg';

const CartWidget = () => {
    return (
        <li className="nav-item">
            <a className="nav-link" href='#Cart' ><img className= "cartLogo" src={cart}></img></a>
        </li>
    )
}
export default CartWidget
