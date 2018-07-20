class Robot {
	//your solution here

  constructor(coordinates=[0,0], bearing='north') {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y) {
    return this.coordinates = [x, y]
  }

  setBearing(dir) {
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(dir)) return this.bearing = dir
    throw new Error("Invalid Robot Bearing");
  }

  place(dirHash) {
    this.setCoordinates(dirHash["x"], dirHash["y"])
    this.setBearing(dirHash["direction"])
  }

  turnRight() {
    if (this.bearing === "north") return this.bearing = "east";
    if (this.bearing === "east") return this.bearing = "south";
    if (this.bearing === "south") return this.bearing = "west";
    if (this.bearing === "west") return this.bearing = "north"
  }

  turnLeft() {
    if (this.bearing === "north") return this.bearing = "west";
    if (this.bearing === "west") return this.bearing = "south";
    if (this.bearing === "south") return this.bearing = "east";
    if (this.bearing === "east") return this.bearing = "north"
  }

  advance() {
    if(this.bearing === "north") return this.coordinates[1] += 1
    if(this.bearing === "south") return this.coordinates[1] -= 1
    if(this.bearing === "east") return this.coordinates[0] += 1
    if(this.bearing === "west") return this.coordinates[0] -= 1
  }

  translateInstructions(arg){
    let newArg = arg.split('')
    for(let i of newArg){
      if(i === "L")  this.turnLeft()
      if(i === "R")  this.turnRight()
      if(i === "A")  this.advance()
    }
  }



}
