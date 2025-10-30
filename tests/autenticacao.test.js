import request from "supertest";
import { expect } from "chai";
import app from '../src/app.js';

describe("Testes de Autenticação JWT", () => {
  it("Deve retornar 401 ao usar token expirado", async () => {
    const res = await request(app)
      .get("/pets")
      .set("Authorization", "Bearer TOKEN_EXPIRADO");

    expect(res.status).to.equal(401);
  });

  it("Deve retornar 401 ao usar token adulterado", async () => {
    const res = await request(app)
      .get("/consultas")
      .set("Authorization", "Bearer TOKEN_FALSO");

    expect(res.status).to.equal(401);
  });

  it("Deve negar acesso ao dono tentando criar uma consulta", async () => {
    const loginDono = await request(app)
      .post("/login")
      .send({ email: "dono@teste.com", senha: "123456" });

    const tokenDono = loginDono.body.token;

    const res = await request(app)
      .post("/consultas")
      .set("Authorization", `Bearer ${tokenDono}`)
      .send({ petId: 1, data: "2025-11-10" });

    expect(res.status).to.equal(403);
  });
});