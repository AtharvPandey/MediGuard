import { useEffect } from "react";
import "./Modal.css";
const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".shareaddress").value;
    await contract.allow(address);
    setModalOpen(false);
  };
  // Function for disallowing access
  const disallowAccess = async () => {
    const address = document.querySelector(".shareaddress").value;
    await contract.disallow(address);
    setModalOpen(false);
  };
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <>
      <div className="modalBody">
        <div className="modalContainer">
          <div className="title">
            <h2>Share Image</h2>
          </div>
          <div className="inputbody">
            <input
              type="text"
              className="shareaddress"
              placeholder="Enter Doctor Id"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option className="shareaddress">People With Access</option>
            </select>
          </form>
          <div className="footer">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => sharing()}>Share</button>
            <button onClick={() => disallowAccess()}>Disallow</button>{" "}
            {/* Call disallowAccess function */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
