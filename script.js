function toggleResultado(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.toggle("ativo");
    }
}

function toggleERun(id, funcaoExecucao) {
    const el = document.getElementById(id);
    if (el) {
        if (!el.classList.contains("ativo")) {
            funcaoExecucao();
        }
        el.classList.toggle("ativo");
    }
}

function classificacaoEnergia() {
    let consumoMensal = Number(document.getElementById("consumo-mensal").value);
    let classificacao = document.getElementById("classificacao");

    if (consumoMensal < 1 || isNaN(consumoMensal)) {
        classificacao.innerHTML = "Erro, digite um valor positivo.";
        return;
    }
    if (consumoMensal <= 100) {
        classificacao.innerHTML =
            "Baixo consumo. Orientação: Excelente uso da energia!";
    } else if (consumoMensal > 100 && consumoMensal <= 200) {
        classificacao.innerHTML =
            "Consumo moderado. Orientação: Mantenha os aparelhos fora da tomada.";
    } else if (consumoMensal > 200 && consumoMensal <= 500) {
        classificacao.innerHTML =
            "Consumo alto. Orientação: Evite banhos demorados e reduza uso de ar-condicionado.";
    } else if (consumoMensal > 500) {
        classificacao.innerHTML =
            "Consumo muito alto. Orientação: Considere uma auditoria energética na residência.";
    }
}

function verificarElegibilidade() {
    let aprovado = false;
    const mediaAlvo = 8;
    const frequenciaAlvo = 75;
    const rendaAlvo = 1500;

    let mediaAluno = Number(document.getElementById("media-aluno").value);
    let frequenciaAluno = Number(
        document.getElementById("frequencia-aluno").value,
    );
    let rendaFamiliarAluno = Number(
        document.getElementById("renda-familiar-aluno").value,
    );
    let situacao = document.getElementById("situacao");

    let impedimentos = [];

    if (mediaAluno < mediaAlvo) impedimentos.push("Média inferior a 8.0");
    if (frequenciaAluno < frequenciaAlvo)
        impedimentos.push("Frequência inferior a 75%");
    if (rendaFamiliarAluno > rendaAlvo)
        impedimentos.push("Renda superior a R$ 1500");

    if (
        mediaAluno >= mediaAlvo &&
        frequenciaAluno >= frequenciaAlvo &&
        rendaFamiliarAluno <= rendaAlvo
    ) {
        aprovado = true;
    } else {
        aprovado = false;
    }

    if (aprovado) {
        situacao.innerHTML = "Elegível para bolsa acadêmica.";
    } else {
        situacao.innerHTML =
            "Não elegível. Motivo(s): " + impedimentos.join(", ");
    }
}

function ex3() {
    let idade = Number(document.getElementById("q3-idade").value);
    let condicao = document.getElementById("q3-condicao").value;
    let out = document.getElementById("out-3");

    if (idade < 0 || idade > 120 || isNaN(idade)) {
        out.innerHTML = "Idade inválida. Digite um valor entre 0 e 120.";
        return;
    }

    if (condicao === "sim" || idade >= 80) {
        out.innerHTML = "Prioridade Alta (Atendimento Imediato).";
    } else if (idade >= 60) {
        out.innerHTML = "Prioridade Média (Fila Preferencial).";
    } else {
        out.innerHTML = "Prioridade Baixa (Atendimento Convencional).";
    }
}

function ex4() {
    let matricula = document.getElementById("q4-matricula").value === "sim";
    let treino = document.getElementById("q4-treino").value === "sim";
    let hora = Number(document.getElementById("q4-hora").value);
    let out = document.getElementById("out-4");

    if (hora < 0 || hora > 23 || isNaN(hora)) {
        out.innerHTML = "Informe uma hora válida entre 0 e 23.";
        return;
    }

    let dentroHorario = hora >= 8 && hora <= 18;

    if (matricula && treino && dentroHorario) {
        out.innerHTML = "Acesso Autorizado!";
    } else {
        let motivos = [];
        if (!dentroHorario)
            motivos.push("Fora do horário permitido (8h às 18h)");
        if (!matricula || !treino)
            motivos.push(
                "Pendência cadastral (Matrícula inativa ou falta de treinamento)",
            );
        out.innerHTML = "Acesso Recusado. Motivo: " + motivos.join("; ");
    }
}

function ex5() {
    let horas = Number(document.getElementById("q5-horas").value);
    let out = document.getElementById("out-5");

    if (horas < 0 || isNaN(horas)) {
        out.innerHTML = "Tempo inválido.";
        return;
    }

    let valor = 0;
    let categoria = "";

    if (horas <= 0.25) {
        categoria = "Tolerância Gratuita";
        valor = 0;
    } else if (horas <= 2) {
        categoria = "Curta Permanência";
        valor = horas * 10;
    } else {
        categoria = "Longa Permanência";
        valor = 20 + (horas - 2) * 5;
    }

    out.innerHTML = `Categoria: ${categoria} | Valor a pagar: R$ ${valor.toFixed(2)}`;
}

