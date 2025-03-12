class Carro {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.ligado = false;
      this.velocidade = 0;
    }
  
    ligar() {
      this.ligado = true;
      console.log(`${this.modelo} ligado.`);
    }
  
    desligar() {
      this.ligado = false;
      this.velocidade = 0;
      console.log(`${this.modelo} desligado.`);
    }
  
    acelerar(incremento) {
      if (this.ligado) {
        this.velocidade += incremento;
        console.log(`${this.modelo} acelerando. Velocidade: ${this.velocidade}`);
      } else {
        console.log("O carro precisa estar ligado para acelerar.");
      }
    }
  
    frear(decremento) {
      this.velocidade -= decremento;
      if (this.velocidade < 0) {
        this.velocidade = 0;
      }
      console.log(`${this.modelo} freando. Velocidade: ${this.velocidade}`);
    }
  }

  class CarroEsportivo extends Carro {
    constructor(modelo, cor) {
      super(modelo, cor);
      this.turboAtivado = false;
    }
  
    ativarTurbo() {
      if (this.ligado) {
        this.turboAtivado = true;
        this.acelerar(50); 
        console.log("Turbo ativado!");
      } else {
        console.log("Ligue o carro antes de ativar o turbo.");
      }
    }
  }

  class Caminhao extends Carro {
    constructor(modelo, cor, capacidadeCarga) {
      super(modelo, cor);
      this.capacidadeCarga = capacidadeCarga;
      this.cargaAtual = 0;
    }
  
    carregar(quantidade) {
      if (this.cargaAtual + quantidade <= this.capacidadeCarga) {
        this.cargaAtual += quantidade;
        console.log(`Caminhão carregado. Carga atual: ${this.cargaAtual}`);
      } else {
        console.log("Capacidade máxima atingida!");
      }
    }
  
    descarregar(quantidade) {
      if (this.cargaAtual - quantidade >= 0) {
        this.cargaAtual -= quantidade;
        console.log(`Caminhão descarregado. Carga atual: ${this.cargaAtual}`);
      } else {
        console.log("Não há carga suficiente para descarregar.");
      }
    }
  }


const carroEsportivo = new CarroEsportivo("Ferrari", "Vermelha");
const caminhao = new Caminhao("Volvo", "Azul", 5000);


const modeloEsportivoSpan = document.getElementById("modeloEsportivo");
const corEsportivoSpan = document.getElementById("corEsportivo");
const turboAtivadoSpan = document.getElementById("turboAtivado");
const velocidadeEsportivoSpan = document.getElementById("velocidadeEsportivo");
const ligarEsportivoButton = document.getElementById("ligarEsportivo");
const desligarEsportivoButton = document.getElementById("desligarEsportivo");
const acelerarEsportivoButton = document.getElementById("acelerarEsportivo");
const ativarTurboButton = document.getElementById("ativarTurbo");


const modeloCaminhaoSpan = document.getElementById("modeloCaminhao");
const corCaminhaoSpan = document.getElementById("corCaminhao");
const capacidadeCargaSpan = document.getElementById("capacidadeCarga");
const cargaAtualSpan = document.getElementById("cargaAtual");
const velocidadeCaminhaoSpan = document.getElementById("velocidadeCaminhao");
const ligarCaminhaoButton = document.getElementById("ligarCaminhao");
const desligarCaminhaoButton = document.getElementById("desligarCaminhao");
const acelerarCaminhaoButton = document.getElementById("acelerarCaminhao");
const carregarCaminhaoButton = document.getElementById("carregarCaminhao");
const descarregarCaminhaoButton = document.getElementById("descarregarCaminhao");
const quantidadeCargaInput = document.getElementById("quantidadeCarga");


function atualizarCarroEsportivo() {
  modeloEsportivoSpan.textContent = carroEsportivo.modelo;
  corEsportivoSpan.textContent = carroEsportivo.cor;
  turboAtivadoSpan.textContent = carroEsportivo.turboAtivado;
  velocidadeEsportivoSpan.textContent = carroEsportivo.velocidade;
}


function atualizarCaminhao() {
  modeloCaminhaoSpan.textContent = caminhao.modelo;
  corCaminhaoSpan.textContent = caminhao.cor;
  capacidadeCargaSpan.textContent = caminhao.capacidadeCarga;
  cargaAtualSpan.textContent = caminhao.cargaAtual;
  velocidadeCaminhaoSpan.textContent = caminhao.velocidade;
}


ligarEsportivoButton.addEventListener("click", () => {
  carroEsportivo.ligar();
  atualizarCarroEsportivo();
});

desligarEsportivoButton.addEventListener("click", () => {
  carroEsportivo.desligar();
  atualizarCarroEsportivo();
});

acelerarEsportivoButton.addEventListener("click", () => {
  carroEsportivo.acelerar(10);
  atualizarCarroEsportivo();
});

ativarTurboButton.addEventListener("click", () => {
  carroEsportivo.ativarTurbo();
  atualizarCarroEsportivo();
});


ligarCaminhaoButton.addEventListener("click", () => {
  caminhao.ligar();
  atualizarCaminhao();
});

desligarCaminhaoButton.addEventListener("click", () => {
  caminhao.desligar();
  atualizarCaminhao();
});

acelerarCaminhaoButton.addEventListener("click", () => {
  caminhao.acelerar(5);
  atualizarCaminhao();
});

carregarCaminhaoButton.addEventListener("click", () => {
  const quantidade = parseInt(quantidadeCargaInput.value);
  caminhao.carregar(quantidade);
  atualizarCaminhao();
});

descarregarCaminhaoButton.addEventListener("click", () => {
  const quantidade = parseInt(quantidadeCargaInput.value);
  caminhao.descarregar(quantidade);
  atualizarCaminhao();
});


atualizarCarroEsportivo();
atualizarCaminhao();