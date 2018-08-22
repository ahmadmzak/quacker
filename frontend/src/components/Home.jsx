import React, { Component } from "react";
import { Col, Row } from "antd";
import Quack from "./Quack";
import Feed from "./Feed";

class Home extends Component {
  render() {
    return (
      <Row
        type="flex"
        justify="center"
        align="top"
        style={{
          paddingTop: "3.7rem"
        }}
      >
        <Col span={8} />
        <Col span={8}>
          <Quack expandable={true} />
          <Feed text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptatum, doloribus adipisci ea facilis reprehenderit, nemo eligendi dolor excepturi minus numquam voluptates enim explicabo assumenda molestiae! Tenetur eaque molestias, aliquid fuga perferendis totam, deleniti perspiciatis, soluta aspernatur quibusdam harum. Iste veritatis saepe quibusdam. Nesciunt nostrum quo eos sint, aspernatur tempore rerum quod illo deserunt consectetur, itaque accusantium exercitationem temporibus sequi maiores asperiores obcaecati quae dolores at! Ad at, porro pariatur doloremque laborum illum facilis exercitationem ipsa, earum doloribus, dicta debitis iusto quam cum voluptate. Reiciendis sed suscipit, deserunt optio consectetur numquam eum sapiente ut accusamus dignissimos, atque, voluptatem soluta. Quod." />
        </Col>
        <Col span={8} />
      </Row>
    );
    /*return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "1200px",
          paddingTop: "3.7rem",
          margin: "auto"
        }}
      >
        <div
          style={{ width: "26.5%", backgroundColor: "white", height: "100px" }}
        />
        <div style={{ width: "45%" }}>
          <Quack expandable={true} />
          <Feed text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptatum, doloribus adipisci ea facilis reprehenderit, nemo eligendi dolor excepturi minus numquam voluptates enim explicabo assumenda molestiae! Tenetur eaque molestias, aliquid fuga perferendis totam, deleniti perspiciatis, soluta aspernatur quibusdam harum. Iste veritatis saepe quibusdam. Nesciunt nostrum quo eos sint, aspernatur tempore rerum quod illo deserunt consectetur, itaque accusantium exercitationem temporibus sequi maiores asperiores obcaecati quae dolores at! Ad at, porro pariatur doloremque laborum illum facilis exercitationem ipsa, earum doloribus, dicta debitis iusto quam cum voluptate. Reiciendis sed suscipit, deserunt optio consectetur numquam eum sapiente ut accusamus dignissimos, atque, voluptatem soluta. Quod." />
        </div>
        <div
          style={{ width: "26.5%", backgroundColor: "white", height: "100px" }}
        />
      </div>
    );*/
  }
}

export default Home;
