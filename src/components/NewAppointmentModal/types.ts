export type SpecialtyType = {
    id: string;
    nome: string;
}

export type DoctorType = {
    id: string;
    crm: string;
    nome: string;
    especialidade: SpecialtyType;
}

export type ScheduleType = {
    dia: string;
    horarios: string[];
    id: number;
    medico: DoctorType;
}