function ex6() {
    let total = Number(document.getElementById("q6-total").value);
    let fidelidade = document.getElementById("q6-fidelidade").value === "sim";
    let out = document.getElementById("out-6");

    if (total <= 0 || isNaN(total)) {
        out.innerHTML = "Informe um valor de compra válido.";
        return;
    }

    let percentual = 0;
    if (total > 500) percentual = 0.2;
    else if (total > 200) percentual = 0.1;
    else if (total > 100) percentual = 0.05;

    if (fidelidade) percentual += 0.05;

    let valorDesconto = total * percentual;
    let valorFinal = total - valorDesconto;

    out.innerHTML = `Desconto Aplicado: ${(percentual * 100).toFixed(0)}% | Valor Final: R$ ${valorFinal.toFixed(2)}`;
}

function ex7() {
    let nota = Number(document.getElementById("q7-nota").value);
    let freq = Number(document.getElementById("q7-freq").value);
    let out = document.getElementById("out-7");

    if (
        nota < 0 ||
        nota > 10 ||
        freq < 0 ||
        freq > 100 ||
        isNaN(nota) ||
        isNaN(freq)
    ) {
        out.innerHTML =
            "Valores inválidos. Nota de 0 a 10 e Frequência de 0 a 100.";
        return;
    }

    if (freq < 75) {
        out.innerHTML = "Reprovado por Frequência.";
    } else if (nota >= 7.0) {
        out.innerHTML = "Aprovado por Média.";
    } else if (nota >= 4.0) {
        out.innerHTML = "Em Recuperação.";
    } else {
        out.innerHTML = "Reprovado por Nota.";
    }
}

function ex8() {
    let gb = Number(document.getElementById("q8-gb").value);
    let disp = Number(document.getElementById("q8-disp").value);
    let out = document.getElementById("out-8");

    if (gb <= 0 || disp <= 0 || isNaN(gb) || isNaN(disp)) {
        out.innerHTML = "Insira valores válidos maiores que zero.";
        return;
    }

    if (gb > 500 || disp > 10) {
        out.innerHTML =
            "Plano Recomendado: Fibra Ultra 1GB (Para alto consumo e múltiplos dispositivos).";
    } else if (gb > 150 || disp > 4) {
        out.innerHTML =
            "Plano Recomendado: Intermediário 500MB (Para famílias e consumo regular de streaming).";
    } else {
        out.innerHTML =
            "Plano Recomendado: Básico 200MB (Ideal para uso individual ou poucos dispositivos).";
    }
}

function ex9() {
    let atual = Number(document.getElementById("q9-atual").value);
    let min = Number(document.getElementById("q9-min").value);
    let out = document.getElementById("out-9");

    if (atual < 0 || min < 0 || isNaN(atual) || isNaN(min)) {
        out.innerHTML = "Os valores de estoque não podem ser negativos.";
        return;
    }

    if (atual < min) {
        out.innerHTML =
            "Estado Crítico: Necessária reposição imediata de estoque!";
    } else if (atual <= min * 2) {
        out.innerHTML =
            "Estado Adequado: Estoque dentro do nível operacional normal.";
    } else {
        out.innerHTML =
            "Estado Excesso: Alerta de excesso de capital parado em estoque.";
    }
}

function ex10() {
    let c = Number(document.getElementById("q10-temp").value);
    let out = document.getElementById("out-10");

    if (isNaN(c)) {
        out.innerHTML = "Digite um valor numérico válido.";
        return;
    }

    let f = (c * 9) / 5 + 32;
    let classe = "";

    if (c < 0) classe = "Fora do Intervalo Operacional (Congelamento)";
    else if (c <= 30) classe = "Faixa Operacional Segura";
    else if (c <= 80) classe = "Atenção: Alta Temperatura";
    else classe = "Crítico: Superaquecimento";

    out.innerHTML = `Celsius: ${c}°C | Fahrenheit: ${f.toFixed(1)}°F | Classificação: ${classe}`;
}

function ex11() {
    let renda = Number(document.getElementById("q11-renda").value);
    let parcela = Number(document.getElementById("q11-parcela").value);
    let hist = document.getElementById("q11-historico").value;
    let out = document.getElementById("out-11");

    let comprometimento = parcela / renda;

    if (hist === "sujo") {
        out.innerHTML = "Crédito Recusado: Histórico com restrição financeira.";
    } else if (comprometimento > 0.3) {
        out.innerHTML = `Pendente de Análise: Comprometimento de renda elevado (${(comprometimento * 100).toFixed(1)}%).`;
    } else {
        out.innerHTML = "Crédito Aprovado!";
    }
}

