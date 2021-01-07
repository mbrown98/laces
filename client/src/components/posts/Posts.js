import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return <div></div>;
};

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
