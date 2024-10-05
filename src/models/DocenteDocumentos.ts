import mongoose from "mongoose";

const DocenteDocumentos = new mongoose.Schema({
    tipoDeRegistro: { type: String, required: false },
    codigoDeEscolaInep: { type: String, required: false },
    codigoDaPessoaFisicaNoSistemaProprio: { type: String, required: false },
    identificacaoUnicaInep: { type: String, required: false },
    cargo: { type: String, required: false },
    criterioDeAcessoAoCargofuncao: { type: String, required: false },
    situacaoFuncionalRegimeDeContratacaoTipoDeVinculo: { type: String, required: false },
})

export default mongoose.model('DocenteDocumentos', DocenteDocumentos);