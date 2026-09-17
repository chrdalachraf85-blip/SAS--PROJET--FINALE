import {apprenants, nom ,id , ville} from "./data.js"


function normaliserNom(nom){
    nom = nom.toLowerCase();
    nom = nom.trim()
    return nom


}
function validerResultat(){
    let data = {}
    if(jour <= 7 && jour > 0){
        data.jour = jour
    }else{
        return undefined
    }
    if(exercicesTermines <= totalExercices && exercicesTermines >= 0){
        data.exercicesTermines=  exercicesTermines
        data.totalExercices=  totalExercices

    }else{
        return undefined
    }
    if(typeof challengeTermine === "boolean"){
        data.challengeTermine= challengeTermine


    }else {
        return undefined
    }
    
   
        return data
    

}
function ajouterApprenant(id,nom,ville,) {
    nom = normaliserNom(nom)
    for(let objet of apprenants){
        if(objet.id === id){
            return undefined
        }
    }
    apprenants.push({
    id,
    nom,
    ville,
    resultats : []
    })

    return apprenants
}

function ajouterResultat(id,jour,exercicesTermines,totalExercices,challengeTermine){
    let result ;
    for(let objet of  apprenants){
        if(objet.id === id){
           result = validerResultat(jour,exercicesTermines,totalExercices,challengeTermine)
            if(result !== undefined){
                objet.resultats.push(result)
                return objet
            }
        
            
        }
    }
    return undefined
}
function rechercherApprenant(recherche){
    if(typeof recherche === "string"){
        recherche = normaliserNom(recherche)
    }
    for(let objet of apprenants){
        if(objet.id === recherche || objet.nom.includes(recherche) ){
            return objet
        }
    }

    return undefined
}
function calculerProgression(apprenant){
    let returning = {}
    let result  = 0;
    let exercicetotal  = 0;
    let completechallenges = 0;
    let complletjouurs = 0;
    for(let object in apprenant.resultats){

        result += apprenant.resultats[object].exercicesTermines

        exercicetotal += apprenant.resultats[object].totalExercices 

        if(apprenant.resultats[object].challengeTermine === true){
            completechallenges++

        }if(apprenant.resultats[object].jour !== undefined){
            complletjouurs++
        }
        
        
    }
    let progress = 0;
    if(exercicetotal > 0){
        progress = result / exercicetotal * 100
    }
    let level = "";
    if(progress >= 80){
        level = "Solide"
    }else if(progress >= 50){
        level = "En progression"
    }else{
        level = "À renforcer"
    }
    returning.exercicesTermines = result;
    returning.totalExercices = exercicetotal;
    returning.progression = progress;
    returning.challengesTermines = completechallenges;
    returning.joursAvecResultats = complletjouurs;
    returning.niveau = level;

return returning;

}
function filtrerParNiveau(niveau){
    let array =[]
    
    for(let objet of apprenants){
        let progress =calculerProgression(objet)
        if(niveau === progress.niveau){
            array.push(objet)
        }
    }
    return array
}
function trierParProgression(apprenants){
    calculerProgression(apprenant)
}



console.log(normaliserNom(nom))
ajouterApprenant(id,nom,ville)

console.log(apprenants)








