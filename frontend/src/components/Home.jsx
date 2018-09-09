import React, { Component } from "react";
import { UserContext } from "./contexts";
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
  constructor(props) {
    super(props);
    this.state = {
      feed: []
    };
  }
  componentDidMount() {
    //this.setState(this.props.user.feed);
    console.log(this.props.user);
  }
  renderDashboard = user => <Dashboard user={user} />;
  likeHandler = postId => () => {
    console.log("like!", postId);
    console.log(this.state.feed);
    //this.setState({ feed: feed.map(post => post.id === postId ?
    //  [...post, post.liked: !post.liked]
    //  : post) });
    /*await fetch("http://localhost:3001/posts/postId", {
      method: "POST",
      body: this.state.user
    });*/
  };
  requackHandler = () => console.log("requack!");
  render() {
    /*const Feedli = (
      <Feed text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptatum, doloribus adipisci ea facilis reprehenderit, nemo eligendi dolor excepturi minus numquam voluptates enim explicabo assumenda molestiae! Tenetur eaque molestias, aliquid fuga perferendis totam, deleniti perspiciatis, soluta aspernatur quibusdam harum. Iste veritatis saepe quibusdam. Nesciunt nostrum quo eos sint, aspernatur tempore rerum quod illo deserunt consectetur, itaque accusantium exercitationem temporibus sequi maiores asperiores obcaecati quae dolores at! Ad at, porro pariatur doloremque laborum illum facilis exercitationem ipsa, earum doloribus, dicta debitis iusto quam cum voluptate. Reiciendis sed suscipit, deserunt optio consectetur numquam eum sapiente ut accusamus dignissimos, atque, voluptatem soluta. Quod." />
    );
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(Feedli);
    }*/
    return (
      <ContentContainer
        left={this.renderDashboard}
        center={() => (
          <div>
            <Quack expandable={true} />
            <UserContext.Consumer>
              {user =>
                user &&
                user.feed &&
                user.feed.map((feed, idx) => (
                  <div key={idx} type="flex" align="flex-end">
                    <Feed
                      {...feed}
                      likeHandler={this.likeHandler(feed.id)}
                      requackHandler={this.requackHandler}
                    />
                  </div>
                ))
              }
            </UserContext.Consumer>
          </div>
        )}
        right={() => <div style={style} />}
      />
    );
  }
}

export default Home;
