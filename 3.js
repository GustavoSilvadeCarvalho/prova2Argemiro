class Node {
    constructor(value) {
        this.value = value;
        this.left = null; 
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this._insertNode(currentNode.left, newNode);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this._insertNode(currentNode.right, newNode);
            }
        }
    }

    inOrderTraverse(callback) {
        this._inOrderTraverseNode(this.root, callback);
    }

    _inOrderTraverseNode(node, callback) {
        if (node) {
            this._inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this._inOrderTraverseNode(node.right, callback);
        }
    }
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

const bst = new BST();

students.forEach(student => bst.insert(student));

console.log("Nomes em ordem alfabética:");
bst.inOrderTraverse(name => console.log(name));
