import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Button, Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import userAvatar from "../../assets/img/img1.jpg";
import { Link } from "react-router-dom";
import { dataTableSystemId } from "../../data/apps/administration/org-system/system-id";

export default function Salesproducts() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="dropdown-link"
    >
      {children}
    </Link>
  ));
  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4">
        <div className="chat-panel">
          <div className="custom-table">
            <div className="header-table-custom">
              <h6 style={{ fontWeight: "500", fontSize: "16px", margin:0 }}>
                  Showing <span style={{ fontWeight: "bold"}}> {dataTableSystemId.length} </span> to <span style={{ fontWeight: "bold"}}> {dataTableSystemId.length} </span> of <span style={{ fontWeight: "bold"}}> {dataTableSystemId.length} </span> results
              </h6>
              <div style={{ display: "flex", gap: 8 }}>
                <Button
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-filter"></i>
                </Button>
                <Button
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-sort-amount-up"></i>
                </Button>
                <Button
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-layer-group"></i>
                </Button>
                <Button
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-color-palette"></i>
                </Button>
                <Button
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-cloud-arrow-down"></i>
                </Button>
                {/* <Dropdown className="dropdown-company" align="end">
                  <Dropdown.Toggle as={CustomToggle}>
                    <div className="avatar online">
                      <img src={userAvatar} alt="" />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mt-10-f">
                    <div className="dropdown-menu-body">
                      <div className="avatar avatar-xl online mb-3">
                        <img src={userAvatar} alt="" />
                      </div>
                      <h5 className="mb-1 text-dark fw-semibold">John Doe</h5>
                      <p className="fs-sm text-secondary">
                        Sales Administrator
                      </p>

                      <nav className="nav">
                        <Link to="">
                          <i className="ri-profile-line"></i> View Profile
                        </Link>
                      </nav>
                      <hr />
                      <nav className="nav">
                        <Link to="">
                          <i className="ri-question-line"></i> Help Center
                        </Link>
                        <Link to="">
                          <i className="ri-user-settings-line"></i> Account
                          Settings
                        </Link>
                        <Link to="/pages/signin">
                          <i className="ri-logout-box-r-line"></i> Log Out
                        </Link>
                      </nav>
                    </div>
                  </Dropdown.Menu>
                </Dropdown> */}
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    style={{ paddingRight: 30, height: "100%" }}
                  />
                  <i
                    className="ri-search-line"
                    style={{ position: "absolute", right: 10, top: "23%" }}
                  ></i>
                </div>
              </div>
            </div>
            <Table responsive className="mb-0">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "200px" }}>
                    System ID
                  </th>
                  <th scope="col" style={{ width: "200px" }}>
                    System Type
                  </th>
                  <th scope="col" style={{ width: "200px" }}>
                    System Type Date
                  </th>
                  <th scope="col" style={{ width: "200px" }}>
                    Created By
                  </th>
                  <th scope="col" style={{ width: "200px" }}>
                    Sytem URL
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataTableSystemId.map((item, i) => (
                  <tr key={i}>
                    <th scope="row">
                      {" "}
                      <div style={{ width: 200 }}>{item.id_sytm}</div>
                    </th>
                    <td>
                      <div style={{ width: 200 }}>{item.type_sytm}</div>
                    </td>
                    <td>
                      <div style={{ width: 200 }}>{item.crdt_at}</div>
                    </td>
                    <td>
                      <div style={{ width: 200 }}>{item.crdt_by}</div>
                    </td>
                    <td>
                      <div style={{ width: 200 }}>{item.urll_sytm}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
