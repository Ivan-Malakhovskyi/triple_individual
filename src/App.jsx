import React, { Component } from "react";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { Articles } from "./components/Articles/Articles";
import { Layout } from "./components/Layout/Layout";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import { colorPickerOptions } from "./components/constants/colors";

export class App extends Component {
  state = {
    articleName: "",
  };

  handleSubmit = articleName => {
    this.setState({ articleName });
  };

  render() {
    const { articleName } = this.state;

    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>Home</h1>} />
            <Route
              path="colorpicker"
              element={<ColorPicker options={colorPickerOptions} />}
            />
            <Route
              path="form"
              element={
                <section>
                  <h1>Http request</h1>

                  <SearchForm onSubmit={this.handleSubmit} />
                  <Articles articleName={articleName} />
                </section>
              }
            />
          </Route>
        </Routes>
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
