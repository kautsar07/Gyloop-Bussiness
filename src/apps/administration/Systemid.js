import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Button, Col, Dropdown, Nav, Row, Form } from "react-bootstrap";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import { SketchPicker } from "react-color";
import "../../assets/css/react-datepicker.min.css";

import img6 from "../../assets/img/img6.jpg";
import img7 from "../../assets/img/img7.jpg";
import img8 from "../../assets/img/img8.jpg";
import img9 from "../../assets/img/img9.jpg";
import img10 from "../../assets/img/img10.jpg";
import img11 from "../../assets/img/img11.jpg";
import img12 from "../../assets/img/img12.jpg";
import img13 from "../../assets/img/img13.jpg";
import img14 from "../../assets/img/img14.jpg";
import img15 from "../../assets/img/img15.jpg";
import img16 from "../../assets/img/img16.jpg";
import img17 from "../../assets/img/img17.jpg";
import img18 from "../../assets/img/img18.jpg";
import img19 from "../../assets/img/img19.jpg";
import { marker } from "leaflet";

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

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="header-link"
    >
      {children}
    </Link>
  ));

  const chatGroup = [
    {
      unread: true,
      avatar: {
        status: "offline",
        img: img11,
      },
      sender: "Dyanne Aceron",
      time: "10:35am",
      text: "Hi Hello! My name is Dyanne Aceron. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      selected: true,
      avatar: {
        status: "online",
        img: img14,
      },
      sender: "Leo Mendez",
      time: "1d",
      text: "There are many variations of pass. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    },
    {
      unread: true,
      avatar: {
        status: "online",
        img: img15,
      },
      sender: "Meriam Salomon",
      time: "2d",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      avatar: {
        status: "online",
        img: img17,
      },
      sender: "Rolando Paloso",
      time: "2d",
      text: "There are many variations of paserror sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    },
    {
      avatar: {
        status: "offline",
        img: img19,
      },
      sender: "Marianne Audrey",
      time: "5d",
      text: "Hi Hello! There are many variations ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    },
    {
      avatar: {
        status: "offline",
        img: img6,
      },
      sender: "Adrian Moniño",
      time: "1w",
      text: "Lorem ipsum is simply dummy text sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
    },
    {
      unread: true,
      avatar: {
        status: "offline",
        img: img7,
      },
      sender: "Andrew Ylaya",
      time: "1w",
      text: "It is a long established fact that aquis autem vel eum iure reprehenderit qui in ea voluptate velit esse",
    },
    {
      avatar: {
        status: "online",
        img: img8,
      },
      sender: "Maricel Villalon",
      time: "2w",
      text: "Hello!, I will be distracted by the requam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    },
    {
      avatar: {
        status: "online",
        img: img10,
      },
      sender: "Warren Vito",
      time: "3w",
      text: "There are many variations of passc up iditate non provident, similique sunt in culpa",
    },
    {
      unread: true,
      avatar: {
        status: "offline",
        img: img11,
      },
      sender: "Lovely Ceballos",
      time: "6w",
      text: "Hello!, I will be distracted by the replaceat facere possimus, omnis voluptas assumenda",
    },
  ];

  const messageGroup = [
    {
      date: "August 20, 2023",
      items: [
        {
          avatar: {
            status: "online",
            img: img16,
          },
          messages: [
            {
              text: "Excepteur sint occaecat cupidatat non proident",
              time: "8:45pm",
            },
            {
              text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
              time: "9:15pm",
            },
          ],
        },
        {
          reverse: true,
          messages: [
            {
              text: "Neque porro quisquam est, qui dolorem ipsum",
              time: "9:20pm",
            },
            {
              text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus",
              time: "9:21pm",
            },
          ],
        },
      ],
    },
    {
      date: "Today",
      items: [
        {
          avatar: {
            status: "online",
            img: img16,
          },
          messages: [
            {
              text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              time: "10:30am",
            },
          ],
        },
        {
          reverse: true,
          messages: [
            {
              text: "Accusantium doloremque laudantium",
              time: "10:40am",
            },
            {
              text: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...",
              time: "10:41am",
            },
          ],
        },
        {
          avatar: {
            status: "online",
            img: img16,
          },
          messages: [
            {
              text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit...",
              time: "10:45am",
            },
            {
              text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
              time: "10:47am",
            },
          ],
        },
      ],
    },
  ];

  const [chatActive, setChatActive] = useState(1);
  const [msgShow, setMsgShow] = useState(false);

  // Toggle chat option in each item
  const navToggle = (e) => {
    e.target.closest(".row").classList.toggle("nav-show");
  };

  const selectSystemType = [
    { value: "Development", label: "Development" },
    { value: "Testing", label: "Testing" },
    { value: "Production", label: "Production" },
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
              {show === "Edit" ? (
                <>
                  <i className="ri-pencil-line"></i>Edit
                </>
              ) : (
                <>
                  <i className="far-glasses" style={{ fontSize: "14px" }}></i>
                  Display
                </>
              )}
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
                  isSearchable={true}
                  placeholder="Server"
                  className=" react-select-custom"
                />
              </div>
            </div>
          </div>
          <div
            className="main-panel-config"
            style={{ height: "82%"}}
          >
            {/* <div className="main-subtitle" >
                        
                    </div> */}

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
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "flex-end",
              marginRight: 30,
            }}
          >
            <button
              style={{
                background: "#0070d0",
                padding: "5px 10px",
                borderRadius: " 4px",
                color: "white",
                border: "none",
                width: 70,
              }}
            >
              Save
            </button>
            <button
              style={{
                background: "#eb305a",
                padding: "5px 10px",
                borderRadius: " 4px",
                color: "white",
                border: "none",
                width: 70,
              }}
            >
              Discard
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
}
