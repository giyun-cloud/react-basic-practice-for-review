import { moviesApi, tvShowApi } from "api";
import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
class DetailContainer extends Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMoive: pathname.includes("/movie/"),
    };
  }
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { isMoive } = this.state;
    let result;
    try {
      if (isMoive) ({ data: result } = await moviesApi.detail(id));
      else ({ data: result } = await tvShowApi.detail(id));
    } catch (error) {
      this.setState({
        error: "Error :" + error,
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }
  render() {
    console.log(this.state);
    return <DetailPresenter />;
  }
}
export default DetailContainer;
