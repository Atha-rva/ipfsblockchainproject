// import CryptoJS from 'crypto-js';

// /**
//  * Decrypts a file using AES decryption.
//  * @param {string} encryptedText - The encrypted data (in Base64 or CipherParams format).
//  * @param {string} key - The decryption key (in hexadecimal format).
//  * @param {string} iv - The initialization vector (in hexadecimal format).
//  * @returns {Blob} - The decrypted file as a Blob.
//  */
// export const decryptFile = async (encryptedText, key, iv) => {
//     try {
//         // Decrypt the data using AES
//         const decryptedBytes = CryptoJS.AES.decrypt(
//             encryptedText, // Encrypted data
//             CryptoJS.enc.Hex.parse(key), // Parse key from hex
//             {
//                 iv: CryptoJS.enc.Hex.parse(iv), // Parse IV from hex
//             }
//         );

//         // Convert the decrypted WordArray to a Base64 string
//         const base64Data = decryptedBytes.toString(CryptoJS.enc.Base64);

//         // Check if decryption failed (empty result)
//         if (!base64Data) {
//             throw new Error("Decryption failed or resulted in empty data.");
//         }

//         // Convert Base64 to binary data
//         const binaryData = atob(base64Data); // Decode Base64 to binary string
//         const byteArray = new Uint8Array(binaryData.length); // Create a Uint8Array to hold the binary data

//         // Populate the Uint8Array with the binary data
//         for (let i = 0; i < binaryData.length; i++) {
//             byteArray[i] = binaryData.charCodeAt(i);
//         }

//         // Create a Blob from the binary data
//         const decryptedBlob = new Blob([byteArray], { type: "application/octet-stream" });

//         return decryptedBlob; // Return the decrypted file as a Blob
//     } catch (error) {
//         console.error("Decryption error:", error);
//         throw error; // Re-throw the error for handling in the calling function
//     }
// };

// /**
//  * Helper function to download a decrypted file.
//  * @param {Blob} decryptedBlob - The decrypted file as a Blob.
//  * @param {string} fileName - The name of the file to download.
//  */
// export const downloadDecryptedFile = (decryptedBlob, fileName) => {
//     // Create a download link for the decrypted file
//     const blobURL = URL.createObjectURL(decryptedBlob);
//     const link = document.createElement("a");
//     link.href = blobURL;
//     link.download = fileName; // Set the filename for the downloaded file
//     link.click();

//     // Clean up
//     URL.revokeObjectURL(blobURL);
// };

// import CryptoJS from 'crypto-js';

// export const decryptFile = async (encryptedText, key, iv) => {
//     try {
//         const bytes = CryptoJS.AES.decrypt(encryptedText, CryptoJS.enc.Hex.parse(key), {
//             iv: CryptoJS.enc.Hex.parse(iv),
//         });

//         const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
//         if (!decryptedData) {
//             throw new Error("Decryption failed or resulted in empty data");
//         }

//         return new Blob([decryptedData], { type: "text/plain" });
//     } catch (error) {
//         console.error("Decryption error:", error);
//         throw error;
//     }
// };

// import CryptoJS from 'crypto-js';

// export const decryptFile = async (encryptedText, key, iv) => {
//     try {
//         // Decrypt the data
//         const bytes = CryptoJS.AES.decrypt(encryptedText, CryptoJS.enc.Hex.parse(key), {
//             iv: CryptoJS.enc.Hex.parse(iv),
//         });

//         // Convert the decrypted data to a WordArray
//         const decryptedData = bytes.toString(CryptoJS.enc.Base64); // Use Base64 for binary data

//         // Convert Base64 to a Blob
//         const byteCharacters = atob(decryptedData);
//         const byteNumbers = new Array(byteCharacters.length);
//         for (let i = 0; i < byteCharacters.length; i++) {
//             byteNumbers[i] = byteCharacters.charCodeAt(i);
//         }
//         const byteArray = new Uint8Array(byteNumbers);

//         // Return the decrypted file as a Blob
//         return new Blob([byteArray], { type: "application/octet-stream" });
//     } catch (error) {
//         console.error("Decryption error:", error);
//         throw error;
//     }
// };

// import CryptoJS from 'crypto-js';

// /**
//  * Decrypts a file using AES decryption.
//  * @param {string} encryptedText - The encrypted data (in Base64 or CipherParams format).
//  * @param {string} key - The decryption key (in hexadecimal format).
//  * @param {string} iv - The initialization vector (in hexadecimal format).
//  * @returns {Blob} - The decrypted file as a Blob.
//  */
// export const decryptFile = async (encryptedText, key, iv) => {
//     try {
//         // Decrypt the data using AES
//         const decryptedBytes = CryptoJS.AES.decrypt(
//             encryptedText, // Encrypted data
//             CryptoJS.enc.Hex.parse(key), // Parse key from hex
//             {
//                 iv: CryptoJS.enc.Hex.parse(iv), // Parse IV from hex
//             }
//         );

