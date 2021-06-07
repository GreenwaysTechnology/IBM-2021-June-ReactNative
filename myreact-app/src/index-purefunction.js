
//pure functions

//This function is not pure function, which makes side effects
// function updateProfile(profile, city) {
//      //update logic
//     profile.city = city
//     return profile;
// }
//pure function: we should return immutable object - 
//always new object after modification.

// function updateProfile(profile, city) {
// //   profile.city = city
// //return new object
//    return {
//        id:profile.id,
//        name:profile.name,
//        city:city
//    }
// }

function updateProfile(profile, city) {
    //   profile.city = city
    //return new object
    // return {
    //     id: profile.id,
    //     name: profile.name,
    //     city
    // }
    //use object.assign method to replace the above one
    //   return Object.assign({}, profile, { city })
    //use spread operator
    return { ...profile, city }

}

console.log('before update')
let profile = { id: 1, name: 'subramanian', city: 'chennai' }
console.log(profile)

//freeze never allows to change the object in the same mememory.
Object.freeze(profile)

let updatedProfile = updateProfile(profile, 'coimbatore')
console.log('After update')
console.log(updatedProfile)