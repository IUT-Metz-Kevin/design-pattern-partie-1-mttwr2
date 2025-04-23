/*
Pour le design pattern composite, on retrouve bien la structure hiérarchique, où tout part d'une interface
sur laquelle les différents éléments qui composent l'arborescence se basent.
*/

interface IComposant {
    afficher(indentation: number): void 
    
}

class Employe implements IComposant {
    private _nom: string

    constructor(nom: string) {
        this._nom = nom
    }

    afficher(indentation: number): void {
      console.log(" ".repeat(indentation) + this._nom)
    }
}

class Departement implements IComposant {
    private _nom: string 
    private _enfants!: IComposant[]

    constructor(nom: string) {
        this._nom = nom
    }

    ajouter(composant: IComposant): void {
        this._enfants.push(composant)
    }

    afficher(indentation: number): void {
      console.log(" ".repeat(indentation) + this._nom)
      for(const element of this._enfants) {
        element.afficher(indentation + 1)
      }
    }
}