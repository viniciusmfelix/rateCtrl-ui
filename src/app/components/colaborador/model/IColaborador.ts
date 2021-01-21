export interface IColaborador {
  id: number;
  nome: string;
  email: string;
  cargo: string;
  salario: number;
  valorFixo: boolean;
  dataCriacao: Date;
  dataAtualizacao: Date;
}
