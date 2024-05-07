import Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  cor: string;
  modelo: string;
  ano: number;
  preco: number;
  foto: string;
  categoria: Categoria | null;
}