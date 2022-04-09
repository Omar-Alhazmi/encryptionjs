import Swal from "sweetalert2";

let codeBock = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'," "];

export const OneTimePad = (plaintext, Key, type) => {
  const plaintextToLower = plaintext.toLowerCase()
  let keyValidator = /^[0-9,]*$/;
  if (keyValidator.test(Key) === false) {
    throw Swal.fire({
      title: `Please Enter a Valid number between 1-26`,
      icon: 'error',
      preConfirm: () => {
        window.location.reload();
      },
      showCancelButton: false
    })
  }
  let text = [];
  let KeyValue = [];
  Key = Key.split(',').map(n => +n)

  KeyValue.push(...Key);
  KeyValue.forEach(element => {
    if (element < 1 || element > 26) {
      throw Swal.fire({
        title: `Please Enter a Valid number between 1-26`,
        icon: 'error',
        preConfirm: () => {
          window.location.reload();
        },
        showCancelButton: false
      })
    }
  })

  for (let i = 0; i < plaintextToLower.length; i++) {
    if (codeBock.indexOf(plaintextToLower[i]) === -1) {
      throw Swal.fire({
        title: `key length must be at least equal to the plaintext
        and to separate between the key values use ","`,
        icon: 'error',
        showCancelButton: false,
        showLoaderOnConfirm: true,
        preConfirm: () => {
          window.location.reload();
        }
      })
      // Get the character index.
    } else {
      text[i] = codeBock.indexOf(plaintextToLower[i]);
    }
  }
  if (KeyValue.length < text.length) {
    throw Swal.fire({
      title: `Please Enter a Valid character from a-Z or space
       No special character or number is allowed `,
      icon: 'error',
      showCancelButton: false
    })
  }
  if (type === "Encode") {
    let sum = text.map((num, idx) => {
      return (num + KeyValue[idx]) > 27 ? num + KeyValue[idx] - 27 : num + KeyValue[idx];
    });
    let result = []
    for (let index in sum) {
      result.push(codeBock[sum[index]]);
    }
    throw Swal.fire({
      title: `Encrypted Message: ${result.join("")} `,
      icon: 'info',
      showCancelButton: false
    })
  }
  if (type === "Decode") {
    let sum = text.map((num, idx) => {
      return (num - KeyValue[idx]) < 1 ? num - KeyValue[idx] + 27 : num - KeyValue[idx];
    });

    let result = []
    for (let index in sum) {
      result.push(codeBock[sum[index]]);
    }
    throw Swal.fire({
      title: `Decrypted Message:\n ${result.join("")} `,
      icon: 'info',
      showCancelButton: false
    })
  }
}