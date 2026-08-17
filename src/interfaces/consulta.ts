import { Medico } from "./medico";
import { Paciente } from "../types/paciente";
import { StatusConsulta } from "../types/statusConsulta";

export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  dataHora: string; // ISO string vindo do backend (ex: "2026-05-20T09:00:00")
  valor: number;
  status: StatusConsulta;
  observacoes?: string;
}

function formatarData(dataHora: string): string {
  const data = new Date(dataHora);
  const dia = data.toLocaleDateString("pt-BR");
  const hora = data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${dia} às ${hora}`;
}
