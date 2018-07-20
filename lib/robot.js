// The robot factory manufactures robots that have three possible movements:
//
// * turn right
// * turn left
// * advance
//
// Robots are placed on a hypothetical infinite grid, facing a particular direction (north, east, south, or west) at a set of `[x, y]` coordinates, e.g. `[3,8]`.

// let directions = ['north','south','east','west']
const directions = ['north','east','south','west']
class Robot {


  constructor(coordinates=[0,0], bearing='north'){
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(num1, num2){
    return this.coordinates = [num1, num2];
  }
  setBearing(dir){

    if (directions.indexOf(dir.toLowerCase()) > -1 ){
      return this.bearing = dir;
    }else {
      throw "Invalid Robot Bearing"
    }
  }

  place(objDestination){
    this.setCoordinates(objDestination["x"], objDestination["y"])
    this.setBearing(objDestination["direction"])
  }

  turnRight() {
    // if (this.bearing === 'north') {
    //   this.setBearing('east');
    // } else if (this.bearing === 'east') {
    //     this.setBearing('south');
    // } else if (this.bearing === 'south') {
    //     this.setBearing('west')
    // } else {
    //     this.setBearing('north')
    // }
  if (directions.indexOf(this.bearing.toLowerCase()) !== directions.length-1 ) {
    this.setBearing(directions[directions.indexOf(this.bearing.toLowerCase())+1])
  } else {
    this.setBearing('north')
  }
}

turnLeft() {
if (directions.indexOf(this.bearing.toLowerCase()) !== 0 ) {
  this.setBearing(directions[directions.indexOf(this.bearing.toLowerCase())-1])
} else {
  this.setBearing('west')
}
}

advance() {
  if (this.bearing === 'north') {
   this.setCoordinates(this.coordinates[0], (this.coordinates[1])+1)
 } else if (this.bearing === 'east') {
    this.setCoordinates((this.coordinates[0])+1, this.coordinates[1])
 } else if (this.bearing === 'south') {
     this.setCoordinates(this.coordinates[0], (this.coordinates[1])-1)
 } else {
   this.setCoordinates((this.coordinates[0])-1, this.coordinates[1])
}
}

translateInstructions(letter) {
  if (letter.length === 1)
  switch (letter) {
    case 'R':
      this.turnRight()
      break;
    case 'L':
      this.turnLeft()
      break;
    case 'A':
      this.advance()
      break;
    } else {
      for (let i of letter) {
        switch (i) {
          case 'R':
            this.turnRight()
            break;
          case 'L':
            this.turnLeft()
            break;
          case 'A':
            this.advance()
            break;
      }
    }
}

}


}
