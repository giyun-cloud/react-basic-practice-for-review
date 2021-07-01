import { tvShowApi } from "api";
import React, { Component } from "react";
import TVPresenter from "./TVPresenter";
class TVContainer extends Component {
  state = {
    topRated: null,
    airingToday: null,
    popular: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvShowApi.topRated();
      const {
        data: { results: airingToday },
      } = await tvShowApi.airingToday();
      const {
        data: { results: popular },
      } = await tvShowApi.popular();
      this.setState({
        topRated,
        airingToday,
        popular,
      });
    } catch (error) {
      this.setState({
        error: "Error :" + error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { topRated, airingToday, popular, error, loading } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
export default TVContainer;
