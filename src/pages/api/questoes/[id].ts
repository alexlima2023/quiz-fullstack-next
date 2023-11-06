import questoes from "../bancoQuestoes";

export default (req: any, res: any) => {
  res.status(200).json(questoes[0].paraObjeto());
};