function ex12() {
    let vel = Number(document.getElementById("q12-vel").value);
    let lim = Number(document.getElementById("q12-limite").value);
    let out = document.getElementById("out-12");

    if (vel <= 0 || lim <= 0) {
        out.innerHTML = "Valores de velocidade devem ser maiores que zero.";
        return;
    }

    if (vel <= lim) {
        out.innerHTML = "Velocidade Adequada (Dentro do limite).";
    } else {
        let diffPerc = ((vel - lim) / lim) * 100;
        if (diffPerc <= 20) {
            out.innerHTML = `Excesso Leve (${diffPerc.toFixed(1)}% acima do limite). Infração Média.`;
        } else if (diffPerc <= 50) {
            out.innerHTML = `Excesso Moderado (${diffPerc.toFixed(1)}% acima do limite). Infração Grave.`;
        } else {
            out.innerHTML = `Excesso Gravíssimo (${diffPerc.toFixed(1)}% acima do limite). Risco Alto!`;
        }
    }
}

function ex13() {
    let cpu = Number(document.getElementById("q13-cpu").value);
    let mem = Number(document.getElementById("q13-mem").value);
    let out = document.getElementById("out-13");

    if (cpu < 0 || cpu > 100 || mem < 0 || mem > 100) {
        out.innerHTML = "Os percentuais devem estar entre 0 e 100.";
        return;
    }

    if (cpu > 85 && mem > 85) {
        out.innerHTML = "Estado Crítico: Sobrecarga conjunta de CPU e Memória!";
    } else if (cpu > 85 || mem > 85) {
        out.innerHTML =
            "Estado de Atenção: Pico isolado identificável em hardware.";
    } else {
        out.innerHTML = "Estado Normal: Recursos em operação ideal.";
    }
}

function ex14() {
    let a = Number(document.getElementById("q14-a").value);
    let b = Number(document.getElementById("q14-b").value);
    let c = Number(document.getElementById("q14-c").value);
    let out = document.getElementById("out-14");

    if (a <= 0 || b <= 0 || c <= 0) {
        out.innerHTML =
            "Medidas inválidas. Todos os lados devem ser maiores que zero.";
        return;
    }

    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            out.innerHTML = "Triângulo Válido: Equilátero (3 lados iguais).";
        } else if (a === b || b === c || a === c) {
            out.innerHTML = "Triângulo Válido: Isósceles (2 lados iguais).";
        } else {
            out.innerHTML = "Triângulo Válido: Escaleno (3 lados diferentes).";
        }
    } else {
        out.innerHTML =
            "Medidas não satisfazem a desigualdade triangular (Não formam triângulo).";
    }
}

function ex15() {
    let renda = Number(document.getElementById("q15-renda").value);
    let out = document.getElementById("out-15");

    if (renda < 0 || isNaN(renda)) {
        out.innerHTML = "Digite uma renda válida.";
        return;
    }

    let faixa = "";
    let aliquota = 0;

    if (renda <= 20000) {
        faixa = "Faixa 1";
        aliquota = 0;
    } else if (renda <= 40000) {
        faixa = "Faixa 2";
        aliquota = 0.075;
    } else if (renda <= 60000) {
        faixa = "Faixa 3";
        aliquota = 0.15;
    } else {
        faixa = "Faixa 4";
        aliquota = 0.225;
    }

    let imposto = renda * aliquota;
    out.innerHTML = `Renda: R$ ${renda.toFixed(2)} | Faixa: ${faixa} | Alíquota: ${aliquota * 100}% | Imposto Devido: R$ ${imposto.toFixed(2)}`;
}

function ex16() {
    let ind = Number(document.getElementById("q16-indice").value);
    let out = document.getElementById("out-16");

    if (ind < 0 || ind > 100 || isNaN(ind)) {
        out.innerHTML = "O índice deve estar entre 0 e 100.";
        return;
    }

    let msgLim =
        ind === 0 ||
        ind === 20 ||
        ind === 40 ||
        ind === 60 ||
        ind === 80 ||
        ind === 100
            ? " [Nota: O valor informado está no limite exato de faixa]"
            : "";

    if (ind < 20) out.innerHTML = "Desempenho Péssimo" + msgLim;
    else if (ind < 40) out.innerHTML = "Desempenho Ruim" + msgLim;
    else if (ind < 60) out.innerHTML = "Desempenho Regular" + msgLim;
    else if (ind < 80) out.innerHTML = "Desempenho Bom" + msgLim;
    else out.innerHTML = "Desempenho Excelente" + msgLim;
}

