import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CallToAction from './CallToAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMessage, faPaperPlane, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MapModal from './mapModal'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container d-flex justify-content-around">
          <div className="w-25 dropdown d-flex justify-content-center ">
            <button
              className="btn btn-sm btn-outline-dark dropdown-toggle lead"
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
          <div className="w-25 dropdown d-flex justify-content-center">
            <button
              className="btn btn-sm btn-outline-dark dropdown-toggle lead"
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
              className="dropdown-menu "
              aria-labelledby="dropdownMenuButton2"
            >
              <div className="dropdown-item d-flex">
                <CallToAction action="Call" href="tel:770-642-8111" >
                  <FontAwesomeIcon icon={faPhone} />
                </CallToAction>
              </div>
              <div className="dropdown-item d-flex ">
                <CallToAction action="Text" href="sms:7707389682">
                  <FontAwesomeIcon icon={faMessage} />
                </CallToAction>
              </div>
              <div className="dropdown-item d-flex ">
                <CallToAction action="Email" href="mailto:info@atlantaviolins.com">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </CallToAction>
              </div>
              <div className="dropdown-item d-flex ">
                <MapModal />
              </div>


            </div>
          </div>
        </div>
      </nav>
    </header >
  )
}

export default Navbar
