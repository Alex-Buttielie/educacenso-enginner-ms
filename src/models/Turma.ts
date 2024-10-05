import mongoose from "mongoose";

const Turma = new mongoose.Schema({
    tipoDeRegistro: { type: String, required: false },
    codigoDeEscolaInep: { type: Number, required: false },
    codigoDaTurmaNaEntidadeEscola: { type: String, required: false },
    codigoDaTurmaInep: { type: Number, required: false },
    nomeDaTurma: { type: String, required: false },
    tipoDeMediacaoDidaticopedagogica: { type: Number, required: false },
    horaInicialHora: { type: String, required: false },
    horaInicialMinuto: { type: String, required: false },
    horaFinalHora: { type: String, required: false },
    horaFinalMinuto: { type: String, required: false },
    domingo: { type: Number, required: false },
    segundafeira: { type: Number, required: false },
    tercafeira: { type: Number, required: false },
    quartafeira: { type: Number, required: false },
    quintafeira: { type: Number, required: false },
    sextafeira: { type: Number, required: false },
    sabado: { type: Number, required: false },
    escolarizacao: { type: Number, required: false },
    atividadeComplementar: { type: Number, required: false },
    atendimentoEducacionalEspecializadoAEE: { type: Number, required: false },
    formacaoGeralBasica: { type: Number, required: false },
    itinerarioFormativo: { type: Number, required: false },
    naoSeAplica: { type: Number, required: false },
    codigo1: { type: Number, required: false },
    codigo2: { type: Number, required: false },
    codigo3: { type: Number, required: false },
    codigo4: { type: Number, required: false },
    codigo5: { type: Number, required: false },
    codigo6: { type: Number, required: false },
    localDeFuncionamentoDiferenciadoDaTurma: { type: Number, required: false },
    modalidade: { type: Number, required: false },
    etapa: { type: Number, required: false },
    codigoCurso: { type: Number, required: false },
    serieanoSeriesAnuais: { type: Number, required: false },
    periodosSemestrais: { type: Number, required: false },
    ciclos: { type: Number, required: false },
    gruposNaoSeriadosComBaseNaIdadeOuCompetencia: { type: Number, required: false },
    modulos: { type: Number, required: false },
    alternanciaRegularDePeriodosDeEstudosPropostaPedagogicaDeFormacaoPorAlternanciaTempoescolaETempocomunidade: { type: Number, required: false },
    eletivas: { type: Number, required: false },
    libras: { type: Number, required: false },
    linguaIndigena: { type: Number, required: false },
    linguaLiteraturaEstrangeiraEspanhol: { type: Number, required: false },
    linguaLiteraturaEstrangeiraFrances: { type: Number, required: false },
    linguaLiteraturaEstrangeiraOutra: { type: Number, required: false },
    projetoDeVida: { type: Number, required: false },
    trilhasDeAprofundamentoaprendizagens: { type: Number, required: false },
    outrasUnidadesCurricularesObrigatorias: { type: String, required: false },
    quimica: { type: Number, required: false },
    fisica: { type: Number, required: false },
    matematica: { type: Number, required: false },
    biologia: { type: Number, required: false },
    ciencias: { type: Number, required: false },
    linguaLiteraturaPortuguesa: { type: Number, required: false },
    linguaLiteraturaEstrangeiraIngles: { type: Number, required: false },
    arteEducacaoArtisticaTeatroDancaMusicaArtesPlasticasEOutras: { type: Number, required: false },
    educacaoFisica: { type: Number, required: false },
    historia: { type: Number, required: false },
    geografia: { type: Number, required: false },
    filosofia: { type: Number, required: false },
    informaticaComputacao: { type: Number, required: false },
    areasDoConhecimentoProfissionalizantes: { type: Number, required: false },
    areasDoConhecimentoPedagogicas: { type: Number, required: false },
    ensinoReligioso: { type: Number, required: false },
    estudosSociais: { type: Number, required: false },
    sociologia: { type: Number, required: false },
    linguaPortuguesaComoSegundaLingua: { type: Number, required: false },
    estagioCurricularSupervisionado: { type: Number, required: false },
    outrasAreasDoConhecimento: { type: Number, required: false },
    classeBilingueDeSurdosTendoALibrasLinguaBrasileiraDeSinaisComoLinguaDeInstrucaoEnsinoComunicacaoEInteracaoEALinguaPortuguesaEscritaComoSegundaLingua: { type: Number, required: false },
})

export default mongoose.model('Turma', Turma);