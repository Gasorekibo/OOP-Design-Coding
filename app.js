/*
    Base class Resident which other class should inherit from
    it has common property like name, address, and boolean occupied
 */
class Residence {
  constructor(name, address, occupied = false) {
    this.name = name;
    this.address = address;
    this.occupied = occupied;
  }
}

// Subclass for Dorm Room, Inheriting from Residence class with additional size property
class DormRoom extends Residence {
  constructor(name, address, size, occupied = false) {
    super(name, address, occupied);
    this.size = size;
  }
}

// Subclass for Apartment Inheriting from Residence class with additional numberOfBedrooms property
class Apartment extends Residence {
  constructor(name, address, numberOfBedrooms, occupied = false) {
    super(name, address, occupied);
    this.numberOfBedrooms = numberOfBedrooms;
  }
}

/*
    Class For Student it property and method including name, id, gender and resident and method like assignResidence which take one parameter residence and assign it and change occupied boolean to true to indicate that the room is occupied.
 */
class Student {
  constructor(name, studentId, gender, residence = null) {
    this.name = name;
    this.studentId = studentId;
    this.gender = gender;
    this.residence = residence;
  }
  // AssignResidence Method that assign residence to student and mark it as occupied
  assignResidence(residence) {
    this.residence = residence;
    residence.occupied = true;
  }
}

// Class for Maintenance Request
class MaintenanceRequest {
  constructor(description, student, status = "submitted", employee = null) {
    this.description = description;
    this.student = student;
    this.status = status;
    this.employee = employee;
  }

  assignEmployee(employee) {
    this.employee = employee;
  }

  updateStatus(status) {
    this.status = status;
  }
}

// Example usage
/*
    
 */

const dormRoom1 = new DormRoom("Dorm A", "123 University St", 200);
const apartment1 = new Apartment("Apt B", "456 University St", 3);

const student1 = new Student("Alice", "S001", "Female");
student1.assignResidence(dormRoom1);

const maintenanceRequest1 = new MaintenanceRequest("Leaky faucet", student1);
maintenanceRequest1.assignEmployee("John Doe");
maintenanceRequest1.updateStatus("in progress");

console.log(dormRoom1);
console.log(apartment1);
console.log(student1);
console.log(maintenanceRequest1);
