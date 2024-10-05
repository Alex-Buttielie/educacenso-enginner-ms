import { AlunoProcessor } from "./AlunoProcessor";
import { DocenteDocumentosEnderecoProcessor } from "./DocenteDocumentosEnderecoProcessor";
import { DocenteIdentificacaoProcessor } from "./DocenteIdentificacaoProcessor";
import { DocenteUnidadeProcessor } from "./DocenteUnidade";
import { PersonProcessor } from "./PersonProcessor";
import { TurmaProcessor } from "./TurmaProcessor";
import { UnidadeInfraProcessor } from "./UnidadeInfraProcessor";
import { UnidadeProcessor } from "./UnidadeProcessor";

export enum ProcessorType {
    PERSON = '1',
    UNIDADE = '00',
    UNIDADE_INFRA = '10',
    TURMA = '20',
    DOCENTE = '30',
    DOCENTE_DOCUMENTOS_ENDERECO = '40',
    DOCENTE_UNIDADE = '50',
    ALUNO_MATRICULA = '60',
}

export const processors: Record<ProcessorType, DataProcessor> = {
    [ProcessorType.PERSON]: new PersonProcessor(),
    [ProcessorType.UNIDADE]: new UnidadeProcessor(),
    [ProcessorType.UNIDADE_INFRA]: new UnidadeInfraProcessor(),
    [ProcessorType.TURMA]: new TurmaProcessor(),
    [ProcessorType.DOCENTE]: new DocenteIdentificacaoProcessor(),
    [ProcessorType.DOCENTE_DOCUMENTOS_ENDERECO]: new DocenteDocumentosEnderecoProcessor(),
    [ProcessorType.DOCENTE_UNIDADE]: new DocenteUnidadeProcessor(),
    [ProcessorType.ALUNO_MATRICULA]: new AlunoProcessor(),
};