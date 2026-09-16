import {apprenants,nom} from "./data.js"


function normaliserNom(nom){
    nom = nom.toLowerCase();
    return nom

}
function ajouterApprenant(id,nom,ville,) {
    nom = normaliserNom(nom)
    apprenants.push({
    id,
    nom,
    ville,
    resultats : []
    })
    return apprenants
}
console.log(normaliserNom(nom))
ajouterApprenant(1,nom,"nador")

console.log(apprenants)
