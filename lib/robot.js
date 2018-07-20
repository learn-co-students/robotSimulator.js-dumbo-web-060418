const Robot = (function(){
	const bearings = ['north','east','south','west']

	return class Robot {
		constructor(){
			this.bearing = 'north'
			this.coordinates = [0, 0]
		}

		

		turnRight() {
			let currentIndex = bearings.indexOf(this.bearing) 
			
			if (currentIndex === bearings.length - 1) {
				this.bearing = bearings[0]
			} else {
				this.bearing = bearings[currentIndex + 1]
			}
		}

		turnLeft() {
			let currentIndex = bearings.indexOf(this.bearing) 
			
			if (currentIndex === 0) {
				this.bearing = bearings[bearings.length - 1]
			} else {
				this.bearing = bearings[currentIndex - 1]
			}

		}

		setCoordinates(x, y) {
			this.coordinates = [x, y]
		}

		setBearing(bearing){
			let input = bearings.find((el) => el === bearing)

			if (input === undefined) {
				throw new Error("Invalid Robot Bearing")
			} else {
				this.bearing = bearing
			}
		}

		place(placeObject) {
			this.setBearing(placeObject.direction)
			this.setCoordinates(placeObject.x, placeObject.y)
		}

		advance() {
			switch (this.bearing) {
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

			for (let l of instructions){
				switch (l) {
					case 'L':
						this.turnLeft()
					break;
					case 'R':
						this.turnRight()
					break;
					case 'A':
						this.advance()
					break;
					default:
						throw new Error("Invalid instruction")
				}
			}
		}	
	}
})()

let quinn = new Robot()