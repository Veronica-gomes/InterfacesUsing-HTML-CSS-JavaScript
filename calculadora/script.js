function zero () { 
    if (eval(forms.answer.value) == "Infinity"){
        Swal.fire({
            icon: 'error',
            title: 'Não foi dessa vez...',
            text: 'Impossível dividir por zero!',
          })
          return forms.answer.value = eval(forms.answer.value);

    }
    else {
        return forms.answer.value = eval(forms.answer.value);
    }
}