// import CryptoJS from 'crypto-js';

// export const encryptFile = async (file) => {
//     const reader = new FileReader();

//     return new Promise((resolve, reject) => {
//         reader.onload = (event) => {
//             const wordArray = CryptoJS.lib.WordArray.create(event.target.result);
//             const key = CryptoJS.lib.WordArray.random(32); // 256-bit key
//             const iv = CryptoJS.lib.WordArray.random(16);

//             const encrypted = CryptoJS.AES.encrypt(wordArray, key, { iv });

//             resolve({
//                 encryptedFile: new Blob([encrypted.toString()], { type: "text/plain" }),
//                 key: key.toString(CryptoJS.enc.Hex),
//                 iv: iv.toString(CryptoJS.enc.Hex),
//             });
//         };

//         reader.onerror = reject;
//         reader.readAsArrayBuffer(file);
//     });
// };

import CryptoJS from "crypto-js";

export const encryptFile = async (file) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      const fileData = event.target.result; // ArrayBuffer
      const key = CryptoJS.lib.WordArray.random(32); // 256-bit key
      const iv = CryptoJS.lib.WordArray.random(16); // 128-bit IV

      // Convert ArrayBuffer to WordArray
      const wordArray = CryptoJS.lib.WordArray.create(fileData);

      // Encrypt the file data
      const encrypted = CryptoJS.AES.encrypt(wordArray, key, { iv });

      // Convert the encrypted data to a Uint8Array
      const encryptedBytes = CryptoJS.enc.Base64.parse(
        encrypted.toString()
      ).toString(CryptoJS.enc.Latin1);
      const encryptedArray = new Uint8Array(encryptedBytes.length);
      for (let i = 0; i < encryptedBytes.length; i++) {
        encryptedArray[i] = encryptedBytes.charCodeAt(i);
      }

      resolve({
        encryptedFile: encryptedArray, // Uint8Array of encrypted data
        key: key.toString(CryptoJS.enc.Hex),
        iv: iv.toString(CryptoJS.enc.Hex),
      });
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};
