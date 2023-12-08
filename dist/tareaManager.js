export class TareaManager {
    constructor() {
        this.tareas = [];
    }
    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }
    completarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = true;
        }
    }
    obtenerTareas(completadas) {
        return typeof completadas === 'boolean'
            ? this.tareas.filter(t => t.completada === completadas)
            : this.tareas;
    }
}
