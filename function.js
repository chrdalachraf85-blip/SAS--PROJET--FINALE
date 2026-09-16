import {apprenants} from "./data.js"
function normaliserNom(nom){
    nom 

}
function ajouterApprenant(id,nom,ville,) {
    apprenants.push({
    id,
    nom,
    ville,
    resultats : []
    })
    return apprenants
}
ajouterApprenant(1,"achraf","nador")

console.log(apprenants)