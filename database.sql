CREATE TABLE "list"(
"id" SERIAL PRIMARY KEY,
"completed" BOOLEAN DEFAULT false,
"task" VARCHAR(250) NOT NULL,
"date" DATE
);

INSERT INTO "list" ("task")
VALUES ('take out the trash'), ('feed the fish'), ('take the dog for a walk'), ('change the cat''s litter box'), ('clean the tortoise terrarium'),
('brush my dog''s teeth'), ('wash the dishes'), ('mop the floor');