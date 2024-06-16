const express = require('express');
const usuarios = require('./controladores/usuarios');
const categoria = require('./controladores/categoria');
const transacao = require('./controladores/transacao');
const usuariosInter = require('./intermediarios/usuariosInter');

const rotas = express();

rotas.post('/usuario', usuarios.cadastrarUsuario);
rotas.post('/login', usuarios.login);
rotas.get('/usuario', usuarios.detalharUsuario);
rotas.put('/usuario', usuarios.atualizarUsuario);

rotas.get('/categoria', categoria.listarCategorias);

rotas.get('/transacao', transacao.listarTransacoes);
rotas.get('/transacao/:id', transacao.detalharTransacao);
rotas.post('/transacao', transacao.cadastrarTransacao);
rotas.put('/transacao/:id', transacao.atualizarTransacao);
rotas.delete('/transacao/:id', transacao.deletarTransacao);
rotas.get('/transacao/extrato', transacao.extratoTransacao);

rotas.post('/usuario', usuariosInter.validarCadastro);
rotas.use(usuariosInter.validarToken);


module.exports = rotas;

