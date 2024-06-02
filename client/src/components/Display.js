import { useState } from "react";
import "./Display.css";
import { FaGetPocket } from "react-icons/fa";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank" rel="noopener noreferrer">
            <img
              key={i}
              src={`https://${item.substring(6)}`}
              alt="view on pinata"
              className="image-list"
            />
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <>
      <div className="getdata">
        <input
          type="text"
          placeholder="Enter Doctor Id"
          className="address"
        ></input>
        <button className="center button" onClick={getdata}>
          <FaGetPocket />
          <p>Get Data</p>
        </button>
      </div>

      <div className="image-list">{data}</div>
    </>
  );
};
export default Display;

// import { useState } from "react";
// import axios from "axios";
// import CryptoJS from "crypto-js";

// const Display = ({ contract, account }) => {
//   const [data, setData] = useState("");

//   const decryptFile = (encryptedData) => {
//     try {
//       const decryptedBytes = CryptoJS.AES.decrypt(
//         encryptedData,
//         "secretKey"
//       );
//       const decryptedData = decryptedBytes.toString(CryptoJS.enc.Latin1);
//       return decryptedData;
//     } catch (error) {
//       console.error("Error decrypting file:", error);
//       return null;
//     }
//   };

//   const getdata = async () => {
//     let dataArray;
//     const Otheraddress = document.querySelector(".address").value;
//     try {
//       if (Otheraddress) {
//         dataArray = await contract.display(Otheraddress);
//       } else {
//         dataArray = await contract.display(account);
//       }
//     } catch (e) {
//       alert("You don't have access");
//       return;
//     }

//     const isEmpty = Object.keys(dataArray).length === 0;

//     if (!isEmpty) {
//       const decryptedFiles = dataArray.map((encryptedData, i) => {
//         const decryptedData = decryptFile(encryptedData);
//         if (decryptedData) {
//           return (
//             <img
//               key={i}
//               src={decryptedData} // Assuming decryptedData is a base64 encoded image
//               alt={`Image ${i}`}
//               className="image-list"
//             />
//           );
//         } else {
//           return null; // Skip rendering if decryption fails
//         }
//       });

//       setData(decryptedFiles);
//     } else {
//       alert("No image to display");
//     }
//   };

//   return (
//     <>
//       <div className="image-list">{data}</div>
//       <input
//         type="text"
//         placeholder="Enter Address"
//         className="address"
//       ></input>
//       <button className="center button" onClick={getdata}>
//         Get Data
//       </button>
//     </>
//   );
// };

// export default Display;
