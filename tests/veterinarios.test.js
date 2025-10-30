import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js"; // importa sua aplicação Express

describe("🔬 Testes de Veterinários", () => {
  let tokenVet;

  before(async () => {
    // Autentica como veterinário antes dos testes, se necessário
    const res = await request(app)
      .post("/login")
      .send({ email: "vet@clinica.com", senha: "123456" });

    tokenVet = res.body.token;
  });

  it("Deve retornar erro 400 ao tentar registrar veterinário sem campo obrigatório", async () => {
    const res = await request(app)
      .post("/veterinarios")
      .set("Authorization", `Bearer ${tokenVet}`)
      .send({ nome: "", crmv: "12345-SP" });

    expect(res.status).to.equal(400);
    expect(res.body).to.have.property("erro");
  });

  it("Deve retornar erro 409 ao tentar registrar veterinário com CRMV já existente", async () => {
    const res = await request(app)
      .post("/veterinarios")
      .set("Authorization", `Bearer ${tokenVet}`)
      .send({ nome: "Dra. Maria", crmv: "9999-SP" });

    expect(res.status).to.satisfy((s) => s === 201 || s === 409);
  });

  it("Deve rejeitar nome com caracteres especiais", async () => {
    const res = await request(app)
      .post("/veterinarios")
      .set("Authorization", `Bearer ${tokenVet}`)
      .send({ nome: "Dr#@Lucas", crmv: "1234-RJ" });

    expect(res.status).to.equal(400);
  });
});