// import React, { useState } from "react";
// import { encryptFile } from "./CryptoFiles/encrypt";
// import { uploadToPinata } from "./CryptoFiles/pinataUpload";
// import { decryptFile, downloadDecryptedFile } from "./CryptoFiles/decrypt";
// import axios from "axios";

// function App() {
//     const [file, setFile] = useState(null);
//     const [cid, setCID] = useState("");
//     const [key, setKey] = useState("");
//     const [iv, setIV] = useState("");
//     const [decryptedFile, setDecryptedFile] = useState(null);
//     const [fileName, setFileName] = useState("decrypted_file");

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file) return alert("Please select a file");

//         const { encryptedFile, key, iv } = await encryptFile(file);
//         setKey(key);
//         setIV(iv);

//         const cid = await uploadToPinata(encryptedFile);
//         setCID(cid);

//         alert(`File uploaded! CID: ${cid}\nKey: ${key}\nIV: ${iv}`);
//     };

//     const handleDownload = async () => {
//       if (!cid || !key || !iv) return alert("Missing CID, Key, or IV");

//       try {
//           // Construct the file URL
//           const url = `https;//gateway.pinata.cloud/ipfs/${cid}`;
//           console.log("File URL:", url); // Log the URL instead of downloading

//           alert(`File URL: ${url}`); // Show an alert with the URL

//       } catch (error) {
//           console.error("Error fetching file URL:", error);
//           alert("Failed to retrieve file URL.");
//       }
//   };

//     return (
//         <div>
//             <h2>Secure File Sharing with IPFS & Pinata</h2>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleUpload}>Encrypt & Upload</button>

//             <h3>Download File</h3>
//             <input
//                 type="text"
//                 placeholder="CID"
//                 value={cid}
//                 onChange={(e) => setCID(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Key"
//                 value={key}
//                 onChange={(e) => setKey(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="IV"
//                 value={iv}
//                 onChange={(e) => setIV(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="File Name"
//                 value={fileName}
//                 onChange={(e) => setFileName(e.target.value)}
//             />
//             <button onClick={handleDownload}>Download & Decrypt</button>

//             {decryptedFile && <p>File decrypted successfully!</p>}
//         </div>
//     );
// }

// export default App;

// import React, { useState } from "react";
// import { encryptFile } from "./CryptoFiles/encrypt";
// import { uploadToPinata } from "./CryptoFiles/pinataUpload";
// import { decryptFile, downloadDecryptedFile } from "./CryptoFiles/decrypt";
// import axios from "axios";

// function App() {
//     const [file, setFile] = useState(null);
//     const [cid, setCID] = useState("");
//     const [key, setKey] = useState("");
//     const [iv, setIV] = useState("");
//     const [fileName, setFileName] = useState("decrypted_file");

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file) return alert("Please select a file");

//         try {
//             // Encrypt the file
//             const { encryptedFile, key, iv } = await encryptFile(file);
//             setKey(key);
//             setIV(iv);

//             // Upload the encrypted file to IPFS via Pinata
//             const cid = await uploadToPinata(encryptedFile);
//             setCID(cid);

//             // Notify the user
//             alert(`File uploaded successfully!\nCID: ${cid}\nKey: ${key}\nIV: ${iv}`);
//         } catch (error) {
//             console.error("Error during encryption or upload:", error);
//             alert("Failed to encrypt or upload the file.");
//         }
//     };

//     const handleDownload = async () => {
//         if (!cid || !key || !iv) return alert("Missing CID, Key, or IV");

//         try {
//             // Fetch the encrypted file from IPFS
//             const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
//             const response = await axios.get(url, { responseType: 'arraybuffer' });

//             // Convert the ArrayBuffer to a Base64 string (browser-compatible)
//             const base64Data = btoa(
//                 new Uint8Array(response.data).reduce(
//                     (data, byte) => data + String.fromCharCode(byte),
//                     ''
//                 )
//             );

//             // Decrypt the file
//             const decryptedBlob = await decryptFile(base64Data, key, iv);

//             // Download the decrypted file
//             downloadDecryptedFile(decryptedBlob, fileName);

