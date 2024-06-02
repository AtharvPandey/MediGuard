import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";
import { BsUpload } from "react-icons/bs";
import { MdFileDownloadDone } from "react-icons/md";
const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `0267480b51396b166dbe`,
            pinata_secret_api_key: `5b70febb58a3445d81179fe5d45b2e93144552096d29bbc41f9f1ffd3948f19c`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account, ImgHash);
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    // alert("Successfully Image Uploaded");
    // setFileName("No image selected");
    // setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <div className="choose">
          <BsUpload />
          <label htmlFor="file-upload" className="choose--lable">
            Choose Image
          </label>
          <input
            disabled={!account}
            type="file"
            id="file-upload"
            name="data"
            onChange={retrieveFile}
          />
        </div>
        <div>
          <span className="textArea">Image: {fileName}</span>
        </div>

        <div>
          <button type="submit" className="upload" disabled={!file}>
            <MdFileDownloadDone />
            <p>Upload File</p>
          </button>
        </div>
      </form>
    </div>
  );
};
export default FileUpload;
