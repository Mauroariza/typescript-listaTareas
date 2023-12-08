var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// app.ts
import { Tarea } from './tarea.js';
import { TareaManager } from './tareaManager.js';
import { logExecution, generarId } from './utils.js';
class TareasUI {
    constructor(tareaManager) {
        this.tareaManager = tareaManager;
        this.inputTarea = document.getElementById('inputTarea');
        this.btnAgregar = document.getElementById('btnAgregar');
        this.listaTareas = document.getElementById('listaTareas');
        this.btnAgregar.addEventListener('click', () => this.agregarYMostrarTareas());
    }
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
__decorate([
    logExecution
], TareasUI.prototype, "agregarYMostrarTareas", null);
const tareaManager = new TareaManager();
new TareasUI(tareaManager);
