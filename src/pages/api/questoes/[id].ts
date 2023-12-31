import questoes from "../bancoQuestoes";

export default (req: any, res: any) => {
  const idSelecionado = +req.query.id;

  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === idSelecionado
  );

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
    return res.status(200).json(questaoSelecionada.paraObjeto());
  } else {
    res.status(204).send();
  }
};
