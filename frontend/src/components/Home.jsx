import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Quack from "./Quack";
import Feed from "./Feed";
import ContentContainer from "./ContentContainer";
//import Alucard from "../alucard.jpg";

const style = {
  height: "220px",
  backgroundColor: "white"
};

class Home extends Component {
  render() {
    const Feedli = (
      <Feed text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptatum, doloribus adipisci ea facilis reprehenderit, nemo eligendi dolor excepturi minus numquam voluptates enim explicabo assumenda molestiae! Tenetur eaque molestias, aliquid fuga perferendis totam, deleniti perspiciatis, soluta aspernatur quibusdam harum. Iste veritatis saepe quibusdam. Nesciunt nostrum quo eos sint, aspernatur tempore rerum quod illo deserunt consectetur, itaque accusantium exercitationem temporibus sequi maiores asperiores obcaecati quae dolores at! Ad at, porro pariatur doloremque laborum illum facilis exercitationem ipsa, earum doloribus, dicta debitis iusto quam cum voluptate. Reiciendis sed suscipit, deserunt optio consectetur numquam eum sapiente ut accusamus dignissimos, atque, voluptatem soluta. Quod." />
    );
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(Feedli);
    }
    return (
      <ContentContainer
        style={style}
        left={() => <Dashboard />}
        center={() => (
          <div>
            <Quack expandable={true} />
            {arr.map((feed, idx) => (
              <div key={idx} type="flex" align="flex-end">
                {feed}
              </div>
            ))}
          </div>
        )}
        right={() => null}
      />
    );
  }
}

export default Home;
