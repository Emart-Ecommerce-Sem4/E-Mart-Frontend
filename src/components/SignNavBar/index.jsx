import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function SignNavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid" style={{ paddingRight: 50 }}>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/aboutus">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contactus">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart">
                <AiOutlineShoppingCart color="#dc3545" size={25} />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">
                <button type="button" class="btn btn-danger btn-sm">
                  SIGNUP
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
