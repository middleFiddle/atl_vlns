import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar bg-light ">
        <div className="container d-flex justify-content-around">
          <div className="w-25 dropdown d-flex justify-content-center">
            <button
              className="btn-sm btn-outline-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hours
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <table className="table">
                  <tbody>
                    <tr className="table-danger">
                      <th scope="row">Monday</th>
                      <td>Closed</td>
                    </tr>
                    <tr className="table-success">
                      <th scope="row">Tuesday</th>
                      <td>11a-6p</td>
                    </tr>
                    <tr className="table-success">
                      <th scope="row">Wednesday</th>
                      <td>11a-6p</td>
                    </tr>
                    <tr className="table-success">
                      <th scope="row">Thursday</th>
                      <td>11a-6p</td>
                    </tr>
                    <tr className="table-info">
                      <th scope="row">Friday</th>
                      <td>
                        11a-<strong>5p</strong>
                      </td>
                    </tr>
                    <tr className="table-warning">
                      <th scope="row">Saturday</th>
                      <td>
                        11a-<strong>3p</strong>
                      </td>
                    </tr>
                    <tr className="table-danger">
                      <th scope="row">Sunday</th>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <a
            className="navbar-brand d-flex justify-content-center mx-auto"
            href="#"
          >
            <Image
              src="/logo.png"
              width={155}
              height={74}
              alt="Atlanta Violins Logo"
            />
          </a>
          <div className="w-25 dropdown d-flex justify-content-center">
            <button
              className="btn-sm btn-outline-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="parent"
            >
              Contact
            </button>
            <div
              id="dropdown-right"
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton2"
            >
              <div className="dropdown-item">Call</div>
              <div className="dropdown-item">Text</div>
              <div className="dropdown-item">Email</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
