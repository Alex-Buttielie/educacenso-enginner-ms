import mongoose from 'mongoose';

const Aluno = new mongoose.Schema({
    tipoDeRegistro: { type: String, required: false },
    codigoDeEscolaInep: { type: String, required: false },
    codigoDaPessoaFisicaNoSistemaProprio: { type: String, required: false },
    identificacaoUnicaInep: { type: String, required: false },
    codigoDaTurmaNaEntidadeEscola: { type: String, required: false },
    codigoDaTurmaNoINEP: { type: String, required: false },
    codigoDaMatriculaDoaAlunoa: { type: String, required: false },
    turmaMulti: { type: String, required: false },
    linguagensESuasTecnologias: { type: String, required: false },
    matematicaESuasTecnologias: { type: String, required: false },
    cienciasDaNaturezaESuasTecnologias: { type: String, required: false },
    cienciasHumanasESociaisAplicadas: { type: String, required: false },
    formacaoTecnicaEProfissional: { type: String, required: false },
    itinerarioFormativoIntegradoEntreAsAreasDeConhecimentoOuEntreAsAreasDeConhecimentoEAFormacaoTecnicaProfissional: { type: String, required: false },
    tipoDoCursoDoItinerarioDeFormacaoTecnicaEProfissional: { type: String, required: false },
    codigoDoCursoTecnico: { type: String, required: false },
    itinerarioConcomitanteIntercomplementarAMatriculaDeFormacaoGeralBasica: { type: String, required: false },
    desenvolvimentoDeFuncoesCognitivas: { type: String, required: false },
    desenvolvimentoDeVidaAutonoma: { type: String, required: false },
    enriquecimentoCurricular: { type: String, required: false },
    ensinoDaInformaticaAcessivel: { type: String, required: false },
    ensinoDaLinguaBrasileiraDeSinaisLibras: { type: String, required: false },
    ensinoDaLinguaPortuguesaComoSegundaLingua: { type: String, required: false },
    ensinoDasTecnicasDoCalculoNoSoroban: { type: String, required: false },
    ensinoDeSistemaBraille: { type: String, required: false },
    ensinoDeTecnicasParaOrientacaoEMobilidade: { type: String, required: false },
    ensinoDeUsoDaComunicacaoAlternativaEAumentativaCAA: { type: String, required: false },
    ensinoDeUsoDeRecursosOpticosENaoOpticos: { type: String, required: false },
    recebeEscolarizacaoEmOutroEspacoDiferenteDaEscola: { type: String, required: false },
    transporteEscolarPublico: { type: String, required: false },
    poderPublicoResponsavelPeloTransporteEscolar: { type: String, required: false },
    rodoviarioBicicleta: { type: String, required: false },
    rodoviarioMicroonibus: { type: String, required: false },
    rodoviarioOnibus: { type: String, required: false },
    rodoviarioTracaoAnimal: { type: String, required: false },
    rodoviarioVansKombis: { type: String, required: false },
    rodoviarioOutro : { type: String, required: false },
    aquaviarioCapacidadeDeAte5Alunoas: { type: String, required: false },
    aquaviarioCapacidadeEntre5A15Alunoas: { type: String, required: false },
    aquaviarioCapacidadeEntre15A35Alunoas: { type: String, required: false },
    aquaviarioCapacidadeAcimaDe35Alunoas: { type: String, required: false },
});

export default mongoose.model('Aluno', Aluno);
