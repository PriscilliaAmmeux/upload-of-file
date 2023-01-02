import { useRef } from "react";
import axios from "axios";

export default function Form() {
  const inputRef = useRef();
  const hSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);
    axios.post("http://localhost:5000/api/avatar", formData);
  };
  return (
    <>
      <h1>Add Avatar</h1>
      <form encType="multipart/from-data" onSubmit={hSubmit}>
        <label htmlFor="fileInput">
          Your avatar picture:
          <input type="file" name="monfichier" ref={inputRef} />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}
