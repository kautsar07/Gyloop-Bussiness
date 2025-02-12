import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Button, Col, Dropdown, Nav, Row, Form, Table } from "react-bootstrap";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import { SketchPicker } from "react-color";
import "../../assets/css/react-datepicker.min.css";


import { dataTableSystemId } from "../../data/apps/administration/org-system/system-id";

export default function Systemid() {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [show, setShow] = useState("Display");

  useEffect(() => {
    document.body.classList.add("page-app");
    return () => {
      document.body.classList.remove("page-app");
    };
  }, []);
  

  const [chatActive, setChatActive] = useState(1);
  const [msgShow, setMsgShow] = useState(false);

  // Toggle chat option in each item
  const navToggle = (e) => {
    e.target.closest(".row").classList.toggle("nav-show");
  };

  const dataTable = dataTableSystemId;

  const selectSystemType = [
    {
      value: "Development",
      label: (
        <>
          <i className=" far-server" style={{ marginRight: 5 }}></i>Development
        </>
      ),
    },
    {
      value: "Testing",
      label: (
        <>
          <i className=" far-server" style={{ marginRight: 5 }}></i>Testing
        </>
      ),
    },
    {
      value: "Production",
      label: (
        <>
          <i className=" far-server" style={{ marginRight: 5 }}></i>Production
        </>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Administration</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Org. Systems</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                System ID
              </li>
            </ol>
            <h4 className="main-title mb-0">Display System ID Configuration</h4>
          </div>
          <div className="d-flex gap-2 mt-3 mt-md-0">
            <Button
              onClick={() =>
                show === "Display" ? setShow("Edit") : setShow("Display")
              }
              variant=""
              className="btn-white d-flex align-items-center gap-2"
            >
              <i
                className={` ${
                  show === "Edit" ? "fars-pen-to-square" : "far-glasses"
                }`}
                style={{ fontSize: 14 }}
              ></i>
              Change
            </Button>
            <Button
              variant=""
              className="btn-white d-flex align-items-center gap-2"
            >
              <i className="ri-printer-line fs-18 lh-1"></i>Logs
            </Button>
            <Button
              variant=""
              className="btn-white d-flex align-items-center gap-2"
            >
              <i className="ri-share-line fs-18 lh-1"></i>Documentation
            </Button>

            {/* <Button variant="primary" className="d-flex align-items-center gap-2">
                    <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Generate<span className="d-none d-sm-inline"> Report</span>
                </Button> */}
          </div>
        </div>

        <div className={"chat-panel" + (msgShow ? " msg-show" : "")}>
          <div
            class="sidebar-header"
            style={{ alignItems: "center", display: "flex" }}
          >
            {/* <div class="chat-item-body" style={{alignItems: "center",  display: "flex", position:"fixed"}}> */}
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <p className="fw-normal" style={{ marginBottom: 0 }}>
                  Last update: 24 Mar 2024, 18:45
                </p>
              </div>
              <div style={{ width: 200 }}>
                <Select
                  id="option1"
                  options={selectSystemType}
                  isSearchable={false}
                  placeholder={
                    <>
                      <i className=" far-server" style={{ marginRight: 5 }}></i>
                      Server
                    </>
                  }
                  className=" react-select-custom"
                />
              </div>
            </div>
          </div>
          <div className="main-panel-config">
            <div style={{ marginTop: 10, padding: 0 }}>
              <Row className=" Row-SystemId">
                <Col sm="6">
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="System ID"
                    >
                      System ID
                    </Form.Label>
                    <Form.Control
                      required
                      id="id_sytm"
                      type="text"
                      placeholder="Generated Number from the Systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={dataTableSystemId[0].id_sytm}
                    />
                  </div>

                  <div className="mb-4">
                    <Form.Label className="form-label-custom">
                      System Type
                    </Form.Label>
                    <Select
                      id="type_sytm"
                      options={selectSystemType}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className=" react-select-custom"
                      defaultValue={[{value:dataTableSystemId[1].type_sytm, label:dataTableSystemId[0].type_sytm}]}
                    />
                  </div>

                  <div className="mb-4">
                    <Form.Label className="form-label-custom">
                      System Type
                    </Form.Label>
                    <Col sm="6">
                      <ReactDatePicker
                        selected={startDate2}
                        onChange={(date) => setStartDate2(date)}
                        className="form-control"
                        disabled={show === "Edit" ? false : true}
                      />
                    </Col>
                  </div>

                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Created By"
                    >
                      Created By
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        id="crdt_by"
                        className="mb-2"
                        type="text"
                        placeholder="Created By"
                        disabled={show === "Edit" ? false : true}
                        defaultValue={dataTableSystemId[0].crdt_by}
                      />
                    </Col>
                  </div>
                </Col>

                <Col sm="6">
                  <div className="mb-1">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="System URL"
                    >
                      System URL
                    </Form.Label>
                    <Form.Control
                      id="urll_sytm"
                      // className="mb-2"
                      type="text"
                      placeholder="System URL"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={dataTableSystemId[0].urll_sytm}
                    />
                  </div>
                </Col>
                {/* <Col sm>
                            <Form.Control type="text" placeholder="State" aria-label="State" />
                        </Col>
                        <Col sm>
                            <Form.Control type="text" placeholder="Zip" aria-label="Zip" />
                        </Col> */}
              </Row>
            </div>

            {/*                     
                    <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                    </Form.Group>

                    <Row className="g-2">
                    <Col sm="7">
                        <Form.Control type="text" placeholder="City" aria-label="City" />
                    </Col>
                    <Col sm>
                        <Form.Control type="text" placeholder="State" aria-label="State" />
                    </Col>
                    <Col sm>
                        <Form.Control type="text" placeholder="Zip" aria-label="Zip" />
                    </Col>
                    </Row> */}
          </div>
          <div className="custom-table">
            <Table className="mb-0">
              <thead>
                <tr>
                  <th scope="col" style={{width: '200px'}}>System ID</th>
                  <th scope="col" style={{width: '200px'}}>System Type</th>
                  <th scope="col" style={{width: '200px'}}>System Type Date</th>
                  <th scope="col" style={{width: '200px'}}>Created By</th>
                  <th scope="col" style={{width: '200px'}}>Sytem URL</th>
                </tr>
              </thead>
              <tbody>
                {dataTableSystemId.map((item, i) => (
                  <tr key={i}>
                    <th scope="row"> <div style={{width:200}}>{item.id_sytm}</div></th>
                    <td><div style={{width:200}}>{item.type_sytm}</div></td>
                    <td><div style={{width:200}}>{item.crdt_at}</div></td>
                    <td><div style={{width:200}}>{item.crdt_by}</div></td>
                    <td><div style={{width:200}}>{item.urll_sytm}</div></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div style={{ paddingBottom: 70 }}>
          <Footer />
        </div>
      </div>
      <div className=" button-action">
        <Button variant="" className="btn-primary ">
          Save
        </Button>
        <Button variant="" className="btn-danger ">
          Discard
        </Button>
      </div>
    </React.Fragment>
  );
}
