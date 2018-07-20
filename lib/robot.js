const Robot = (function(){
  const bearings = ['north', 'east', 'south', 'west']

  return class Robot {
  	constructor(){
      this.bearing = 'north'
      this.coordinates = [0, 0]
    }

    setCoordinates(x, y) {
      this.coordinates = [x, y]
    }

    setBearing(input) {
      let bearing = bearings.find(el => el === input)

      if(bearing === undefined){
        throw new Error("Invalid robot bearing")
      } else {
        this.bearing = bearing
      }
    }

    place(obj) {
      this.setBearing(obj.direction)
      this.setCoordinates(obj.x, obj.y)
    }

    turnRight() {
      let currentIndex = bearings.indexOf(this.bearing)

      if (currentIndex === bearings.length - 1){
        this.bearing = bearings[0]
      } else {
        this.bearing = bearings[currentIndex + 1]
      }
    }

    turnLeft() {
      let currentIndex = bearings.indexOf(this.bearing)

      if (currentIndex === 0){
        this.bearing = bearings[bearings.length - 1]
      } else {
        this.bearing = bearings[currentIndex - 1]
      }
    }

    advance() {
      switch(this.bearing){
        case 'north':
          this.coordinates[1] += 1
          break;

        case 'south':
          this.coordinates[1] -= 1
          break;

        case 'east':
          this.coordinates[0] += 1
          break;

        case 'west':
          this.coordinates[0] -= 1
          break;
      }
    }

    translateInstructions(string) {
      let instructions = string.toUpperCase().split("")

      for(let el of instructions) {
        switch(el){
          case 'L':
            this.turnLeft()
            break;

          case 'R':
            this.turnRight()
            break;

          case 'A':
            this.advance()
            break;
        }
      }
    }
  }
})()
