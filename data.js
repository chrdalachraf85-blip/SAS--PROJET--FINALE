export { apprenants, nom ,id ,  ville };
import  promptSync from "prompt-sync";
const apprenants = [
{
id: 1,
nom: "Sara Dev",
ville: "Nador",
resultats: [
{ jour: 1, exercicesTermines: 18,
totalExercices: 20, challengeTermine: true },
{ jour: 2, exercicesTermines: 14,
totalExercices: 20, challengeTermine: false }
]
},
]

const prompt = promptSync();

let nom = prompt("Enter your name: ");
let id = prompt("Enter your id: ");
let ville = prompt("Enter your ville: ");

