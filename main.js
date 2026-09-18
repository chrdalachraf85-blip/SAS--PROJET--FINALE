import  promptSync from "prompt-sync";
import {apprenants} from "./data.js"
const prompt = promptSync();
import {afficherTableauDeBord,trierParNom,trierParProgression,filtrerParNiveau,calculerProgression,ajouterResultat,rechercherApprenant,ajouterApprenant,validerResultat,normaliserNom} from "./function.js";

console.log("====SAS PROGRESS CONSOLE====")
console.log("1. Afficher le tableau de bord \n2. Afficher la liste des apprenants \n3. Ajouter un apprenant \n4. Consulter un apprenant par identifiant \n5. Ajouter ou modifier le résultat dune journée \n6. Rechercher un apprenant par nom \n7. Filtrer les apprenants par niveau \n8. Trier les apprenants par progression décroissante \n9. Trier les apprenants par ordre alphabétique \n0. Quitter")
let choice; 
do{
    choice  = prompt("Votre choix :");
    switch(choice){
        case "1":
            afficherTableauDeBord()
            break;
        case "2" :
           console.log(apprenants)
        break;
        case "3":
            let id = prompt("Identifiant  : ")
            id = Number(id)
            let nom = prompt("Nom :")
            let ville = prompt("Ville :")
            let add =ajouterApprenant(id,nom,ville)
            if(add === undefined){
                console.log("Identifiant déjà existant :")
            }else {
                console.log("Apprenant ajouté")
            }
        break;
        case "4":
            
            let apprenant = prompt("Quel apprenant recherchez-vous :")
            apprenant = Number(apprenant)
            console.log(rechercherApprenant(apprenant))

        break;
        case "5":
            let idd = prompt("Identifiant : ")
            idd = Number(idd)
            let jour = prompt("Jour : ")
            jour = Number(jour)
            let exercicesTermines = prompt("Exercices terminés : ")
            exercicesTermines = Number(exercicesTermines)
            let totalExercices = prompt("Total exercices : ")
            totalExercices = Number(totalExercices)
            let challengeTermine = prompt("Challenge terminé (oui/non): ")
            challengeTermine = challengeTermine === "oui"
            let addresultant = ajouterResultat(idd, jour, exercicesTermines, totalExercices, challengeTermine)
                    if(addresultant === undefined){
            console.log("Apprenant introuvable ou résultat invalide")
            }else{
            console.log("Résultat ajouté/modifié avec succès")
            }
        break;
        case "6":
            let recherche = prompt("Rechercher un apprenant par ID ou nom : ")
            if(!isNaN(recherche)){
                recherche = Number(recherche)
            }

            console.log(rechercherApprenant(recherche))  
        break;
        case "7":
            let niveau = prompt("Choisissez un niveau (Solide / En progression / À renforcer) : ")
            console.log(filtrerParNiveau(niveau))
        break;
        case "8":
            console.log(trierParProgression())
        break;
        case "9":
            console.log(trierParNom())
        break;
        case "0":
                console.log("Fermeture du programme.")
        break;
        default:
        console.log("Choix invalide")
        break;

    };
    


}while(choice !== "0" )