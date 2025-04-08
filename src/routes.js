// Importa o express
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// Criar um variavel para trabalhar com express
const router = express.Router();
const prisma = new PrismaClient()

//Rota para criar tarefas
router.post('/tarefa', async (req, res) => {
    const { descricao, status, prazo } = req.body

    const tarefa = await prisma.tarefa.create({
        data: { descricao, status, prazo }
    })

    return res.status(201).json(tarefa);
})

//Rota para atualizar tarefas
router.put('/tarefa/:id', async (req, res) => {
    const { id } = req.params
    const { descricao, status, prazo } = req.body

    const tarefa = await prisma.tarefa.update({
        where: { id: Number(id) },
        data: { descricao, status, prazo }
    })

    return res.status(200).json(tarefa);
})

//Rota para deletar tarefas
router.delete('/tarefa/:id', async (req, res) => {
    const { id } = req.params

    await prisma.tarefa.delete({
        where: { id: Number(id) }
    })

    return res.status(204).send()
})

//Rota para listar tarefas
router.get('/tarefa', async (req, res) => {
    const tarefas = await prisma.tarefa.findMany()
    res.json(tarefas)
});

//Rota paralistar apenas as tarefas pendentes
router.get('/tarefa/pendente', async (req, res) => {
    const tarefas = await prisma.tarefa.findMany({
        where: { status: 'pendente' }
    })
    res.json(tarefas)
});

//Rota para atualizar o status da tarefa para concluída
router.patch('/tarefa/:id/concluir', async (req, res) => {
    const { id } = req.params

    const tarefa = await prisma.tarefa.update({
        where: { id: Number(id) },
        data: { status: 'concluida' }
    })

    return res.status(200).json(tarefa);
})

module.exports = router