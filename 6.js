function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function quick(array, left, right) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quick(array, left, index - 1);
        }
        if (index < right) {
            quick(array, index, right);
        }
    }
    return array;
}

function partition(array, left, right) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

const students = [
    "LEONARDO VINÍCIUS G. HUBERT",
    "WILLIAM SILVA DOS REIS",
    "JOAO VITOR F. M. ROCHA",
    "CAIO HENRIQUE F. DE SOUZA",
    "ERIC VINICIUS DA S. MENEGON",
    "DANIEL GALVAO M. DA SILVA",
    "GIOVANI DE BIAGI ALVES",
    "VITOR CARDOSO DA CRUZ",
    "GUSTAVO SILVA DE CARVALHO",
    "HOSANA AZEVEDO PIRES",
    "NATHAN FERRACINI BATISTA",
    "JOAO PEDRO SOUZA SILVA",
    "DANIEL BRITO DA SILVA JUNIOR",
    "ARTHUR DAVI GOMES",
    "ROBSON ALAN MANTOVANI",
    "MARCELO HENRIQUE REDUZINO",
    "ADRIANO DOS SANTOS",
    "MATHEUS HENRIQUE A. V. NEVES",
    "PEDRO HENRIQUE B. SANTOS",
    "RAMON GODINHO",
    "GRAZIELLA SOUZA",
    "RODRIGO MORAES DE S. GARCIA",
    "BRUNO HENRIQUE Q. GARCIA"
];

const sortedStudents = quick(students, 0, students.length - 1);

console.log("Nomes ordenados:");
sortedStudents.forEach(name => console.log(name));
