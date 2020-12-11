/*  Introduction */

console.log("  Assessment Oregon Trail ");
console.log("******************************");

// Main Code Goes Here

/*  The Traveler Class */

class Traveler {
  constructor(name) {
    this.name = name;
    this.foodAmount = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.foodAmount += 2;
  }
  eat() {
    if (this.foodAmount === 0) {
      this.isHealthy = false;
    } else {
      this.foodAmount -= 1;
    }
  }
}

/*  The Wagon Class  */

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }
  join(traveler) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    // Returns true if there is at least one unhealthy person in the wagon.
    // Return false if not.
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
    }
    return false;
  }
  totalFood() {
    let total = 0;
    for (let i = 0; i < this.passengers.length; i++) {
      total += this.passengers[i].foodAmount;
    }
    return total;
  }
}
