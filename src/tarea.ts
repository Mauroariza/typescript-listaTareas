export interface ITarea {
    id: number;
    titulo: string;
    completada: boolean;
}

export class Tarea implements ITarea {
    constructor(
        public id: number,
        public titulo: string,
        public completada: boolean = false
    ) {}
}