function ex17() {
    let valor = Number(document.getElementById("q17-valor").value);
    let regiao = document.getElementById("q17-regiao").value;
    let vip = document.getElementById("q17-vip").value === "sim";
    let out = document.getElementById("out-17");

    let freteBase = regiao === "sudeste" ? 20 : regiao === "sul" ? 30 : 50;

    if (vip || valor >= 200) {
        out.innerHTML =
            "Regra Aplicada: Frete Grátis (Elegível por valor de compra ou status VIP). Valor Final Frete: R$ 0.00";
    } else if (valor >= 100) {
        let freteFinal = freteBase * 0.5;
        out.innerHTML = `Regra Aplicada: 50% de Desconto no Frete. Valor Final Frete: R$ ${freteFinal.toFixed(2)}`;
    } else {
        out.innerHTML = `Regra Aplicada: Frete Integral. Valor Final Frete: R$ ${freteBase.toFixed(2)}`;
    }
}

function calcularConsumo() {
    const meta = Number(document.getElementById("meta").value);
    const inputDias = document.querySelectorAll(".dia-consumo");
    const consumos = [];

    for (let i = 0; i < inputDias.length; i++) {
        consumos.push(Number(inputDias[i].value));
    }

    let total = 0;
    let diasAcimaMeta = 0;
    let maior = consumos[0];
    let menor = consumos[0];

    for (let i = 0; i < consumos.length; i++) {
        const diaAtual = consumos[i];
        total += diaAtual;

        if (diaAtual > meta) diasAcimaMeta++;
        if (diaAtual > maior) maior = diaAtual;
        if (diaAtual < menor) menor = diaAtual;
    }

    const media = total / (consumos.length || 1);
    const painelResultado = document.getElementById("resultado");
    painelResultado.innerHTML = `
        <p><strong>Total Semanal:</strong> ${total} kWh</p>
        <p><strong>Média Semanal:</strong> ${media.toFixed(2)} kWh</p>
        <p><strong>Dias acima da meta:</strong> ${diasAcimaMeta}</p>
        <p><strong>Maior Consumo:</strong> ${maior} kWh</p>
        <p><strong>Menor Consumo:</strong> ${menor} kWh</p>
    `;
}

function ex19() {
    let num = Number(document.getElementById("q19-num").value);
    let limite = Number(document.getElementById("q19-limite").value);
    let out = document.getElementById("out-19");

    if (isNaN(num) || isNaN(limite) || limite <= 0) {
        out.innerHTML = "Valores inválidos.";
        return;
    }

    let res = "";
    for (let i = 1; i <= limite; i++) {
        res += `${num} x ${i} = ${num * i}<br>`;
    }
    out.innerHTML = res;
}

function ex20() {
    let ini = Number(document.getElementById("q20-inicio").value);
    let out = document.getElementById("out-20");

    if (!Number.isInteger(ini) || ini < 0) {
        out.innerHTML = "O valor deve ser um inteiro positivo.";
        return;
    }

    let contagem = [];
    for (let i = ini; i >= 0; i--) {
        contagem.push(i);
    }

    out.innerHTML =
        contagem.join(", ") + "<br><strong>Lançamento Efetuado!</strong>";
}

function ex21() {
    let raw = document.getElementById("q21-lista").value.split(",");
    let out = document.getElementById("out-21");

    let total = 0;
    let qtd = 0;
    let i = 0;

    while (i < raw.length) {
        let valStr = raw[i].trim();
        if (valStr === "-1" || valStr.toLowerCase() === "sair") break;

        let val = Number(valStr);
        if (!isNaN(val) && val >= 0) {
            total += val;
            qtd++;
        }
        i++;
    }

    let media = qtd > 0 ? total / qtd : 0;
    out.innerHTML = `Vendas Válidas: ${qtd} | Total: R$ ${total.toFixed(2)} | Média: R$ ${media.toFixed(2)}`;
}

let tentativasQ22 = 0;
function ex22() {
    const senhaCorreta = "1234";
    const maxTentativas = 3;
    let input = document.getElementById("q22-senha").value;
    let out = document.getElementById("out-22");

    tentativasQ22++;

    if (input === senhaCorreta) {
        out.innerHTML = `Acesso Permitido! (Conseguido em ${tentativasQ22} tentativa(s))`;
        tentativasQ22 = 0;
    } else if (tentativasQ22 >= maxTentativas) {
        out.innerHTML =
            "Acesso Bloqueado! Excedeu o número máximo de tentativas.";
        tentativasQ22 = 0;
    } else {
        out.innerHTML = `Senha Incorreta. Tentativa ${tentativasQ22} de ${maxTentativas}.`;
    }
}

function ex23() {
    let ini = Number(document.getElementById("q23-ini").value);
    let fim = Number(document.getElementById("q23-fim").value);
    let out = document.getElementById("out-23");

    if (ini > fim) {
        let aux = ini;
        ini = fim;
        fim = aux;
    }

    let qtdPares = 0,
        somaPares = 0;
    let qtdImpares = 0,
        somaImpares = 0;

    for (let i = ini; i <= fim; i++) {
        if (i % 2 === 0) {
            qtdPares++;
            somaPares += i;
        } else {
            qtdImpares++;
            somaImpares += i;
        }
    }

    out.innerHTML = `Pares: ${qtdPares} (Soma: ${somaPares}) | Ímpares: ${qtdImpares} (Soma: ${somaImpares})`;
}

