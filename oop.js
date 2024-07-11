// Base class for Residence
class Residence {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.occupied = false;
    }

    isOccupied() {
        return this.occupied;
    }
}

// Class for DormRoom
class DormRoom extends Residence {
    constructor(name, address, sizeInSquareFeet) {
        super(name, address);
        this.sizeInSquareFeet = sizeInSquareFeet;
    }

    calculateRent() {
        // Example calculation: rent per square foot is $1
        return this.sizeInSquareFeet * 1;
    }
}

// Class for Apartment
class Apartment extends Residence {
    constructor(name, address, numberOfBedrooms) {
        super(name, address);
        this.numberOfBedrooms = numberOfBedrooms;
    }

    calculateRent() {
        // Example calculation: rent per bedroom is $500
        return this.numberOfBedrooms * 500;
    }
}

// Class for Student
class Student {
    constructor(name, studentId, gender) {
        this.name = name;
        this.studentId = studentId;
        this.gender = gender;
        this.residence = null;
    }

    assignResidence(residence) {
        this.residence = residence;
        residence.occupied = true;
    }
}

// Class for MaintenanceRequest
class MaintenanceRequest {
    constructor(description, student) {
        this.description = description;
        this.status = "submitted";
        this.student = student;
        this.assignedEmployee = null;
    }

    updateStatus(status) {
        this.status = status;
    }

    assignEmployee(employee) {
        this.assignedEmployee = employee;
    }
}

// Class for Employee
class Employee {
    constructor(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }
}
