
let btnAgregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container')

class Item{

    constructor(mainInput){
        this.mainInput = mainInput
    }
    crearDiv(agregarTarea){


        
     
        const newDiv = document.createElement('div');
        newDiv.classList.add = 'item';
        container.appendChild(newDiv);

        const inputItem = document.createElement('input');
        inputItem.value = agregarTarea;
        inputItem.type = 'text';
        inputItem.disabled = true;
        inputItem.className = 'item-input';
        newDiv.appendChild(inputItem);

        const botonEditar = document.createElement('button');
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.className = 'boton-editar';
        newDiv.appendChild(botonEditar);

        const botonRemover = document.createElement('button');
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.className = 'boton-remover';
        newDiv.appendChild(botonRemover);

        botonEditar.addEventListener("click", function () {
            if (inputItem.disabled === true) {
                inputItem.disabled = false;
                botonEditar.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
                
            } else {
                inputItem.disabled = true;
                botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
                
            };
        });
       
        botonRemover.addEventListener("click", function(){ 
            container.removeChild(newDiv)
        })
 
        
        
    }
}

function chequearInput() {
    let mainInput = document.querySelector('.input').value;
    console.log(mainInput)
    if (mainInput.length !== 0) {
        let objItem = new Item(mainInput);
        console.log(objItem)
        objItem.crearDiv(mainInput);
        mainInput.innerHTML = "";
        clean()
        
    } else {
        console.log("No se ha ingresado una tarea")
    }
}

function clean(){
    mainInput = document.querySelector('.input').value = "";

}

btnAgregar.addEventListener('click', chequearInput)


