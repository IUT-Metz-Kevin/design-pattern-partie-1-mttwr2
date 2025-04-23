/*
Design pattern Singleton : on a bien le constructeur privé, l'attribut static de l'instance
et la méthode getInstance qui permet de ne pas créer plusieurs instances.

*/

class _Config {
    private static _instance : _Config 
    
    //gameplay
    public _difficulty: string
    public _language: string  

    //audio
    public _musicVolume: number
    public _soundEffectVolume: number

    //graphics
    public _resolution: string
    public _graphics: string


    private constructor() {
        this._difficulty = "Easy"
        this._language = "English"
        this._musicVolume = 50
        this._soundEffectVolume = 50
        this._resolution = "1920x1080"
        this._graphics = "High"
    }

    public static getInstance() {
        if (this._instance == null) {
            const _instance = new _Config 
        }
        return this._instance
    }

    public get difficulty(): string {
        return this._difficulty
    } 

    public set difficulty(d: string) {
        this._difficulty = d
    }

    // etc.. pour les autres paramètres.

}
