const result_textarea = document.querySelector('.result_message_text');
const result_message = document.querySelector('.result_message');
const wrap_result = document.querySelector('.wrap_result_message');
const userTextarea = document.querySelector('.input_user');
const error_message = document.querySelector('.message_form');

const encript_button = document.querySelector('.encriptar_btn');
const desencript_button = document.querySelector('.desencriptar_btn');
const copy_button = document.querySelector('.copy_button');

//Event Listener for Buttons
encript_button.addEventListener('click', encriptButton);
desencript_button.addEventListener('click', descripButton);
copy_button.addEventListener('click', copyText);

// Functions for encryption and decrypt
function encriptButton(event) {
      // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
      event.preventDefault()
      let data_user = userTextarea.value;

   const regex = /[A-Z]/g;
   const found = data_user.match(regex);

   if(found){
    visibleContent(error_message)
   } else {
    console.log("texto valido!")
    let newText = data_user.replace(/e/g, 'enter');
      newText = newText.replace(/i/g, 'imes');
      newText = newText.replace(/a/g, 'ai');
      newText = newText.replace(/o/g, 'ober');
      newText = newText.replace(/u/g, 'ufat');
      //Visible and hidden content
      hiddenContent(wrap_result);
      result_textarea.innerText = newText;
      visibleContent(result_textarea);
      visibleContent(copy_button);
   }
      // Rules of secret code
      //   const charArr = ['e', 'i', 'a', 'o', 'u'];
      //   const codeArr = ['enter', 'imes', 'ai', 'ober', 'ufat']; 
      
      
}
function descripButton(event){
    event.preventDefault()  
    // let result = result_textarea.value;
    let result = userTextarea.value;
    let newText = result.replace(/enter/g, 'e');
    newText = newText.replace(/imes/g , 'i');
    newText = newText.replace(/ai/g, 'a');
    newText = newText.replace(/ober/g, 'o');
    newText = newText.replace(/ufat/g, 'u');
    //Visible and hidden content
    hiddenContent(wrap_result);
    result_textarea.innerText = newText;
    visibleContent(result_textarea);
    visibleContent(copy_button);
} 
function copyText(){
    let data_user = result_textarea.value;
    const cb = navigator.clipboard;
    cb.writeText(data_user)
    alert("Texto copiado ✅!")
}
//  Functions for Hidden and visible content display 
function hiddenContent(content){
    return content.style.display = 'none';
}
function visibleContent(content){
    return content.style.display = 'block';
}
// Functions for validation check lowercase letters
// function hasLowerCase(str){
//    const regex = /[A-Z]/g;
//    const found = str.match(regex);
//    console.log(found);

//    if(found){
//     visibleContent(error_message)
//    } else {
//     console.log("texto valido!")
//    }

// }
// **Requisitos:**
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 
