/*
Design Pattern Adaptateur 

On créer une classe pour chaque composant que l'on souhaite adapter, ainsi qu'une classe adaptateur 
à chaque fois (ici, 1 par périphérique, manette, manette et clavier)

C'est la classe adaptateur qui sera appelée par la suite puisque c'est elle qui fait le lien entre
le périphérique et l'interface commune.



*/

interface ControlerActions {
    sauter(): void ;
    attaquer(): void;
    interargir(): void;
  }

class ManettePS5 {
    sauter(): void{ 
        console.log("Appuyer sur X")
    };
    attaquer(): void{
        console.log("Apuyer sur O")
     };
    interargir(): void{ 
        console.log("Appuyer sur triangle")
    };

}

class ManettePS5Adaptateur implements ControlerActions {
    private readonly _manettePS5: ManettePS5

    constructor(manette: ManettePS5) {
        this._manettePS5 = manette 
    }

    sauter(): void {
      this._manettePS5.sauter()
    }

    attaquer(): void {
      this._manettePS5.attaquer()
    }

    interargir(): void {
      this._manettePS5.interargir()
    }

}