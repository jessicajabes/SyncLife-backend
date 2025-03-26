-- CreateTable
CREATE TABLE "users" (
    "id_user" TEXT NOT NULL,
    "name_user" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "teacher" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "exercise" (
    "id_exercise" TEXT NOT NULL,
    "name_exercise" TEXT NOT NULL,
    "description_exercise" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "exercise_pkey" PRIMARY KEY ("id_exercise")
);

-- CreateTable
CREATE TABLE "training" (
    "id_training" TEXT NOT NULL,
    "name_training" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "training_pkey" PRIMARY KEY ("id_training")
);

-- CreateTable
CREATE TABLE "exercisesoftraining" (
    "id_exerciseoftraining" TEXT NOT NULL,
    "block" INTEGER NOT NULL,
    "repeat" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "exercise_id" TEXT NOT NULL,
    "training_id" TEXT NOT NULL,

    CONSTRAINT "exercisesoftraining_pkey" PRIMARY KEY ("id_exerciseoftraining")
);

-- AddForeignKey
ALTER TABLE "training" ADD CONSTRAINT "training_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercisesoftraining" ADD CONSTRAINT "exercisesoftraining_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercise"("id_exercise") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercisesoftraining" ADD CONSTRAINT "exercisesoftraining_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "training"("id_training") ON DELETE RESTRICT ON UPDATE CASCADE;
