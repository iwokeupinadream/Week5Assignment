class Pet {
    constructor(species, color, petName){
    this.species = species
    this.color = color
    this.petName = petName
    }
}

class Menu {
    constructor() {
        this.pets = []
        this.selectedPet = null
    }

    showMainMenu() {
        return prompt('0. Exit\n1. Adopt a new pet!\n2. View your pets\n3.Release a pet')
    }

    start() {
        let menuSelection = this.showMainMenu()

        while(menuSelection != 0){
            switch(menuSelection){
                case '1':
                    this.adoptPet()
                    break;
                case '2':
                    this.viewPets()
                    break;
                case '3':
                    this.releasePet()
                    break;
                default:
                    menuSelection = 0
            }

            menuSelection = this.showMainMenu()
        }

        alert('Come back again soon!')
    }

        adoptPet() {
            let species = prompt('Please enter the species of pet you would like to adopt:')
            let color = prompt('Please enter the color of ' + species + ' that you would like to adopt:')
            let petName = prompt('Please enter the the name of the ' + color + ' ' + species + '\nthat you would like to adopt:')
            this.pets.push(new Pet(species, color, petName))
        }

        viewPets() {
            let petNameString = ''
            for(let i = 0; i < this.pets.length; i++){
                petNameString += i + ") " + this.pets[i].petName + ' the ' + this.pets[i].color + ' ' + this.pets[i].species + '\n'
            }
            alert(petNameString)
        }

        releasePet() {
            let index = prompt('Please enter the index of the pet that you would like to release:')
            if(index > -1 && index < this.pets.length){
                this.pets.splice(index, 1)
            }
        }
}

let menu = new Menu();
menu.start();