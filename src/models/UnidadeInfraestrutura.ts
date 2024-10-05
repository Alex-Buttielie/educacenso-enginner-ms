import mongoose from "mongoose";

const UnidadeInfraestrutura =  new mongoose.Schema({
    tipoDeRegistro: { type: String, required: false },
    codigoDeEscolaInep: { type: String, required: false },
    predioEscolar: { type: String, required: false },
    salasEmOutraEscola: { type: String, required: false },
    galpaoRanchoPaiolBarracao: { type: String, required: false },
    unidadeDeAtendimentoSocioeducativa: { type: String, required: false },
    unidadePrisional: { type: String, required: false },
    outros: { type: String, required: false },
    formaDeOcupacaoDoPredio: { type: String, required: false },
    predioEscolarCompartilhadoComOutraEscola: { type: String, required: false },
    codigoDaEscolaComAQualCompartilha1: { type: String, required: false },
    codigoDaEscolaComAQualCompartilha2: { type: String, required: false },
    codigoDaEscolaComAQualCompartilha3: { type: String, required: false },
    codigoDaEscolaComAQualCompartilha4: { type: String, required: false },
    codigoDaEscolaComAQualCompartilha5: { type: String, required: false },
    codigoDaEscolaComAQualCompartilha6: { type: String, required: false },
    forneceAguaPotavelParaOConsumoHumano: { type: String, required: false },
    redePublica: { type: String, required: false },
    pocoArtesiano: { type: String, required: false },
    cacimbaCisternaPoco: { type: String, required: false },
    fonteRioIgarapeRiachoCorrego: { type: String, required: false },
    carropipa: { type: String, required: false },
    naoHaAbastecimentoDeAgua: { type: String, required: false },
    geradorMovidoACombustivelFossil: { type: String, required: false },
    fontesDeEnergiaRenovaveisOuAlternativasGeradorABiocombustivelEouBiodigestoresEolicaSolarOutras: { type: String, required: false },
    naoHaEnergiaEletrica: { type: String, required: false },
    fossaSeptica: { type: String, required: false },
    fossaRudimentarcomum: { type: String, required: false },
    naoHaEsgotamentoSanitario: { type: String, required: false },
    servicoDeColeta: { type: String, required: false },
    queima: { type: String, required: false },
    enterra: { type: String, required: false },
    levaAUmaDestinacaoFinalLicenciadaPeloPoderPublico: { type: String, required: false },
    descartaEmOutraArea: { type: String, required: false },
    separacaoDoLixoresiduos: { type: String, required: false },
    reaproveitamentoreutilizacao: { type: String, required: false },
    reciclagem: { type: String, required: false },
    naoFazTratamento: { type: String, required: false },
    almoxarifado: { type: String, required: false },
    areaDeVegetacaoOuGramado: { type: String, required: false },
    auditorio: { type: String, required: false },
    banheiro: { type: String, required: false },
    banheiroAcessivelAdequadoAoUsoDePessoasComDeficienciaOuMobilidadeReduzida: { type: String, required: false },
    banheiroAdequadoAEducacaoInfantil: { type: String, required: false },
    banheiroExclusivoParaOsFuncionarios: { type: String, required: false },
    banheiroOuVestiarioComChuveiro: { type: String, required: false },
    biblioteca: { type: String, required: false },
    cozinha: { type: String, required: false },
    despensa: { type: String, required: false },
    dormitorioDeAlunoa: { type: String, required: false },
    dormitorioDeProfessora: { type: String, required: false },
    laboratorioDeCiencias: { type: String, required: false },
    laboratorioDeInformatica: { type: String, required: false },
    laboratorioEspecificoParaAEducacaoProfissional: { type: String, required: false },
    parqueInfantil: { type: String, required: false },
    patioCoberto: { type: String, required: false },
    patioDescoberto: { type: String, required: false },
    piscina: { type: String, required: false },
    quadraDeEsportesCoberta: { type: String, required: false },
    quadraDeEsportesDescoberta: { type: String, required: false },
    refeitorio: { type: String, required: false },
    salaDeRepousoParaAlunoa: { type: String, required: false },
    salaatelieDeArtes: { type: String, required: false },
    salaDeMusicacoral: { type: String, required: false },
    salaestudioDeDanca: { type: String, required: false },
    salaMultiusoMusicaDancaEArtes: { type: String, required: false },
    terreiraoAreaParaPraticaDesportivaERecreacaoSemCoberturaSemPisoESemEdificacoes: { type: String, required: false },
    viveirocriacaoDeAnimais: { type: String, required: false },
    salaDeDiretoria: { type: String, required: false },
    salaDeLeitura: { type: String, required: false },
    salaDeProfessores: { type: String, required: false },
    salaDeRecursosMultifuncionaisParaAtendimentoEducacionalEspecializadoAEE: { type: String, required: false },
    salaDeSecretaria: { type: String, required: false },
    salasDeOficinasDaEducacaoProfissional: { type: String, required: false },
    estudioDeGravacaoEEdicao: { type: String, required: false },
    areaDeHortaPlantioEouProducaoAgricola: { type: String, required: false },
    nenhumaDasDependenciasRelacionadas: { type: String, required: false },
    corrimaoEGuardacorpos: { type: String, required: false },
    elevador: { type: String, required: false },
    pisosTateis: { type: String, required: false },
    portasComVaoLivreDeNoMinimo80Cm: { type: String, required: false },
    rampas: { type: String, required: false },
    sinalizacaoalarmeLuminoso: { type: String, required: false },
    sinalizacaoSonora: { type: String, required: false },
    sinalizacaoTatil: { type: String, required: false },
    sinalizacaoVisualPisoparedes: { type: String, required: false },
    nenhumDosRecursosDeAcessibilidadeListados: { type: String, required: false },
    numeroDeSalasDeAulaUtilizadasNaEscolaDentroDoPredioEscolar: { type: String, required: false },
    numeroDeSalasDeAulaUtilizadasNaEscolaForaDoPredioEscolar: { type: String, required: false },
    numeroDeSalasDeAulaClimatizadasArCondicionadoAquecedorOuClimatizador: { type: String, required: false },
    numeroDeSalasDeAulaComAcessibilidadeParaPessoasComDeficienciaOuMobilidadeReduzida: { type: String, required: false },
    antenaParabolica: { type: String, required: false },
    computadores: { type: String, required: false },
    copiadora: { type: String, required: false },
    impressora: { type: String, required: false },
    impressoraMultifuncional: { type: String, required: false },
    scanner: { type: String, required: false },
    nenhumDosEquipamentosListados: { type: String, required: false },
    aparelhoDeDVDBluray: { type: String, required: false },
    aparelhoDeSom: { type: String, required: false },
    aparelhoDeTelevisao: { type: String, required: false },
    lousaDigital: { type: String, required: false },
    projetorMultimidiaDataShow: { type: String, required: false },
    computadoresDeMesaDesktop: { type: String, required: false },
    computadoresPortateis: { type: String, required: false },
    tablets: { type: String, required: false },
    paraUsoAdministrativo: { type: String, required: false },
    paraUsoNoProcessoDeEnsinoEAprendizagem: { type: String, required: false },
    paraUsoDosAlunoas: { type: String, required: false },
    paraUsoDaComunidade: { type: String, required: false },
    naoPossuiAcessoAInternet: { type: String, required: false },
    computadoresDeMesaPortateisETabletsDaEscolaNoLaboratorioDeInformaticaBibliotecaSalaDeAulaEtc: { type: String, required: false },
    dispositivosPessoaisComputadoresPortateisCelularesTabletsEtc: { type: String, required: false },
    internetBandaLarga: { type: String, required: false },
    aCabo: { type: String, required: false },
    wireless: { type: String, required: false },
    naoHaRedeLocalInterligandoComputadores: { type: String, required: false },
    agronomosasHorticultoresasTecnicosOuMonitoresasResponsaveisPelaGestaoDaAreaDeHortaPlantioEouProducaoAgricola: { type: String, required: false },
    auxiliaresDeSecretariaOuAuxiliaresAdministrativosAtendentes: { type: String, required: false },
    auxiliarDeServicosGeraisPorteiroaZeladoraFaxineiroaJardineiroa: { type: String, required: false },
    bibliotecarioaAuxiliarDeBibliotecaOuMonitoraDaSalaDeLeitura: { type: String, required: false },
    bombeiroaBrigadistaProfissionaisDeAssistenciaASaudeUrgenciaEEmergenciaEnfermeiroaTecnicoaDeEnfermagemESocorrista: { type: String, required: false },
    coordenadoraDeTurnodisciplinar: { type: String, required: false },
    fonoaudiologoa: { type: String, required: false },
    nutricionista: { type: String, required: false },
    psicologoaEscolar: { type: String, required: false },
    profissionaisDePreparacaoESegurancaAlimentarCozinheiroaMerendeiraEAuxiliarDeCozinha: { type: String, required: false },
    profissionaisDeApoioESupervisaoPedagogicaPedagogoaCoordenadoraPedagogicoaOrientadoraEducacionalSupervisoraEscolarECoordenadoraDeAreaDeEnsino: { type: String, required: false },
    secretarioaEscolar: { type: String, required: false },
    segurancaGuardaOuSegurancaPatrimonial: { type: String, required: false },
    tecnicosasMonitoresasSupervisoresasOuAuxiliaresDeLaboratoriosDeApoioATecnologiasEducacionaisOuEmMultimeiosmultimidiasEletronicodigitais: { type: String, required: false },
    vicediretoraOuDiretoraAdjuntoaProfissionaisResponsaveisPelaGestaoAdministrativaEouFinanceira: { type: String, required: false },
    orientadoraComunitarioaOuAssistenteSocial: { type: String, required: false },
    tradutorEInterpreteDeLibrasParaAtendimentoEmOutrosAmbientesDaEscolaQueNaoSejaSalaDeAula: { type: String, required: false },
    revisorDeTextoBrailleAssistenteVidenteAssistenteDeRevisaoDoTextoEmBraille: { type: String, required: false },
    naoHaFuncionariosParaAsFuncoesListadas: { type: String, required: false },
    alimentacaoEscolarParaOsAlunoas: { type: String, required: false },
    acervoMultimidia: { type: String, required: false },
    brinquedosParaEducacaoInfantil: { type: String, required: false },
    conjuntoDeMateriaisCientificos: { type: String, required: false },
    equipamentoParaAmplificacaoEDifusaoDeSomaudio: { type: String, required: false },
    equipamentosEInstrumentosParaAtividadesEmAreaDeHortaPlantioEouProducaoAgricola: { type: String, required: false },
    instrumentosMusicaisParaConjuntoBandafanfarraEouAulasDeMusica: { type: String, required: false },
    jogosEducativos: { type: String, required: false },
    materiaisParaAtividadesCulturaisEArtisticas: { type: String, required: false },
    materiaisParaEducacaoProfissional: { type: String, required: false },
    materiaisParaPraticaDesportivaERecreacao: { type: String, required: false },
    materiaisPedagogicosParaAEducacaoBilingueDeSurdos: { type: String, required: false },
    materiaisPedagogicosParaAEducacaoEscolarIndigena: { type: String, required: false },
    materiaisPedagogicosParaAEducacaoDasRelacoesEtnicosRaciais: { type: String, required: false },
    materiaisPedagogicosParaAEducacaoDoCampo: { type: String, required: false },
    materiaisPedagogicosParaAEducacaoEscolarQuilombola: { type: String, required: false },
    materiaisPedagogicosParaAEducacaoEspecial: { type: String, required: false },
    nenhumDosInstrumentosListados: { type: String, required: false },
    escolaIndigena: { type: String, required: false },
    linguaIndigena: { type: String, required: false },
    linguaPortuguesa: { type: String, required: false },
    codigoDaLinguaIndigena1: { type: String, required: false },
    codigoDaLinguaIndigena2: { type: String, required: false },
    codigoDaLinguaIndigena3: { type: String, required: false },
    aEscolaFazExameDeSelecaoParaIngressoDeSeusAlunoasAvaliacaoPorProvaEOuAnaliseCurricular: { type: String, required: false },
    autodeclaradoPretoPardoOuIndigenaPPI: { type: String, required: false },
    condicaoDeRenda: { type: String, required: false },
    oriundoDeEscolaPublica: { type: String, required: false },
    pessoaComDeficienciaPCD: { type: String, required: false },
    outrosGruposQueNaoOsListados: { type: String, required: false },
    semReservasDeVagasParaSistemaDeCotasAmplaConcorrencia: { type: String, required: false },
    aEscolaPossuiSiteOuBlogOuPaginaEmRedesSociaisParaComunicacaoInstitucional: { type: String, required: false },
    aEscolaCompartilhaEspacosParaAtividadesDeIntegracaoEscolacomunidade: { type: String, required: false },
    aEscolaUsaEspacosEEquipamentosDoEntornoEscolarParaAtividadesRegularesComOsAlunoas: { type: String, required: false },
    associacaoDePais: { type: String, required: false },
    associacaoDePaisEMestres: { type: String, required: false },
    conselhoEscolar: { type: String, required: false },
    gremioEstudantil: { type: String, required: false },
    naoHaOrgaosColegiadosEmFuncionamento: { type: String, required: false },
    oProjetoPoliticoPedagogicoOuAPropostaPedagogicaDaEscolaConformeArt12DaLDBFoiAtualizadaNosUltimos12MesesAteADataDeReferencia: { type: String, required: false },
    aEscolaDesenvolveAcoesNaAreaDeEducacaoAmbiental: { type: String, required: false },
    comoConteudoDosComponentescamposDeExperienciasPresentesNoCurriculo: { type: String, required: false },
    comoUmComponenteCurricularEspecialEspecificoFlexivelOuEletivo: { type: String, required: false },
    comoUmEixoEstruturanteDoCurriculo: { type: String, required: false },
    emEventos: { type: String, required: false },
    emProjetosTransversaisOuInterdisciplinares: { type: String, required: false },
    nenhumaDasOpcoesListadas: { type: String, required: false },
})

export default mongoose.model('UnidadeInfraestrutura', UnidadeInfraestrutura);