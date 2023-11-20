import { ethers } from "hardhat";
// import { expect } from "chai";
import chai from "chai";
// import { solidity } from "ethereum-waffle";
import { Chaincracy } from "../typechain-Types/Chaincracy";

// chai.use(solidity);
const { expect } = chai;

describe("Chaincracy", async function () {
  let chaincracy: Chaincracy;

  beforeEach(async function () {
    const ChaincracyFactory = await ethers.getContractFactory("Chaincracy");
    chaincracy = (await ChaincracyFactory.deploy()) as Chaincracy;
  });

  it("Não deve permitir a votação se a eleição não estiver iniciada", async function () {
    await chaincracy.adicionarCargo('Presidente');
    await chaincracy.adicionarCandidato(0, 1, 'Candidato 1', 'img1');

    await expect(chaincracy.votar(1, 0)).to.be.revertedWith("Votacao finalizada!");
  });

  it("Deve permitir a votação se a eleição estiver iniciada", async function () {
    await chaincracy.comecarVotacao();

    await chaincracy.adicionarCargo('Presidente');
    await chaincracy.adicionarCandidato(0, 1, 'Candidato 1', 'img1');

    await expect(chaincracy.votar(1, 0))
      .to.emit(chaincracy, 'VotoRegistrado')
      .withArgs(1);

    const votos = await chaincracy.TotalVotosporCargo(0);
    expect(votos[0]).to.equal(1);
  });

  it("Não deve permitir a votação se a eleição estiver finalizada", async function () {
    await chaincracy.comecarVotacao();

    await chaincracy.adicionarCargo('Presidente');
    await chaincracy.adicionarCandidato(0, 1, 'Candidato 1', 'img1');

    await chaincracy.finalizarVotacao();

    await expect(chaincracy.votar(1, 0)).to.be.revertedWith("Votacao finalizada!");
  });

  it("Não deve permitir votar duas vezes no mesmo cargo", async function () {
    await chaincracy.comecarVotacao();

    await chaincracy.adicionarCargo('Presidente');
    await chaincracy.adicionarCandidato(0, 1, 'Candidato 1', 'img1');

    await chaincracy.votar(1, 0);

    await expect(chaincracy.votar(1, 0)).to.be.revertedWith("Voto ja registrado por essa carteira neste cargo!");
  });

  it("Não deve permitir votar em candidato não cadastrado", async function () {
    await chaincracy.comecarVotacao();

    await chaincracy.adicionarCargo('Presidente');
    await chaincracy.adicionarCandidato(0, 1, 'Candidato 1', 'img1');

    await expect(chaincracy.votar(2, 0)).to.be.revertedWith("Candidato nao encontrado");
  });

  it("Não deve permitir Adicionar candidato com o mesmo numero no mesmo cargo", async function () {
    await chaincracy.adicionarCargo('Presidente');
    await chaincracy.adicionarCandidato(0, 1, 'Candidato 1', 'img1');

    await expect(chaincracy.adicionarCandidato(0, 1, 'Candidato 2', 'img1')).to.be.revertedWith("numero ja cadastrado!");
  });

  it("Não deve permitir Adicionar candidato em um cargo que não existe", async function () {
    await chaincracy.adicionarCargo('Presidente');
    await chaincracy.adicionarCandidato(0, 1, 'Candidato 1', 'img1');

    await expect(chaincracy.adicionarCandidato(1, 1, 'Candidato 2', 'img1')).to.be.revertedWith("cargo nao existente");
  });

  it("somente o dono deve conseguir usar função de adicionar", async function () {
    const accounts = await ethers.getSigners();
    // Chame uma função do seu contrato
    const contractAccount0 = chaincracy.connect(accounts[0]);
    const contractAccount1 = chaincracy.connect(accounts[1]);
    await contractAccount0.adicionarCargo('Presidente');
    await contractAccount0.adicionarCandidato(0, 1, 'Candidato 1', 'img1');

    await expect(contractAccount1.adicionarCandidato(0, 1, 'Candidato 2', 'img1')).to.be.revertedWith("Apenas o dono pode fazer essa operacao");
  });

  it("Deve retornar os candidatos do cargo", async function () {
    await chaincracy.prepararVotacao();

    await chaincracy.adicionarCargo('Presidente');
    await chaincracy.adicionarCandidato(0, 1, 'Candidato 1', 'img1');
    await chaincracy.adicionarCandidato(0, 2, 'Candidato 2', 'img1');
    await chaincracy.adicionarCandidato(0, 3, 'Candidato 3', 'img1');


    const candidatos = await chaincracy.getCandidatosDoCargo(0);
    const nomesCandidatos = candidatos.map(candidato => candidato.nomeCandidato);

    await expect(nomesCandidatos).to.include('Candidato 1');
    await expect(nomesCandidatos).to.include('Candidato 2');
    await expect(nomesCandidatos).to.include('Candidato 3');
  });

  it("Deve retornar o nome do candidato", async function () {
    await chaincracy.adicionarCargo('Presidente');
    await chaincracy.adicionarCandidato(0, 1, 'Candidato 1', 'img1');

    const candidato = await chaincracy.getNomeCandidato(0);

    await expect(candidato).to.equal('Candidato 1');
  });
});

