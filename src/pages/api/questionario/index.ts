import questoes from "../bancoQuestoes";
import { embaralhar } from "@/functions/array";

export default (req: any, res: any) => {
  const ids = questoes.map((questao) => questao.id);
  res.status(200).json(embaralhar(ids));
};