function ex24() {
    let num = Number(document.getElementById("q24-num").value);
    let out = document.getElementById("out-24");

    if (num < 0 || !Number.isInteger(num)) {
        out.innerHTML =
            "A entrada não pode ser processada: digite um inteiro não negativo.";
        return;
    }

    let fat = 1;
    for (let i = 2; i <= num; i++) {
        fat *= i;
    }

    out.innerHTML = `Fatorial de ${num} (${num}!) = ${fat}`;
}

function ex25() {
    let raw = document.getElementById("q25-notas").value.split(",");
    let out = document.getElementById("out-25");

    if (raw.length === 0 || raw[0] === "") {
        out.innerHTML = "Insira ao menos uma nota.";
        return;
    }

    let total = 0,
        qtd = 0;
    let aprov = 0,
        rec = 0,
        reprov = 0;
    let maior = -1,
        menor = 11;

    for (let i = 0; i < raw.length; i++) {
        let n = Number(raw[i]);
        if (!isNaN(n) && n >= 0 && n <= 10) {
            total += n;
            qtd++;
            if (n >= 7) aprov++;
            else if (n >= 4) rec++;
            else reprov++;

            if (n > maior) maior = n;
            if (n < menor) menor = n;
        }
    }

    let media = total / (qtd || 1);
    out.innerHTML = `Média: ${media.toFixed(2)} | Aprovados: ${aprov} | Recuperação: ${rec} | Reprovados: ${reprov} | Maior: ${maior} | Menor: ${menor}`;
}

function ex26() {
    let ini = Number(document.getElementById("q26-ini").value);
    let taxa = Number(document.getElementById("q26-taxa").value) / 100;
    let alvo = Number(document.getElementById("q26-alvo").value);
    let out = document.getElementById("out-26");

    if (ini <= 0 || taxa <= 0 || alvo <= ini) {
        out.innerHTML =
            "Valores inválidos para simulação (Evitando laço infinito).";
        return;
    }

    let saldo = ini;
    let periodos = 0;
    let relatorio = "";

    while (saldo < alvo && periodos < 100) {
        periodos++;
        saldo += saldo * taxa;
        relatorio += `Período ${periodos}: R$ ${saldo.toFixed(2)}<br>`;
    }

    out.innerHTML =
        relatorio +
        `<strong>Objetivo atingido em ${periodos} períodos!</strong>`;
}

function ex27() {
    let n = Number(document.getElementById("q27-n").value);
    let out = document.getElementById("out-27");

    if (n <= 0 || !Number.isInteger(n)) {
        out.innerHTML = "Informe um inteiro maior que zero.";
        return;
    }

    let seq = [];
    let t1 = 0,
        t2 = 1;

    for (let i = 1; i <= n; i++) {
        seq.push(`Pos ${i}: ${t1}`);
        let prox = t1 + t2;
        t1 = t2;
        t2 = prox;
    }

    out.innerHTML = seq.join("<br>");
}

function ex28() {
    let num = Number(document.getElementById("q28-num").value);
    let out = document.getElementById("out-28");

    if (num < 2) {
        out.innerHTML = `${num} Não é primo (Menor que 2).`;
        return;
    }

    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    out.innerHTML = ehPrimo
        ? `${num} é um número PRIMO!`
        : `${num} NÃO é primo.`;
}

function ex29() {
    let raw = document.getElementById("q29-notas").value.split(",");
    let out = document.getElementById("out-29");

    let freq = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let soma = 0,
        qtd = 0;

    for (let i = 0; i < raw.length; i++) {
        let nota = Number(raw[i]);
        if (isNaN(nota) || nota < 1 || nota > 5) continue;

        freq[nota]++;
        soma += nota;
        qtd++;
    }

    let media = qtd > 0 ? soma / qtd : 0;
    out.innerHTML = `Média de Satisfação: ${media.toFixed(2)}<br>Frequências: 1: ${freq[1]} | 2: ${freq[2]} | 3: ${freq[3]} | 4: ${freq[4]} | 5: ${freq[5]}`;
}

function ex30() {
    let raw = document.getElementById("q30-ops").value.split(";");
    let out = document.getElementById("out-30");

    let saldo = 0;
    let ent = 0,
        sai = 0;
    let i = 0;

    do {
        if (!raw[i]) break;
        let partes = raw[i].split(",");
        if (partes.length === 2) {
            let tipo = partes[0].trim().toUpperCase();
            let val = Number(partes[1]);

            if (val > 0) {
                if (tipo === "E") {
                    saldo += val;
                    ent++;
                } else if (tipo === "S") {
                    saldo -= val;
                    sai++;
                }
            }
        }
        i++;
    } while (i < raw.length);

    out.innerHTML = `Entradas: ${ent} | Saídas: ${sai} | Saldo Final: R$ ${saldo.toFixed(2)} ${saldo < 0 ? "(NEGATIVO)" : ""}`;
}

