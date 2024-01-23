-- CreateTable
CREATE TABLE "Hobbies" (
    "id" TEXT NOT NULL,
    "hobby" TEXT NOT NULL,
    "personId" TEXT NOT NULL,

    CONSTRAINT "Hobbies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hobbies" ADD CONSTRAINT "Hobbies_personId_fkey" FOREIGN KEY ("personId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
