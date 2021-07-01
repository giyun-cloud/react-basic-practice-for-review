import { moviesApi, tvShowApi } from "api";
import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
class SearchContainer extends Component {
  state = {
    movieResults: null,
    tvShowResults: null,
    searchStr: "",
    error: null,
    loading: false,
  };

  handleSubmit = () => {
    const { searchStr } = this.state;
    if (searchStr !== "") return this.searchByStr();
  };
  searchByStr = async () => {
    const { searchStr } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchStr);
      const {
        data: { results: tvShowResults },
      } = await tvShowApi.search(searchStr);
      this.setState({ movieResults, tvShowResults });
    } catch (error) {
      this.setState({ error: "Error :" + error });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvShowResults, searchStr, error, loading } =
      this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvShowResults={tvShowResults}
        searchStr={searchStr}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
export default SearchContainer;
