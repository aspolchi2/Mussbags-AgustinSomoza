import cart from './cart.svg';

const CartLogo = () => {
    return (
        <li className="nav-item">
            <a className="nav-link" href='#' ><img src={cart}></img></a>
        </li>
    )
}
export default CartLogo
