import cart from './cart.svg';

const CartLogo = () => {
    return (
        <li className="nav-item">
            <a className="nav-link" href='#' ><img className= "cartLogo" src={cart}></img></a>
        </li>
    )
}
export default CartLogo
