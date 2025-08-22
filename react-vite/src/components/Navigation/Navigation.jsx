///// ---- OG CODE       -------------- ///



// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import ProfileButton from "./ProfileButton";
// import "./Navigation.css";

// function Navigation() {
//   const sessionUser = useSelector((state) => state.session.user);

//   return (
//     <ul className="nav-list">
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>

//       {sessionUser && (
//         <>
//           <li className="create-product-link">
//             <NavLink to="/products/new">Create Product</NavLink>
//           </li>
//           <li className="manage-product-link">
//             <NavLink to="/products/manage">Manage Products</NavLink>
//           </li>
//         </>
//       )}

//       <li>
//         <ProfileButton />
//       </li>
//     </ul>
//   );
// }

// export default Navigation;



import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const cart = useSelector((state) => state.cart); // get cart items
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0); // total items

  return (
    <ul className="nav-list">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {sessionUser && (
        <>
          <li className="create-product-link">
            <NavLink to="/products/new">Create Product</NavLink>
          </li>
          <li className="manage-product-link">
            <NavLink to="/products/manage">Manage Products</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/cart">
          Cart {cartCount > 0 && <span>({cartCount})</span>}
        </NavLink>
      </li>

      <li>
        <ProfileButton />
      </li>
    </ul>
  );
}

export default Navigation;