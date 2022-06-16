import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
                      <td>
                        11a-<em>6p</em>
                      </td>
                    </tr>
                    <tr className="table-success">
                      <th scope="row">Wednesday</th>
                      <td>
                        11a-<em>6p</em>
                      </td>
                    </tr>
                    <tr className="table-success">
                      <th scope="row">Thursday</th>
                      <td>
                        11a-<em>6p</em>
                      </td>
                    </tr>
                    <tr className="table-info">
                      <th scope="row">Friday</th>
                      <td>
                        11a-
                        <strong>5p</strong>
                      </td>
                    </tr>
                    <tr className="table-warning">
                      <th scope="row">Saturday</th>
                      <td>
                        11a-
                        <strong>3p</strong>
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

          <Link href="/">
            <a className="navbar-brand d-inline-flex justify-content-center mx-auto w-25">
              <Image
                src="/logo.png"
                width={311}
                height={129}
                alt="Atlanta Violins Logo"
              />
            </a>
          </Link>
          <div className=" dropdown d-flex justify-content-center">
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
              <button className="dropdown-item">
                <a href="tel:7706428111">Call</a>
              </button>
              <button className="dropdown-item">
                <a href="sms:7707389682">Text</a>
              </button>
              <button className="dropdown-item">
                <a href="mailto:info@atlantaviolins.com">Email</a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
