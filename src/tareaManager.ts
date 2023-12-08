import { Tarea, ITarea } from './tarea';

export class TareaManager {
    private tareas: Tarea[] = [];

    agregarTarea(tarea: Tarea) {
        this.tareas.push(tarea);
    }

    completarTarea(id: number) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = true;
        }
    }

    obtenerTareas(completadas?: boolean) {
        return typeof completadas === 'boolean'
            ? this.tareas.filter(t => t.completada === completadas)
            : this.tareas;
    }
}
