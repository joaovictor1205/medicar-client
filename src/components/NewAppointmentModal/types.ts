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
