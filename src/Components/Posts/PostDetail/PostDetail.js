import React from "react";
import "../../../Design/Posts/PostDetail/PostDetail.scss";
import "../../../Design/Highlight.scss";
import { css } from "@emotion/core";
import { BarLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import PostAuthor from "./PostAuthor";
import LikeBox from "./LikeBox";
import breaks from "remark-breaks";
import Toc from "./Toc";

const api = {
  baseUrl: "https://k-blog0130.herokuapp.com/"
};

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/[!?\s]/g, "-");
  return React.createElement(
    "h" + props.level,
    { id: slug, class: "anchor" },
    props.children
  );
}

class PostDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true
    };
    this.addLike = this.addLike.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getPosts();
  }

  getPosts = () => {
    const id = this.props.match.params.id;
    fetch(`${api.baseUrl}api/v1/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.data,
          loading: false
        });
      });
  };

  addLike = () => {
    const id = this.state.data.id;
    fetch(`${api.baseUrl}en/api/v1/posts/${id}/like`, {
      method: "PUT"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.data
        });
      });
  };

  render() {
    const override = css`
      display: block;
      margin: 0 auto;
    `;
    const id = this.props.match.params.id;
    const main =
      this.state.loading === true ? (
        ""
      ) : (
        <React.Fragment>
          <div className="post-detail-righ-zone">
            <Toc
              content={this.state.data.context}
              postId={this.state.data.id}
            />
          </div>
          <LikeBox
            addLike={this.addLike}
            like={this.state.data.like}
            pageId={id}
          />
          <h1 className="post-detail-title">{this.state.data.title}</h1>
          <ReactMarkdown
            source={this.state.data.context}
            renderers={{
              code: CodeBlock,
              heading: HeadingRenderer
            }}
            plugins={[breaks]}
            className="post-content"
          />
          <span className="page-views">
            {this.state.data.page_views} Page Views
          </span>
          <PostAuthor />
        </React.Fragment>
      );
    return (
      <div className="post-container">
        <BarLoader
          css={override}
          sizeUnit={"px"}
          size={80}
          color={"#F0F0F0"}
          loading={this.state.loading}
        />
        {main}
      </div>
    );
  }
}

export default PostDetail;