let tentativasQ31 = 0;
function ex31() {
    const segredo = 42;
    const max = 5;
    let palpite = Number(document.getElementById("q31-palpite").value);
    let out = document.getElementById("out-31");

    tentativasQ31++;

    if (palpite === segredo) {
        out.innerHTML = `Acertou! O número era ${segredo}. Tentativas usadas: ${tentativasQ31}`;
        tentativasQ31 = 0;
    } else if (tentativasQ31 >= max) {
        out.innerHTML = `Fim de Jogo! Você atingiu o limite de ${max} tentativas.`;
        tentativasQ31 = 0;
    } else if (palpite < segredo) {
        out.innerHTML = `Palpite MAIOR que o segredo! Tentativa ${tentativasQ31}/${max}`;
    } else {
        out.innerHTML = `Palpite MENOR que o segredo! Tentativa ${tentativasQ31}/${max}`;
    }
}

function ex32() {
    let ini = Number(document.getElementById("q32-ini").value);
    let fim = Number(document.getElementById("q32-fim").value);
    let d1 = Number(document.getElementById("q32-d1").value);
    let d2 = Number(document.getElementById("q32-d2").value);
    let out = document.getElementById("out-32");

    if (d1 === 0 || d2 === 0) {
        out.innerHTML = "Divisores não podem ser zero.";
        return;
    }

    let mults = [];
    for (let i = ini; i <= fim; i++) {
        if (i % d1 === 0 && i % d2 === 0) {
            mults.push(i);
        }
    }

    out.innerHTML = `Encontrados (${mults.length}): ${mults.join(", ")}`;
}

function ex33() {
    let tam = Number(document.getElementById("q33-tam").value);
    let char = document.getElementById("q33-char").value || "*";
    let out = document.getElementById("out-33");

    let padrao = "";
    for (let i = 1; i <= tam; i++) {
        for (let j = 1; j <= i; j++) {
            padrao += char;
        }
        padrao += "\n";
    }

    out.textContent = padrao;
}

function ex34() {
    let raw = document.getElementById("q34-leituras").value.split(",");
    let out = document.getElementById("out-34");

    let descartes = 0;
    let soma = 0,
        qtd = 0;

    for (let i = 0; i < raw.length; i++) {
        let val = Number(raw[i]);
        if (isNaN(val) || val < 0 || val > 100) {
            descartes++;
            continue;
        }
        soma += val;
        qtd++;
    }

    let media = qtd > 0 ? soma / qtd : 0;
    out.innerHTML = `Leituras Aceitas: ${qtd} | Descartes: ${descartes} | Média Válida: ${media.toFixed(2)}`;
}

function ex35() {
    let raw = document.getElementById("q35-vetor").value.split(",");
    let notas = [];

    for (let i = 0; i < raw.length; i++) {
        let n = Number(raw[i]);
        if (!isNaN(n)) notas.push(n);
    }

    if (notas.length === 0) return;

    let soma = 0,
        maior = notas[0],
        menor = notas[0];
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
        if (notas[i] > maior) maior = notas[i];
        if (notas[i] < menor) menor = notas[i];
    }

    let media = soma / notas.length;
    let posAcima = [];
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > media) posAcima.push(i);
    }

    document.getElementById("out-35").innerHTML =
        `Média: ${media.toFixed(2)} | Maior: ${maior} | Menor: ${menor} | Pos. Acima da média: [${posAcima.join(", ")}]`;
}

function ex36() {
    let raw = document.getElementById("q36-meses").value.split(",");
    if (raw.length < 12) {
        document.getElementById("out-36").innerHTML =
            "Por favor, digite 12 valores.";
        return;
    }

    let consumos = raw.map(Number);
    let total = 0,
        maior = consumos[0],
        menor = consumos[0];
    let mesMaior = 0,
        mesMenor = 0;

    for (let i = 0; i < 12; i++) {
        total += consumos[i];
        if (consumos[i] > maior) {
            maior = consumos[i];
            mesMaior = i + 1;
        }
        if (consumos[i] < menor) {
            menor = consumos[i];
            mesMenor = i + 1;
        }
    }

    let media = total / 12;
    let mesesAcima = [];
    for (let i = 0; i < 12; i++) {
        if (consumos[i] > media) mesesAcima.push(`Mês ${i + 1}`);
    }

    document.getElementById("out-36").innerHTML =
        `Total Anual: ${total} kWh | Média: ${media.toFixed(1)} kWh | Maior: Mês ${mesMaior} (${maior}) | Menor: Mês ${mesMenor} (${menor}) | Acima da Média: ${mesesAcima.join(", ")}`;
}

