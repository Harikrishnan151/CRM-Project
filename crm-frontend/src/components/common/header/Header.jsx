import React from 'react'
import './Header.css'
function Header() {
  return (
    <>
      <div className='container-fluid header-wrapper'>
        <h3>CRM APP</h3>
        <div className='social-media'>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
      </div>
    </>
  )
}

export default Header