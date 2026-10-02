import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { SearchForm } from "./components/SearchForm";
import { Articles } from "./components/Articles";

export class App extends Component {
  state = {
    articleName: "",
    isLoading: false,
    error: null,
  };

  handleSubmit = articleName => {
    this.setState({ articleName });
  };

  render() {
    const { articleName } = this.state;

    return (
      <section>
        <h1>Http request</h1>

        <SearchForm onSubmit={this.handleSubmit} />
        <Articles articleName={articleName} />

        <ToastContainer autoClose={3000} />
      </section>
    );
  }
}
