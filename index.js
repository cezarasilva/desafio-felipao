/* Desafio proposto pelo Felipao */

/*Cria uma variavel para armazenar o nome e a quantidade de experiencia (XP) de um hério, depois utilize uma estrutura de decisao para apresentar alguma das mensagens abaixo: */

/*
se XP for menor do que 1.000 = Ferro
se XP for entre 1.001 e 2.000 = Bronze
se XP for entre 2001 e 5.000 = Prata
se XP for entre 6.001 e 7.000 = Ouro
se XP for entre 7.001 e 8.000 = Platina Diamante
se XP for entre 8.001 e 9.000 = Ascendente
se XP for entre 9.001 e 10.000 = Imortal 
se XP for maior ou igual a 10.001 = Radiante


*/

let pessoas = [
    { nome: "João da Silva", XP: 800 },     // Ferro
    { nome: "Cezar Antonio", XP: 1203 },    // Bronze
    { nome: "Maria Oliveira", XP: 3500 },   // Prata
    { nome: "Lucas Souza", XP: 6500 },      // Ouro
    { nome: "Fernanda Lima", XP: 7200 },    // Platina Diamante
    { nome: "Ricardo Alves", XP: 8500 },    // Ascendente
    { nome: "Patrícia Gomes", XP: 9800 },   // Imortal
    { nome: "Carlos Pereira", XP: 12050 }   // Radiante
];

for (let pessoa of pessoas) {

    let nivel = "";

    switch (true) {

        case (pessoa.XP <= 1000):
            nivel = "Ferro";
            break;
        case (pessoa.XP <= 2000):
            nivel = "Bronze";
            break;
        case (pessoa.XP <= 5000):
            nivel = "Prata";
            break;
        case (pessoa.XP <= 7000):
            nivel = "Ouro";
            break;
        case (pessoa.XP <= 8000):
            nivel = "Platina Diamante";
            break;
        case (pessoa.XP <= 9000):
            nivel = "Ascendente";
            break;
        case (pessoa.XP <= 10000):
            nivel = "Imortal";
            break;
        case (pessoa.XP > 10000):
            nivel = "Radiante";
            break;
    }

    console.log(`Você ${pessoa.nome} é de nível ${nivel}`);
}
