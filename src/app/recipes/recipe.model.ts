export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}


/*
This file is created so that this model can be re-used
constructor is added so that can just add new Recipe() accordingly
public in front of the name, desc and imagepath so that it is a public thing
 */