function ex37() {
    const lista = [101, 204, 305, 408, 512, 630];
    let cod = Number(document.getElementById("q37-codigo").value);
    let out = document.getElementById("out-37");

    let pos = -1;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === cod) {
            pos = i;
            break;
        }
    }

    if (pos !== -1) {
        out.innerHTML = `Produto ${cod} ENCONTRADO na posição (índice) ${pos}.`;
    } else {
        out.innerHTML = `Código ${cod} NÃO EXISTE no cadastro.`;
    }
}

function ex38() {
    let raw = document.getElementById("q38-vetor").value.split(",");
    let ref = Number(document.getElementById("q38-ref").value);
    let out = document.getElementById("out-38");

    let pos = [];
    for (let i = 0; i < raw.length; i++) {
        if (Number(raw[i]) === ref) pos.push(i);
    }

    if (pos.length > 0) {
        out.innerHTML = `Ocorrências: ${pos.length} | Nas posições: [${pos.join(", ")}]`;
    } else {
        out.innerHTML = `Nenhuma ocorrência do valor ${ref} foi encontrada.`;
    }
}

function ex39() {
    let raw = document.getElementById("q39-vetor").value.split(",");
    let orig = raw.map(Number);
    let pares = [],
        impares = [];

    for (let i = 0; i < orig.length; i++) {
        if (orig[i] % 2 === 0) pares.push(orig[i]);
        else impares.push(orig[i]);
    }

    document.getElementById("out-39").innerHTML =
        `Original: [${orig.join(", ")}]<br>Pares: [${pares.join(", ")}]<br>Ímpares: [${impares.join(", ")}]`;
}

function ex40() {
    let raw = document.getElementById("q40-vetor").value.split(",");
    let semDup = [];

    for (let i = 0; i < raw.length; i++) {
        let item = raw[i].trim();
        let existe = false;
        for (let j = 0; j < semDup.length; j++) {
            if (semDup[j] === item) {
                existe = true;
                break;
            }
        }
        if (!existe) semDup.push(item);
    }

    document.getElementById("out-40").innerHTML =
        `Sem duplicados: [${semDup.join(", ")}]`;
}

function ex41() {
    let orig = document.getElementById("q41-vetor").value.split(",");
    let invertido = [];

    for (let i = orig.length - 1; i >= 0; i--) {
        invertido.push(orig[i].trim());
    }

    document.getElementById("out-41").innerHTML =
        `Original: [${orig.join(", ")}]<br>Invertido: [${invertido.join(", ")}]`;
}

function ex42() {
    let arr = document.getElementById("q42-vetor").value.split(",").map(Number);
    let orig = [...arr];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    document.getElementById("out-42").innerHTML =
        `Antes: [${orig.join(", ")}]<br>Depois (Ordenado): [${arr.join(", ")}]`;
}

function ex43() {
    let pts = document.getElementById("q43-vetor").value.split(",").map(Number);

    for (let i = 0; i < pts.length; i++) {
        for (let j = 0; j < pts.length - 1; j++) {
            if (pts[j] < pts[j + 1]) {
                let t = pts[j];
                pts[j] = pts[j + 1];
                pts[j + 1] = t;
            }
        }
    }

    let top3 = pts.slice(0, 3);
    document.getElementById("out-43").innerHTML =
        `Ranking Top 3: 1º Lugar (${top3[0] || 0} pts) | 2º Lugar (${top3[1] || 0} pts) | 3º Lugar (${top3[2] || 0} pts)`;
}

function ex44() {
    let temps = document
        .getElementById("q44-vetor")
        .value.split(",")
        .map(Number);
    let min = Number(document.getElementById("q44-min").value);
    let max = Number(document.getElementById("q44-max").value);

    let soma = 0,
        abaixo = 0,
        dentro = 0,
        acima = 0;
    for (let i = 0; i < temps.length; i++) {
        soma += temps[i];
        if (temps[i] < min) abaixo++;
        else if (temps[i] <= max) dentro++;
        else acima++;
    }

    let media = soma / (temps.length || 1);
    document.getElementById("out-44").innerHTML =
        `Média: ${media.toFixed(1)}°C | Abaixo do Conforto: ${abaixo} dias | Dentro: ${dentro} dias | Acima: ${acima} dias`;
}

function ex45() {
    let prods = document.getElementById("q45-prods").value.split(",");
    let precos = document
        .getElementById("q45-precos")
        .value.split(",")
        .map(Number);

    if (prods.length !== precos.length) {
        document.getElementById("out-45").innerHTML =
            "Erro: A quantidade de produtos e preços deve ser igual.";
        return;
    }

    let total = 0,
        iCaro = 0,
        iBarato = 0;
    for (let i = 0; i < precos.length; i++) {
        total += precos[i];
        if (precos[i] > precos[iCaro]) iCaro = i;
        if (precos[i] < precos[iBarato]) iBarato = i;
    }

    document.getElementById("out-45").innerHTML =
        `Total: R$ ${total.toFixed(2)} | Mais Caro: ${prods[iCaro]} (R$ ${precos[iCaro]}) | Mais Barato: ${prods[iBarato]} (R$ ${precos[iBarato]})`;
}

