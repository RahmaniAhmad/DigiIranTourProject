"use client";
import { useState } from "react";

const Page = () => {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);
    const response = await fetch("http://localhost:3001/image", {
      method: "POST",
      body: formData,
    });
    if (response) setStatus(response.statusText);
  };

  const handleFileChange = (e: any) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  return (
    <div className="App">
      <h1>Upload to server</h1>
      <img src={image.preview} width="100" height="100" />
      <img src="http://localhost:3001/images/1707808600631.jpg" />

      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  );
};
export default Page;