//             alert("File decrypted and downloaded successfully!");
//         } catch (error) {
//             console.error("Error during download and decryption:", error);
//             alert("Failed to download or decrypt the file.");
//         }
//     };

//     return (
//         <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//             <h2>Secure File Sharing with IPFS & Pinata</h2>

//             {/* File Upload Section */}
//             <div style={{ marginBottom: "20px" }}>
//                 <h3>Upload File</h3>
//                 <input type="file" onChange={handleFileChange} style={{ marginBottom: "10px" }} />
//                 <button onClick={handleUpload} style={{ padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//                     Encrypt & Upload
//                 </button>
//             </div>

//             {/* File Download Section */}
//             <div>
//                 <h3>Download File</h3>
//                 <input
//                     type="text"
//                     placeholder="CID"
//                     value={cid}
//                     onChange={(e) => setCID(e.target.value)}
//                     style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
//                 />
//                 <br />
//                 <input
//                     type="text"
//                     placeholder="Key"
//                     value={key}
//                     onChange={(e) => setKey(e.target.value)}
//                     style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
//                 />
//                 <br />
//                 <input
//                     type="text"
//                     placeholder="IV"
//                     value={iv}
//                     onChange={(e) => setIV(e.target.value)}
//                     style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
//                 />
//                 <br />
//                 <input
//                     type="text"
//                     placeholder="File Name"
//                     value={fileName}
//                     onChange={(e) => setFileName(e.target.value)}
//                     style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
//                 />
//                 <br />
//                 <button onClick={handleDownload} style={{ padding: "10px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//                     Download & Decrypt
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default App;

import React, { useState } from "react";
import { encryptFile } from "./CryptoFiles/encrypt";
import { uploadToPinata } from "./CryptoFiles/pinataUpload";
import { decryptFile, downloadDecryptedFile } from "./CryptoFiles/decrypt";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [cid, setCID] = useState("");
  const [key, setKey] = useState("");
  const [iv, setIV] = useState("");
  const [fileName, setFileName] = useState("decrypted_file");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    try {
      // Encrypt the file
      const { encryptedFile, key, iv } = await encryptFile(file);
      setKey(key);
      setIV(iv);

      // Upload the encrypted file to IPFS via Pinata
      const cid = await uploadToPinata(encryptedFile);
      setCID(cid);

      // Notify the user
      alert(`File uploaded successfully!\nCID: ${cid}\nKey: ${key}\nIV: ${iv}`);
    } catch (error) {
      console.error("Error during encryption or upload:", error);
      alert("Failed to encrypt or upload the file.");
    }
  };
const handleDownload = async () => {
  if (!cid || !key || !iv) return alert("Missing CID, Key, or IV");

  try {
    // Fetch the encrypted file from IPFS
    const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    // Convert ArrayBuffer to Base64 string
    const base64Data = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );

    // Decrypt the file
    const decryptedBlob = await decryptFile(base64Data, key, iv);

    // Download the decrypted file
    downloadDecryptedFile(decryptedBlob, fileName);

    alert("File decrypted and downloaded successfully!");
  } catch (error) {
    console.error("Error during download and decryption:", error);
    alert("Failed to download or decrypt the file.");
  }
};

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Secure File Sharing with IPFS & Pinata</h2>

      {/* File Upload Section */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Upload File</h3>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ marginBottom: "10px" }}
        />
        <button
          onClick={handleUpload}
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Encrypt & Upload
        </button>
      </div>

      {/* File Download Section */}
      <div>
        <h3>Download File</h3>
        <input
          type="text"
          placeholder="CID"
          value={cid}
          onChange={(e) => setCID(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        />
        <br />
        <input
          type="text"
          placeholder="Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        />
        <br />
        <input
          type="text"
          placeholder="IV"
          value={iv}
          onChange={(e) => setIV(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        />
        <br />
        <input
          type="text"
          placeholder="File Name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        />
        <br />
        <button
          onClick={handleDownload}
          style={{
            padding: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download & Decrypt
        </button>
      </div>
    </div>
  );
}

export default App;
