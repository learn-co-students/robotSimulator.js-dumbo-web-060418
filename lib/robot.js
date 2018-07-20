class Robot {
	//your solution here
  constructor(bearing = 'north', coordinates = [0,0]){
    this.bearing = bearing; //'north'
    this.coordinates = coordinates; //[0,0]
  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }


  setBearing(dir){
    const err = new Error('Invalid Robot Bearing')
    if ((dir === 'north') || (dir === 'east') || (dir === 'south') || (dir === 'west')){
      this.bearing = dir;
    }
    else{
      throw err;
    }
  }

  place(obj){
    this.setCoordinates(obj['x'], obj['y']);
    this.setBearing(obj['direction']);
  }

  turnRight(){
    if (this.bearing === 'north'){
      this.bearing = 'east'
    }
    else if(this.bearing === 'east'){
      this.bearing = 'south'
    }
    else if(this.bearing === 'south'){
      this.bearing = 'west'
    }
    else {
      this.bearing = 'north'
    }
  }

  turnLeft(){
    if (this.bearing === 'north'){
      this.bearing = 'west'
    }
    else if(this.bearing === 'east'){
      this.bearing = 'north'
    }
    else if(this.bearing === 'south'){
      this.bearing = 'east'
    }
    else {
      this.bearing = 'south'
    }
  }

  advance(){
    if (this.bearing === 'north'){
      this.coordinates[1] += 1
    }
    else if(this.bearing === 'east'){
      this.coordinates[0] += 1
    }
    else if(this.bearing === 'south'){
      this.coordinates[1] -= 1
    }
    else {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(str){
    let instructions = str.split('');
    for (let i of instructions){
      if (i === 'L'){
        this.turnLeft()
      }
      else if (i === 'R'){
        this.turnRight()
      }
      else if (i === 'A'){
        this.advance()
      }
    }
  }
}
