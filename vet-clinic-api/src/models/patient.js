class Patient {
    constructor(id, name, species, breed, age, consultationHistory = []) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.breed = breed;
        this.age = age;
        this.consultationHistory = consultationHistory;
    }

    addConsultation(consultation) {
        this.consultationHistory.push(consultation);
    }

    getConsultationHistory() {
        return this.consultationHistory;
    }
}

module.exports = Patient;