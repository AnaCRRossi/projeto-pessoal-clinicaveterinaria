class PatientService {
    constructor(patientModel) {
        this.patientModel = patientModel;
    }

    async addPet(petData) {
        const newPet = new this.patientModel(petData);
        return await newPet.save();
    }

    async findPet(petId) {
        return await this.patientModel.findById(petId);
    }

    async getPetHistory(petId) {
        const pet = await this.patientModel.findById(petId);
        return pet ? pet.history : null;
    }
}

export default PatientService;