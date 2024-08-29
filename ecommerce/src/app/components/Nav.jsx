// components/Nav.js
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="top-nav">
        <div className="top-left">
          <div className="language">
            <img src="/USA.svg" alt="Language" />
            <span>USD</span>
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
        <div className="top-center">
          <span className="nav-logo">ECOMUS</span>
        </div>
        <div className="top-right">
          <i className="bi bi-search"></i>
          <i className="bi bi-person"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-bag-dash"></i>
        </div>
      </div>
      <div className="down-nav">
        <ul>
          <div>
            <li>
              <Link href="/">Home</Link>
            </li>
            <i className="bi bi-chevron-down"></i>
          </div>
          <div>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <i className="bi bi-chevron-down"></i>
          </div>
          <div>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <i className="bi bi-chevron-down"></i>
          </div>
          <div>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
            <i className="bi bi-chevron-down"></i>
          </div>
          <div>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <i className="bi bi-chevron-down"></i>
          </div>
          <div>
            <li>
              <Link href="/buy-now">Buy now</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
