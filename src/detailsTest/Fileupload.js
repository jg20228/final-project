import React, { Component } from "react";

class Fileupload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      previewURL: "",
    };
  }

  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  render() {
    let profile_preview = null;
    if (this.state.file !== "") {
      profile_preview = (
        <img className="profile_preview" src={this.state.previewURL}></img>
      );
    }
    return (
      <div>
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          name="profile_img"
          onChange={this.handleFileOnChange}
        ></input>
      </div>
    );
  }
}

export default Fileupload;
