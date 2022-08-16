const result_textarea = document.querySelector('.result_message_text');
const result_message = document.querySelector('.result_message');
const wrap_result = document.querySelector('.wrap_result_message');
const copy_button = document.querySelector('.result_message_button');
const userTextarea = document.querySelector('.input_user');

const encript_button = document.querySelector('.encriptar_btn');
const desencript_button = document.querySelector('.desencriptar_btn');

//Event Listener for Buttons
encript_button.addEventListener('click', encriptButton);
desencript_button.addEventListener('click', descripButton);


function encriptButton(event) {
      // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
      event.preventDefault()
      let data_user = userTextarea.value;
      // Rules of secret code
     //   const charArr = ['e', 'i', 'a', 'o', 'u'];
     //   const codeArr = ['enter', 'imes', 'ai', 'ober', 'ufat'];
      let newText = data_user.replace(/e/g, 'enter');
      newText = newText.replace(/i/g, 'imes');
      newText = newText.replace(/a/g, 'ai');
      newText = newText.replace(/o/g, 'ober');
      newText = newText.replace(/u/g, 'ufat');
      console.log(`newText: ${newText}`);

      //Visible and hidden content
      hiddenContent(wrap_result);
      result_textarea.innerText = newText;
      visibleContent(result_textarea);
      visibleContent(copy_button);
      
}

function descripButton(event){
    console.log('desencriptando mensaje');
    
    // let result = result_textarea.value;
    let result = userTextarea.value;
    let newText = result.replace(/enter/g, 'e');
    newText = newText.replace(/imes/g , 'i');
    newText = newText.replace(/ai/g, 'a');
    newText = newText.replace(/ober/g, 'o');
    newText = newText.replace(/ufat/g, 'u');
    console.log(`result: ${newText}`);

    //Visible and hidden content
    hiddenContent(wrap_result);
    result_textarea.innerText = newText;
    visibleContent(result_textarea);
    visibleContent(copy_button);
}


// Hidden and visible content display functions
function hiddenContent(content){
    return content.style.display = 'none';
}
function visibleContent(content){
    return content.style.display = 'block';
}

// TODO

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


// **Requisitos:**
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 