//         // Convert the decrypted WordArray to a Base64 string
//         const base64Data = decryptedBytes.toString(CryptoJS.enc.Base64);

//         // Check if decryption failed (empty result)
//         if (!base64Data) {
//             throw new Error("Decryption failed or resulted in empty data.");
//         }

//         // Convert Base64 to binary data
//         const binaryData = atob(base64Data); // Decode Base64 to binary string
//         const byteArray = new Uint8Array(binaryData.length); // Create a Uint8Array to hold the binary data

//         // Populate the Uint8Array with the binary data
//         for (let i = 0; i < binaryData.length; i++) {
//             byteArray[i] = binaryData.charCodeAt(i);
//         }

//         // Create a Blob from the binary data
//         const decryptedBlob = new Blob([byteArray], { type: "application/octet-stream" });

//         return decryptedBlob; // Return the decrypted file as a Blob
//     } catch (error) {
//         console.error("Decryption error:", error);
//         throw error; // Re-throw the error for handling in the calling function
//     }
// };

// /**
//  * Helper function to download a decrypted file.
//  * @param {Blob} decryptedBlob - The decrypted file as a Blob.
//  * @param {string} fileName - The name of the file to download.
//  */
// export const downloadDecryptedFile = (decryptedBlob, fileName) => {
//     // Create a download link for the decrypted file
//     const blobURL = URL.createObjectURL(decryptedBlob);
//     const link = document.createElement("a");
//     link.href = blobURL;
//     link.download = fileName; // Set the filename for the downloaded file
//     link.click();

//     // Clean up
//     URL.revokeObjectURL(blobURL);
// };

// import CryptoJS from "crypto-js";

// export const decryptFile = async (encryptedText, key, iv) => {
//   try {
//     // Decrypt the data using AES
//     const decrypted = CryptoJS.AES.decrypt(
//       encryptedText, // Encrypted data (Base64 string)
//       CryptoJS.enc.Hex.parse(key), // Parse key from hex
//       {
//         iv: CryptoJS.enc.Hex.parse(iv), // Parse IV from hex
//       }
//     );

//     // Convert decrypted data to a WordArray
//     const decryptedData = decrypted.toString(CryptoJS.enc.Utf8);

//     // Check if decryption failed (empty result)
//     if (!decryptedData) {
//       throw new Error("Decryption failed or resulted in empty data.");
//     }

//     // Convert the decrypted data to a Blob
//     const decryptedBlob = new Blob([decryptedData], {
//       type: "application/octet-stream",
//     });

//     return decryptedBlob; // Return the decrypted file as a Blob
//   } catch (error) {
//     console.error("Decryption error:", error);
//     throw error; // Re-throw the error for handling in the calling function
//   }
// };

// export const downloadDecryptedFile = (decryptedBlob, fileName) => {
//   const blobURL = URL.createObjectURL(decryptedBlob);
//   const link = document.createElement("a");
//   link.href = blobURL;
//   link.download = fileName; // Set the filename for the downloaded file
//   link.click();

//   // Clean up
//   URL.revokeObjectURL(blobURL);
// };




import CryptoJS from "crypto-js";

export const decryptFile = async (encryptedText, key, iv) => {
  try {
    // Decrypt the data using AES
    const decrypted = CryptoJS.AES.decrypt(
      encryptedText, // Encrypted data (Base64 string)
      CryptoJS.enc.Hex.parse(key), // Parse key from hex
      {
        iv: CryptoJS.enc.Hex.parse(iv), // Parse IV from hex
      }
    );

    // Convert decrypted data to a WordArray
    const decryptedWordArray = CryptoJS.enc.Base64.parse(decrypted.toString(CryptoJS.enc.Base64));

    // Convert WordArray to a Uint8Array (binary data)
    const decryptedBytes = new Uint8Array(decryptedWordArray.words.length * 4);
    for (let i = 0; i < decryptedWordArray.words.length; i++) {
      const word = decryptedWordArray.words[i];
      decryptedBytes[i * 4] = (word >> 24) & 0xff;
      decryptedBytes[i * 4 + 1] = (word >> 16) & 0xff;
      decryptedBytes[i * 4 + 2] = (word >> 8) & 0xff;
      decryptedBytes[i * 4 + 3] = word & 0xff;
    }

    // Remove padding bytes (if any)
    const actualLength = decryptedWordArray.sigBytes;
    const finalBytes = decryptedBytes.slice(0, actualLength);

    // Create a Blob from the binary data
    const decryptedBlob = new Blob([finalBytes], {
      type: "application/octet-stream",
    });

    return decryptedBlob; // Return the decrypted file as a Blob
  } catch (error) {
    console.error("Decryption error:", error);
    throw error; // Re-throw the error for handling in the calling function
  }
};

export const downloadDecryptedFile = (decryptedBlob, fileName) => {
  const blobURL = URL.createObjectURL(decryptedBlob);
  const link = document.createElement("a");
  link.href = blobURL;
  link.download = fileName; // Set the filename for the downloaded file
  link.click();

  // Clean up
  URL.revokeObjectURL(blobURL);
};