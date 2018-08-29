import React, { Component } from "react";
import { Col, Row } from "antd";
import Dashboard from "./Dashboard";
import Quack from "./Quack";
import Feed from "./Feed";

class Home extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "250px",
      backgroundColor: "white"
    };
    const Feedli = (
      <Col>
        <Feed text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptatum, doloribus adipisci ea facilis reprehenderit, nemo eligendi dolor excepturi minus numquam voluptates enim explicabo assumenda molestiae! Tenetur eaque molestias, aliquid fuga perferendis totam, deleniti perspiciatis, soluta aspernatur quibusdam harum. Iste veritatis saepe quibusdam. Nesciunt nostrum quo eos sint, aspernatur tempore rerum quod illo deserunt consectetur, itaque accusantium exercitationem temporibus sequi maiores asperiores obcaecati quae dolores at! Ad at, porro pariatur doloremque laborum illum facilis exercitationem ipsa, earum doloribus, dicta debitis iusto quam cum voluptate. Reiciendis sed suscipit, deserunt optio consectetur numquam eum sapiente ut accusamus dignissimos, atque, voluptatem soluta. Quod." />
      </Col>
    );
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(Feedli);
    }
    return (
      <Row type="flex" align="top" justify="space-between">
        <Col xs={{ span: 9 }} lg={{ span: 6 }}>
          <Row>
            <Col span={24} order={1} style={style}>
              <Dashboard />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 0 }} order={2} style={style} />
          </Row>
        </Col>
        <Col xs={{ span: 15 }} lg={{ span: 11 }} order={2}>
          <Quack expandable={true} />
          {arr.map((feed, idx) => (
            <div key={idx} type="flex" align="flex-end">
              {feed}
            </div>
          ))}
        </Col>
        <Col xs={{ span: 0 }} lg={{ span: 6 }} style={style} order={3} />
      </Row>
    );
  }
}

export default Home;
