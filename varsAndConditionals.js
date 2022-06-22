/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35

//before 

 if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has a better attack than Jamie')
 } else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie has a better attack than Jon')
 } else {
    console.log('Jon and Jamie have the same attack')
 }
 //Jamie 
 
 let jonSnowHealth = 100
 let jonSnowDefense = 0

 //Jamie attacks first

 if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow has been slain')
 } else {
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
 }

 //increase jon's defense by 25

 jonSnowDefense += 25

 //jamie attacks again

 if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log('Jon Snow has been slain')
 } else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
 }

 if ((jonSnowHealth + 50) >= 100) {
    jonSnowHealth = 100
 } else {
    jonSnowHealth += 50
 }

 console.log(jonSnowHealth)

 //jamie flips a coin to decide whether or not to attack again

  let coinLandsHeads = false
//  if (coinLandsHeads === true) {
//     console.log(`the "fight" continues`)
//  } else {
//     console.log(`Jon is allowed to run away`)
//  }


 // use != to accomplish the same thing

 if (coinLandsHeads !== false) {
    console.log(`the "fight" continues`)
 } else {
    console.log(`Jon is allowed to run away`)
 }

// for loops 
//jamie will attack jon 5 times. show jons health after

// for (let i = 0; i < 5; i++) {
//     if (jonSnowHealth <= 0){
//         console.log(`Jon snow has been slain`);
//     } else {
//         jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
//         console.log(`jon snow's health is ${jonSnowHealth}`);
//     }
   
// }

while (jonSnowHealth > 0) {
    jonSnowHealth -= (jamieLannisterAttack -jonSnowDefense)
    console.log(`jon's health is now ${jonSnowHealth}`);
    if (jonSnowHealth <= 0){
        console.log('jon has been slain');
    }
}