let filaQ46 = [];
function ex46_adicionar() {
    let nome = document.getElementById("q46-nome").value;
    if (nome) {
        filaQ46.push(nome);
        document.getElementById("q46-nome").value = "";
        atualizarFilaQ46();
    }
}
function ex46_atender() {
    if (filaQ46.length > 0) {
        let atendido = filaQ46.shift();
        alert("Atendendo cliente: " + atendido);
        atualizarFilaQ46();
    } else {
        alert("Fila Vazia!");
    }
}
function atualizarFilaQ46() {
    document.getElementById("out-46").innerHTML =
        `Fila Atual: [${filaQ46.join(" -> ")}]`;
}

function ex47() {
    let med = document.getElementById("q47-vetor").value.split(",").map(Number);
    let lim = Number(document.getElementById("q47-limite").value);

    let aprovados = [];
    for (let i = 0; i < med.length; i++) {
        if (med[i] > lim) aprovados.push(med[i]);
    }

    let perc = (aprovados.length / med.length) * 100;
    document.getElementById("out-47").innerHTML =
        `Aprovados (${aprovados.length}): [${aprovados.join(", ")}] | Representa ${perc.toFixed(1)}% do total.`;
}

function ex48() {
    let v1 = document.getElementById("q48-v1").value.split(",").map(Number);
    let v2 = document.getElementById("q48-v2").value.split(",").map(Number);

    let maior = 0,
        menor = 0,
        igual = 0;
    let s1 = 0,
        s2 = 0;

    for (let i = 0; i < v1.length; i++) {
        s1 += v1[i];
        s2 += v2[i];
        if (v1[i] > v2[i]) maior++;
        else if (v1[i] < v2[i]) menor++;
        else igual++;
    }

    let m1 = s1 / v1.length,
        m2 = s2 / v2.length;
    document.getElementById("out-48").innerHTML =
        `Comparação Posição x Posição: A>B: ${maior} | A<B: ${menor} | A=B: ${igual}<br>Média A: ${m1.toFixed(1)} | Média B: ${m2.toFixed(1)}`;
}

function ex49() {
    const matriz = [
        [10, 20, 15, 30, 25],
        [5, 12, 18, 20, 15],
        [30, 40, 35, 50, 45],
    ];

    let totalSetores = [0, 0, 0];
    let totalDias = [0, 0, 0, 0, 0];
    let maior = matriz[0][0],
        loc = "Setor 1, Dia 1";

    for (let s = 0; s < matriz.length; s++) {
        for (let d = 0; d < matriz[s].length; d++) {
            let val = matriz[s][d];
            totalSetores[s] += val;
            totalDias[d] += val;
            if (val > maior) {
                maior = val;
                loc = `Setor ${s + 1}, Dia ${d + 1}`;
            }
        }
    }

    document.getElementById("out-49").innerHTML =
        `Totais por Setor: S1: ${totalSetores[0]}, S2: ${totalSetores[1]}, S3: ${totalSetores[2]}<br>Maior Consumo Individual: ${maior} kWh em (${loc})`;
}

function ex50() {
    let raw = document.getElementById("q50-vetor").value.split(",").map(Number);

    let total = 0,
        maior = raw[0],
        menor = raw[0];
    let faixas = { Baixo: 0, Moderado: 0, Alto: 0, MuitoAlto: 0 };

    for (let i = 0; i < raw.length; i++) {
        let c = raw[i];
        total += c;
        if (c > maior) maior = c;
        if (c < menor) menor = c;

        if (c <= 100) faixas.Baixo++;
        else if (c <= 200) faixas.Moderado++;
        else if (c <= 500) faixas.Alto++;
        else faixas.MuitoAlto++;
    }

    let media = total / raw.length;
    let acimaMedia = [];
    for (let i = 0; i < raw.length; i++) {
        if (raw[i] > media) acimaMedia.push(`Unid ${i + 1} (${raw[i]}kWh)`);
    }

    document.getElementById("out-50").innerHTML = `
        <strong>--- PAINEL DE EFICIÊNCIA ENERGÉTICA ---</strong><br>
        Média Geral: ${media.toFixed(1)} kWh | Maior: ${maior} kWh | Menor: ${menor} kWh<br>
        <strong>Distribuição por Faixas:</strong> Baixo: ${faixas.Baixo} | Moderado: ${faixas.Moderado} | Alto: ${faixas.Alto} | Muito Alto (Crítico): ${faixas.MuitoAlto}<br>
        <strong>Unidades com consumo acima da média:</strong> ${acimaMedia.join(", ")}
    `;
}
