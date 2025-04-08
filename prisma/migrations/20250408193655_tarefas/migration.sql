-- CreateTable
CREATE TABLE "Tarefas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "prazo" TEXT NOT NULL
);
