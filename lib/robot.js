class Robot {
	//your solution here
  constructor (coordinates, bearing) {
    this.coordinates = [0, 0]
    this.bearing = "north"

  }
  setCoordinates(coordinate1, coordinate2) {
    this.coordinates = [coordinate1, coordinate2]
  }
  setBearing(bearing) {
    if (bearing === 'north' || bearing === 'south' || bearing === 'west' || bearing === 'east' ) {
      this.bearing = bearing
    } else {
      throw 'Invalid Robot Bearing'
    }

  }

  place(stuff) {
    this.setCoordinates(stuff.x, stuff.y)
    this.setBearing(stuff.direction)
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.bearing = 'east'
    } else if (this.bearing === 'east') {
      this.bearing = 'south'
    } else if (this.bearing === 'south') {
      this.bearing = 'west'
    } else {
      this.bearing = 'north'
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.bearing = 'west'
    } else if (this.bearing === 'east') {
      this.bearing = 'north'
    } else if (this.bearing === 'south') {
      this.bearing = 'east'
    } else {
      this.bearing = 'south'
    }
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1]++
    } else if (this.bearing === 'east'){
      this.coordinates[0]++
    } else if (this.bearing === 'south') {
      this.coordinates[1]--
    } else {
      this.coordinates[0]--
    }
  }

  translateInstructions(command) {
    const commands = command.split('')
    console.log(commands)
    for (const letter of commands) {
      if (letter === 'L') {
        this.turnLeft()
      } else if (letter === 'R') {
        this.turnRight()
      } else if (letter === 'A') {
        this.advance()
      }
    }
    }

}
