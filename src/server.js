const express = require('express')
const routes = require('./routes')
const { PrismaClient } = require("@prisma/client")

const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.use(routes)

app.listen(3001, () => {
	console.log("Servidor rodando na porta", 3001)
})