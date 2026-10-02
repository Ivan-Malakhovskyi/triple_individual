import { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";

export class SearchForm extends Component {
  state = {
    articleName: "",
  };

  handleNameChange = e => {
    this.setState({
      articleName: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.articleName.trim() === "") {
      alert("Введіть назву статті");
      return;
    }

    this.props.onSubmit(this.state.articleName);
    this.setState({ articleName: "" });
  };

  render() {
    const { articleName } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="articleName"
          value={articleName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <FaSearch /> Search
        </button>
      </form>
    );
  }
}
