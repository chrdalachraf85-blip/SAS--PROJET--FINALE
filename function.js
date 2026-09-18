import {apprenants} from "./data.js"
export {afficherTableauDeBord,trierParNom,trierParProgression,filtrerParNiveau,calculerProgression,ajouterResultat,rechercherApprenant,ajouterApprenant,validerResultat,normaliserNom}

function normaliserNom(nom){
    nom = nom.toLowerCase();
    nom = nom.trim()
    nom = nom.split(" ")
    let nomdiff = [];
    for(let letter of nom){
        if(letter === ""){
            continue;
        }
        letter = letter[0].toUpperCase() + letter.slice(1)
        nomdiff.push(letter)
    }
    return nom = nomdiff.join(" ")
    


}
function validerResultat(jour, exercicesTermines, totalExercices, challengeTermine){
    let data = {}
    if(jour <= 7 && jour > 0){
        data.jour = jour
    }else{
        return undefined
    }
    if(exercicesTermines <= totalExercices && exercicesTermines >= 0 && totalExercices >= 0){
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
            if(result === undefined){
                return undefined
            }
            let index = objet.resultats.findIndex(function(day){
                return day.jour === jour
            })
            if(index !== -1){
                objet.resultats[index] = result
            }else{
                objet.resultats.push(result)
            }
            return objet
            
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
function calculerProgression(id){
    let apprenant = apprenants.find(function(objet ){
        return objet.id ===id ;
    })
    if(apprenant === undefined){
        return undefined
    }
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
        let progress =calculerProgression(objet.id)
        if(niveau === progress.niveau){
            array.push(objet)
        }
    }
    return array
}
function trierParProgression(){
    apprenants.sort(function(a, b) {
    let progressA = calculerProgression(a.id)
    let progressB = calculerProgression(b.id)
    return progressB.progression - progressA.progression
})
return apprenants
}
function afficherTableauDeBord(){
    let length = apprenants.length
    let averageprogression = 0
    let solide = 0
    let enprogression = 0
    let renforcer = 0
    for(let object of apprenants){
        let progress =  calculerProgression(object.id)
        if(length > 0){
            averageprogression += progress.progression / length

        }

        if(progress.niveau === "À renforcer"){
            renforcer++
        }else if(progress.niveau === "En progression"){
            enprogression++
        }else if(progress.niveau === "Solide"){
            solide++
        }
    }
    console.log(`Total apprenants : ${length}`)
    console.log(`Progression moyenne : ${averageprogression}%`)
    console.log(`Solide : ${solide}`)
    console.log(`En progression : ${enprogression}`)
    console.log(`À renforcer : ${renforcer}`)

    let tier = trierParProgression()
    for(let object of tier){
    let progress = calculerProgression(object.id)
    let challengemissing = []
    let joursmissing = []
    for(let jour = 1; jour <= 7; jour++){
        let exixte = object.resultats.find(function(day){
            return day.jour === jour
        })
        if(exixte === undefined){
            joursmissing.push(jour)
        }
    } 
    for(let challenge of object.resultats){
        if(challenge.challengeTermine === false){
            challengemissing.push(challenge.jour)
        }
    }   
    
   
    
    
    console.log(`Jours sans résultat : ${joursmissing}`)
    console.log(`${object.nom} : ${progress.progression}%`)
    console.log(`Challenges non terminés : ${challengemissing}`)
    }

}

function trierParNom(){

    apprenants.sort(function(a, b){
        return a.nom.localeCompare(b.nom)
    })

    return apprenants
}










