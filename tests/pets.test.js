import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";

describe("🐾 Testes de Pets", () => {
  let tokenVet, idDono;

  before(async () => {
    // Autentica como veterinário
    const login = await request(app)
      .post("/login")
      .send({ email: "vet@clinica.com", senha: "123456" });

    tokenVet = login.body.token;

    // Cria dono para associar ao pet
    const dono = await request(app)
      .post("/donos")
      .set("Authorization", `Bearer ${tokenVet}`)
      .send({ nome: "João", email: "joao@teste.com" });

    idDono = dono.body.id;
  });

  it("Deve rejeitar registro de pet sem dono associado", async () => {
    const res = await request(app)
      .post("/pets")
      .set("Authorization", `Bearer ${tokenVet}`)
      .send({ nome: "Rex", especie: "Cachorro" });

    expect(res.status).to.equal(400);
  });

  it("Deve rejeitar pet com data de nascimento futura", async () => {
    const res = await request(app)
      .post("/pets")
      .set("Authorization", `Bearer ${tokenVet}`)
      .send({
        nome: "Luna",
        especie: "Gato",
        donoId: idDono,
        dataNascimento: "2099-01-01",
      });

    expect(res.status).to.equal(400);
  });

  it("Deve aceitar nome de pet com acentos e caracteres especiais", async () => {
    const res = await request(app)
      .post("/pets")
      .set("Authorization", `Bearer ${tokenVet}`)
      .send({
        nome: "Mía",
        especie: "Cachorro",
        donoId: idDono,
        dataNascimento: "2020-05-10",
      });

    expect(res.status).to.equal(201);
    expect(res.body.nome).to.include("Mía");
  });
});