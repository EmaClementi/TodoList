let boton = document.getElementById("boton");

function agregarTarea() {
    let textoTarea = document.getElementById("textoTarea").value;
    let listaTareas = document.getElementById("lista");
    let tarea = document.createElement('li');

    let botonCompletada = document.createElement("button");
    botonCompletada.classList.add("btn", "btn-light", "btn-sm", "botonCompletada");
    botonCompletada.innerText = "Completada";
    botonCompletada.addEventListener("click", function() {
        tarea.classList.toggle("bg-primary", "text-white");
    });

    let botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn-close");
    botonEliminar.addEventListener("click", function() {
        tarea.remove();
    })

    
    let botonEditar = document.createElement("button");
    botonEditar.classList.add("btn", "btn-light", "btn-sm");
    botonEditar.innerText = "Editar";
    botonEditar.addEventListener("click", function() {
        let inputEditar = document.createElement("input");
        inputEditar.classList.add("form-control", "inputEditar");

        inputEditar.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                tarea.innerText = inputEditar.value;
                tarea.appendChild(contenedorBotones);
            }
        });

        tarea.innerText = "";
        tarea.appendChild(inputEditar);
        tarea.appendChild(contenedorBotones);

    });
  
    let contenedorBotones = document.createElement("div");
    contenedorBotones.classList.add("contenedorBotones");
    contenedorBotones.appendChild(botonEditar);
    contenedorBotones.appendChild(botonCompletada);
    contenedorBotones.appendChild(botonEliminar);
   
    
    tarea.innerText = textoTarea;
    tarea.classList.add("list-group-item");
    tarea.appendChild(contenedorBotones);
    listaTareas.appendChild(tarea);
    document.getElementById("textoTarea").value = "";


}



boton.addEventListener("click", agregarTarea);


