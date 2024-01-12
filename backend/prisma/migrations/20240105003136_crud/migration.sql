-- CreateTable
CREATE TABLE "TAREFAS" (
    "tare_id" SERIAL NOT NULL,
    "tare_titulo" TEXT NOT NULL,
    "tare_descricao" TEXT NOT NULL,
    "tare_data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tare_stat_nome" TEXT NOT NULL,

    CONSTRAINT "TAREFAS_pkey" PRIMARY KEY ("tare_id")
);

-- CreateTable
CREATE TABLE "STATUS" (
    "stat_nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TEMA" (
    "tema_id" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "STATUS_stat_nome_key" ON "STATUS"("stat_nome");

-- CreateIndex
CREATE UNIQUE INDEX "TEMA_tema_id_key" ON "TEMA"("tema_id");

-- AddForeignKey
ALTER TABLE "TAREFAS" ADD CONSTRAINT "TAREFAS_tare_stat_nome_fkey" FOREIGN KEY ("tare_stat_nome") REFERENCES "STATUS"("stat_nome") ON DELETE RESTRICT ON UPDATE CASCADE;
