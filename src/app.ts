// app.ts
import { Tarea, ITarea } from './tarea.js';
import { TareaManager } from './tareaManager.js';
import { logExecution, generarId } from './utils.js';

class TareasUI {
    tareaManager: TareaManager;
    inputTarea: HTMLInputElement;
    btnAgregar: HTMLButtonElement;
    listaTareas: HTMLUListElement;

    constructor(tareaManager: TareaManager) {
        this.tareaManager = tareaManager;
        this.inputTarea = document.getElementById('inputTarea') as HTMLInputElement;
        this.btnAgregar = document.getElementById('btnAgregar') as HTMLButtonElement;
        this.listaTareas = document.getElementById('listaTareas') as HTMLUListElement;

        this.btnAgregar.addEventListener('click', () => this.agregarYMostrarTareas());
    }

    @logExecution
    agregarYMostrarTareas() {
        if (this.inputTarea.value) {
            const nuevaTarea = new Tarea(generarId(), this.inputTarea.value);
            this.tareaManager.agregarTarea(nuevaTarea);
            this.inputTarea.value = '';
            this.mostrarTareasDOM();
        }
    }

    mostrarTareasDOM() {
        const tareas = this.tareaManager.obtenerTareas();
        this.listaTareas.innerHTML = '';
        tareas.forEach(tarea => {
            const item = document.createElement('li');
            item.textContent = `${tarea.id} - ${tarea.titulo} - Completada: ${tarea.completada}`;
            this.listaTareas.appendChild(item);
        });
    }
}

const tareaManager = new TareaManager();
new TareasUI(tareaManager);
