import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const TestDaniel = (props) => {
  const [list, setList] = useState([
    {
      username: "Daniel",
      theme: "Test",
      image: "user_image",
    },
    {
      username: "Daniel",
      theme: "Test",
      image: "user_image",
    },
    {
      username: "Daniel",
      theme: "Test",
      image: "user_image",
    },
    {
      username: "Daniel",
      theme: "Test",
      image: "user_image",
    },
  ]);

  useEffect(() => {
    const fechtData = async () => {
      const result = await fetch("http://localhost:5000/list_facturas", {
        mode: "no-cors",
      })
        .then((response) => response.json())
        .then((data) => data);
      //console.log(result);
      //setList(list);
    };

    fechtData();
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Basic Tables" />

          <Row>
            <Col md={6}>
              <Card>
                <CardBody>
                  <CardTitle>Basic example</CardTitle>
                  <CardSubtitle className="mb-3">
                    For basic styling—light padding and only horizontal
                    dividers—add the base className <code>.table</code> to any
                    <code>&lt;table&gt;</code>.
                  </CardSubtitle>

                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">1</th>
                              <td>{item.username}</td>
                              <td>{item.theme}</td>
                              <td>{item.image}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(TestDaniel);
