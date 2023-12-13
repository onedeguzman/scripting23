//console log just to test that your JS is linked properly
console.log("Working?");

document.getElementById('story').hidden = true;
document.getElementById('dogBreed').hidden = true;
document.getElementById('catBreed').hidden = true;
document.getElementById('birdBreed').hidden = true;


function petFunction() {
    var x = document.getElementById("petType");


    if (x.value == 'dog') {
        document.getElementById('dogBreed').hidden = false;
        document.getElementById('catBreed').hidden = true;
        document.getElementById('birdBreed').hidden = true;
    }

    else if (x.value == 'cat') {
        document.getElementById('dogBreed').hidden = true;
        document.getElementById('catBreed').hidden = false;
        document.getElementById('birdBreed').hidden = true;
    }

    else if (x.value == 'bird') {
        document.getElementById('dogBreed').hidden = true;
        document.getElementById('catBreed').hidden = true;
        document.getElementById('birdBreed').hidden = false;
    }
}

function generateMadlibs() {
    // BOY'S NAME
    var boyName = document.getElementById('boyName');
    var boyNameItems = document.getElementsByName('boyName');

    for (var index = 0; index < boyNameItems.length; index++) {
        boyNameItems[index].innerHTML = boyName.value;
    }

    //  GIRL'S NAME
    var girlName = document.getElementById('girlName');
    var girlNameItems = document.getElementsByName('girlName');

    for (var index = 0; index < girlNameItems.length; index++) {
        girlNameItems[index].innerHTML = girlName.value;

    }

    //  RELATIONSHIP
    var relationShip = document.getElementById('relationShip');
    var relationShipItems = document.getElementsByName('relationShip');

    for (var index = 0; index < relationShipItems.length; index++) {
        relationShipItems[index].innerHTML = relationShip.value;
    }

    //  ADJECTIVE 1
    var adjective1 = document.getElementById('adjective1');
    var adjective1Items = document.getElementsByName('adjective1');

    for (var index = 0; index < adjective1Items.length; index++) {
        adjective1Items[index].innerHTML = adjective1.value;
    }


    //  COLOR
    var color = document.getElementById('color');
    var colorItems = document.getElementsByName('color');

    for (var index = 0; index < colorItems.length; index++) {
        colorItems[index].innerHTML = color.value;
    }

    //  PET
    var pet = document.getElementById('petType');
    var petValue = pet.value;
    var petImg = document.getElementById('petImage');
    var breedItems = document.getElementsByName('breedType');
    var breedImg = document.getElementById('breedImage');

    var petItems = document.getElementsByName('petType');

    for (var index = 0; index < petItems.length; index++) {
        petItems[index].innerHTML = petValue;
    }

    if (petValue == 'dog') {

        var dogBreed = document.getElementById('dogBreed');
        var breedItems = document.getElementsByName('breedType');

        for (var index = 0; index < breedItems.length; index++) {
            breedItems[index].innerHTML = dogBreed.value;
        }

        if (dogBreed.value == "German Shepherd") {
            breedImg.src = 'images/germanShepherd.jpeg';
            breedImg.alt = 'German Shepherd';
        } else if (dogBreed.value == "Husky") {
            breedImg.src = 'images/husky.jpeg';
            breedImg.alt = 'Husky';
        } else if (dogBreed.value == "Pug") {
            breedImg.src = 'images/pugBlack.jpeg';
            breedImg.alt = 'Pug';
        }

    } else if (petValue == 'cat') {


        var catBreed = document.getElementById('catBreed');


        for (var index = 0; index < breedItems.length; index++) {
            breedItems[index].innerHTML = catBreed.value;
        }

        if (catBreed.value == "American Bobtail") {
            breedImg.src = 'images/americanBobtail.jpg';
            breedImg.alt = 'American Bobtail';
        } else if (catBreed.value == "British Shorthair") {
            breedImg.src = 'images/britishShorthair.jpg';
            breedImg.alt = 'British Shorthair';
        } else if (catBreed.value == "Siamese") {
            breedImg.src = 'images/siameseCat.jpg';
            breedImg.alt = 'Siamese';
        }

    } else if (petValue == 'bird') {


        var birdBreed = document.getElementById('birdBreed');

        for (var index = 0; index < breedItems.length; index++) {
            breedItems[index].innerHTML = birdBreed.value;
        }

        if (birdBreed.value == "Cockatoo") {
            breedImg.src = 'images/cockatoo.jpg';
            breedImg.alt = 'Cockatoo';
        } else if (birdBreed.value == "Owl") {
            breedImg.src = 'images/owl.jpg';
            breedImg.alt = 'Owl';
        } else if (birdBreed.value == "Parrot") {
            breedImg.src = 'images/parrot.jpg';
            breedImg.alt = 'Parrot';
        }
    }



    // GIRL'S PET NAME
    var girlPetName = document.getElementById('girlPetName');
    var girlPetNameItems = document.getElementsByName('girlPetName');

    for (var index = 0; index < girlPetNameItems.length; index++) {
        girlPetNameItems[index].innerHTML = girlPetName.value;
    }


    // BOY'S PET NAME
    var boyPetName = document.getElementById('boyPetName');
    var boyPetNameItems = document.getElementsByName('boyPetName');

    for (var index = 0; index < boyPetNameItems.length; index++) {
        boyPetNameItems[index].innerHTML = boyPetName.value;
    }

    // NOUN-PLACE#2
    var nounPlace2 = document.getElementById('nounPlace2');
    var nounPlace2Items = document.getElementsByName('nounPlace2');

    for (var index = 0; index < nounPlace2Items.length; index++) {
        nounPlace2Items[index].innerHTML = nounPlace2.value;
    }

    // ADJECTIVE#2
    var adjective2 = document.getElementById('adjective2');
    var adjective2Items = document.getElementsByName('adjective2');

    for (var index = 0; index < adjective2Items.length; index++) {
        adjective2Items[index].innerHTML = adjective2.value;
    }


    // VERB
    var verb = document.getElementById('verb');
    var verbItems = document.getElementsByName('verb');

    for (var index = 0; index < verbItems.length; index++) {
        verbItems[index].innerHTML = verb.value;
    }


    // ADJECTIVE-FEELINGS
    var adjectiveFeelings = document.getElementById('adjectiveFeelings');
    var adjectiveFeelingsItems = document.getElementsByName('adjectiveFeelings');

    for (var index = 0; index < adjectiveFeelingsItems.length; index++) {
        adjectiveFeelingsItems[index].innerHTML = adjectiveFeelings.value;
    }


    // NOUN-PLACE#3
    var nounPlace3 = document.getElementById('nounPlace3');

    var nounPlace3Items = document.getElementsByName('nounPlace3');

    for (var index = 0; index < nounPlace3Items.length; index++) {
        nounPlace3Items[index].innerHTML = nounPlace3.value;
    }



    // VERB 2
    var verb2 = document.getElementById('verb2');
    var verb2Items = document.getElementsByName('verb2');

    for (var index = 0; index < verb2Items.length; index++) {
        verb2Items[index].innerHTML = verb2.value;
    }

    // VERB 3
    var verb3 = document.getElementById('verb3');
    var verb3Items = document.getElementsByName('verb3');

    for (var index = 0; index < verb3Items.length; index++) {
        verb3Items[index].innerHTML = verb3.value;
    }


    // ADJECTIVE OR VERB
    var adjectiveVerb = document.getElementById('adjectiveVerb');
    var adjectiveVerbItems = document.getElementsByName('adjectiveVerb');

    for (var index = 0; index < adjectiveVerbItems.length; index++) {
        adjectiveVerbItems[index].innerHTML = adjectiveVerb.value;
    }



    document.getElementById('story').hidden = false;
}

function playagainMadlibs() {
    document.getElementById('boyName').value = '';

    document.getElementById('girlName').value = '';

    document.getElementById('relationShip').value = '';

    document.getElementById('adjective1').value = '';

    document.getElementById('petType').value = '';

    document.getElementById('color').value = '';

    document.getElementById('dogBreed').value = '';

    document.getElementById('catBreed').value = '';

    document.getElementById('birdBreed').value = '';

    document.getElementById('boyPetName').value = '';

    document.getElementById('girlPetName').value = '';

    document.getElementById('nounPlace2').value = '';

    document.getElementById('adjective2').value = '';

    document.getElementById('verb').value = '';

    document.getElementById('adjectiveFeelings').value = '';

    document.getElementById('nounPlace3').value = '';

    document.getElementById('verb2').value = '';

    document.getElementById('verb3').value = '';

    document.getElementById('adjectiveVerb').value = '';

    document.getElementById('breedImage').src = '';
    document.getElementById('breedImage').alt = '';

    document.getElementById('story').hidden = true;
    document.getElementById('dogBreed').hidden = true;
    document.getElementById('catBreed').hidden = true;
    document.getElementById('birdBreed').hidden = true;

}