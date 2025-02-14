// Tables: system.config

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Button, Col, Dropdown, Nav, Row, Form, Table } from "react-bootstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { SketchPicker } from "react-color";
import "../../assets/css/react-datepicker.min.css";
import { createRoot } from "react-dom/client";

import {
  systemid_config,
  dataTableSystemId,
  dataTableSystemIdGrid,

} from "../../data/administration/DataSystemid";
import { Grid } from "gridjs-react";

export default function Systemid() {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [show, setShow] = useState("Display");

  const renderAction = ()=>{
    const targetElement = document.querySelector(".gridjs-search");

    if (targetElement && !document.getElementById("excel-container")) {
      const newElement = document.createElement("div");
      newElement.id = "excel-container"; // Beri ID agar tidak duplikat
      targetElement.appendChild(newElement);
  
      const root = createRoot(newElement);
      root.render(<Excel />);
    }
  }

  const mainRender = ()=>{
    document.body.classList.add("page-app");
    return () => {
      document.body.classList.remove("page-app");
    };
  }

  useEffect(() => {
    renderAction()
    mainRender()
  }, [show]);

  const [chatActive, setChatActive] = useState(1);
  const [msgShow, setMsgShow] = useState(false);

  // Toggle chat option in each item
  const navToggle = (e) => {
    e.target.closest(".row").classList.toggle("nav-show");
  };

  // Selection for Deplyment Source
  const selectDeploymentSources = [
    ...new Set(
      systemid_config
        .map(item => item.name_sytm)
        .filter(source => source !== "N/A")
    )
  ].map(source => ({ value: source, label: source }));


  const selectSystemType = [
    {
      value: "Development",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Development
        </>
      ),
    },
    {
      value: "Testing",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Testing
        </>
      ),
    },
    {
      value: "Training",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Testing
        </>
      ),
    },
    {
      value: "Production",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Production
        </>
      ),
    },
  ];

  const selectBoolean = [
    {
      value: "Yes",
      label: (
        <>
          Yes
        </>
      ),
    },
    {
      value: "No",
      label: (
        <>
          No
        </>
      ),
    },
    
  ];

  const Excel = () => {
    return (
      <Button id="excel-container" variant="" className="btn-white d-flex align-items-center gap-2">
        <i className="far-file-spreadsheet"></i>
      </Button>
    );
  };

  useEffect(() => {
   
  }, []);
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
            <h4 className="main-title mb-0">
              {show === "Edit" ? "Edit" : "Display"} System ID Configuration
            </h4>
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
                  show === "Edit" ? "fars-glasses" : "fars-pen-to-square"
                }`}
                style={{ fontSize: 14 }}
              ></i>
              {show === "Edit" ? "Display" : "Change"}
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
                  className=" react-select-server"
                />
              </div>
            </div>
          </div>
          <div className="main-panel-config">
            <div style={{ marginTop: 10, padding: 0 }}>
              <Row className=" Row-SystemId">
                {/* //Coumn 1 */}
                <Col>
                  {/* // System ID */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="System ID"
                    >
                      System ID
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_systm"
                      type="text"
                      placeholder="Generated number from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={systemid_config[0].idno_systm}
                    />
                  </div>

                  {/* // System Type */}
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
                      defaultValue={[
                        {
                          value: systemid_config[1].type_sytm,
                          label: systemid_config[0].type_sytm,
                        },
                      ]}
                    />
                  </div>

                  {/* // System Name */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="System Name"
                    >
                      System Name
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Form.Control
                        required
                        id="name_sytm"
                        type="text"
                        placeholder="Please input System Name"
                        disabled={show === "Edit" ? false : true}
                        defaultValue={systemid_config[0].name_sytm}
                      />
                    </Col>
                  </div>


                   {/* // System URL */}
                   <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="System URL"
                    >
                      System URL
                    </Form.Label>
                    <Form.Control
                      required
                      id="addr_sytm"
                      type="text"
                      placeholder="Generated URL from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={systemid_config[0].addr_sytm}
                    />
                  </div>

                  {/* // System IP */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="System IP"
                    >
                      System IP
                    </Form.Label>
                    <Form.Control
                      required
                      id="ip_sytm"
                      type="text"
                      placeholder="Generated IP from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={systemid_config[0].ip_sytm}
                    />
                  </div>

                  {/* <div className="mb-4">
                    <Form.Label className="form-label-custom">
                      System Type
                    </Form.Label>
                    <Col className="custom-form-control">
                      <DatePicker
                        selected={startDate2}
                        onChange={(date) => setStartDate2(date)}
                        className="form-control"
                        disabled={show === "Edit" ? false : true}
                        dateFormat="dd MMMM yyyy"
                      />
                    </Col>
                  </div> */}
                  
                </Col>

                {/* //Coumn 2 */}     
                <Col>
                  {/* // Is Default System? */}
                  <div className="mb-4">
                    <Form.Label className="form-label-custom">
                    Is Default System?
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Select
                        id="is_deft"
                        options={selectBoolean}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className=" react-select-custom"
                        defaultValue={[
                          {
                            value: systemid_config[1].is_deft,
                            label: systemid_config[0].is_deft,
                          },
                        ]}
                      />
                    </Col>
                  </div>

                  {/* // Is Master Systems? */}
                  <div className="mb-4">
                    <Form.Label className="form-label-custom">
                    Is Master System?
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Select
                        id="is_mstr"
                        options={selectBoolean}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className=" react-select-custom"
                        defaultValue={[
                          {
                            value: systemid_config[1].is_mstr,
                            label: systemid_config[0].is_mstr,
                          },
                        ]}
                      />
                    </Col>
                  </div>      

                   {/* // Deployment Source */}
                   <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Deployment Source Systems"
                    >
                      Deployment Source Systems
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Select
                        id="deployment-select"
                        options={selectDeploymentSources}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className="react-select-custom"
                        defaultValue={{
                          value: systemid_config[1].sorc_depl,
                          label: systemid_config[0].sorc_depl,
                        }}
                      />
                      </Col>
                  </div>

                  {/* // Super Admin ID */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Super Admin ID"
                    >
                      Super Admin ID
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_sadm"
                      type="text"
                      placeholder="Please input Super Admin ID"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={systemid_config[0].idno_sadm}
                    />
                  </div>

                  

                  {/* // Registered Date & Time */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Registered Date"
                    >
                      Registered Date
                    </Form.Label>
                    <Form.Control
                      required
                      id="date_time_regs"
                      type="text"
                      placeholder="Generated date & time from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={`${systemid_config[0].date_regs}, ${systemid_config[0].time_regs}`}
                    />
                  </div>

                </Col>

                {/* //Coumn 3 */}
                <Col>
                  {/* <div className="mb-1">
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
                  </div> */}
                </Col>
                
              </Row>
            </div>

            
          </div>
          <div className="custom-table" style={{ position: "relative" }}>
            <div
              className="header-table-custom"
              style={{ position: "absolute", top: 37 }}
            >
              <h6 style={{ fontWeight: "500", fontSize: "16px", margin: 0 }}>
                Showing <span style={{ fontWeight: "bold" }}>1</span> to{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {dataTableSystemId.length}{" "}
                </span>{" "}
                of{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {dataTableSystemId.length}{" "}
                </span>{" "}
                results
              </h6>
              
            </div>
            <Grid
              data={dataTableSystemIdGrid}
              columns={[
                "System ID",
                "System Type",
                "System Type Date",
                "Created By",
                "Created URL",
              ]}
              search={true}
              pagination={false}
              className={{
                table: "table mb-0",
              }}
            />
            
          </div>
        </div>
        <div style={{ paddingBottom: 60 }}>
          <Footer />
        </div>
      </div>
      <div className=" button-action">
        <Button
          variant=""
          className={`${show === "Edit" ? "btn-primary" : "btn-disable"} `}
        >
          Save
        </Button>
        <Button
          variant=""
          className={`${show === "Edit" ? "btn-danger" : "btn-disable"} `}
        >
          Discard
        </Button>
      </div>
    </React.Fragment>
  );
}
