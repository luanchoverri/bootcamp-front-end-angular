export class Task {
    private _id: number;
    private _title: string;
    private _description: string;
    private _checked: boolean;

    constructor( id: number,  title: string, description: string) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._checked = false;
    }

    public get id(): number {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    public get isChecked(): boolean {
        return this._checked;
    }

    public get description(): string {
        return this._description;
    }

    public set title(newTitle: string) {
        this._title = newTitle;
    }

    public set description(newDescription: string) {
        this._description = newDescription;
    }

    public setChecked(value:boolean): void {
        this._checked = value;
    }

  

    
}