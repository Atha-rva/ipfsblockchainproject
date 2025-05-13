// import axios from 'axios';

// const PINATA_API_KEY = "0c5afe08f44c4670506e";
// const PINATA_SECRET = "599e580b3958698fd4f6c84c8d20b34662c361cc05994004c73b7907918671c4";
// const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4MGVmZDI1Ni1lNjcwLTQyZDgtYTMwMC1lYTUyMjExMTIyNGIiLCJlbWFpbCI6ImRlc2htdWtoYXRoYXJ2YTAyNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMGM1YWZlMDhmNDRjNDY3MDUwNmUiLCJzY29wZWRLZXlTZWNyZXQiOiI1OTllNTgwYjM5NTg2OThmZDRmNmM4NGM4ZDIwYjM0NjYyYzM2MWNjMDU5OTQwMDRjNzNiNzkwNzkxODY3MWM0IiwiZXhwIjoxNzcwOTE5NjM2fQ.BDxiXt9OmJw4c6HpnQ96miopAi4EN4K2zT0pYqSFEkg";

// export const uploadToPinata = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);

//     const metadata = JSON.stringify({
//         name: "encrypted_file",
//     });

//     formData.append("pinataMetadata", metadata);

//     const options = JSON.stringify({
//         cidVersion: 1,
//     });

//     formData.append("pinataOptions", options);

//     try {
//         const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
//             headers: {
//                 Authorization: `Bearer ${PINATA_JWT}`,
//             },
//         });

//         return res.data.IpfsHash; // CID of the file
//     } catch (error) {
//         console.error("Error uploading file to Pinata:", error);
//         throw error;
//     }
// };

import axios from "axios";

const PINATA_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4MGVmZDI1Ni1lNjcwLTQyZDgtYTMwMC1lYTUyMjExMTIyNGIiLCJlbWFpbCI6ImRlc2htdWtoYXRoYXJ2YTAyNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMGM1YWZlMDhmNDRjNDY3MDUwNmUiLCJzY29wZWRLZXlTZWNyZXQiOiI1OTllNTgwYjM5NTg2OThmZDRmNmM4NGM4ZDIwYjM0NjYyYzM2MWNjMDU5OTQwMDRjNzNiNzkwNzkxODY3MWM0IiwiZXhwIjoxNzcwOTE5NjM2fQ.BDxiXt9OmJw4c6HpnQ96miopAi4EN4K2zT0pYqSFEkg"; // Replace with your Pinata JWT

export const uploadToPinata = async (file) => {
  const formData = new FormData();
  formData.append(
    "file",
    new Blob([file], { type: "application/octet-stream" })
  );

  const metadata = JSON.stringify({
    name: "encrypted_file",
  });

  formData.append("pinataMetadata", metadata);

  const options = JSON.stringify({
    cidVersion: 1,
  });

  formData.append("pinataOptions", options);

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          Authorization: `Bearer ${PINATA_JWT}`,
        },
      }
    );

    return res.data.IpfsHash; // CID of the file
  } catch (error) {
    console.error("Error uploading file to Pinata:", error);
    throw error;
  }
};
