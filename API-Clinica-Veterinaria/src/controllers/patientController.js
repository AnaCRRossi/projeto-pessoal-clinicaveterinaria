class PatientController {
    constructor(patientService) {
        this.patientService = patientService;
    }

    async registerPet(req, res) {
        try {
            const petData = req.body;
            const newPet = await this.patientService.addPet(petData);
            res.status(201).json(newPet);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getPet(req, res) {
        try {
            const petId = req.params.id;
            const pet = await this.patientService.findPet(petId);
            if (!pet) {
                return res.status(404).json({ message: 'Pet not found' });
            }
            res.status(200).json(pet);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async registerConsultation(req, res) {
        try {
            const consultationData = req.body;
            const consultation = await this.patientService.addConsultation(consultationData);
            res.status(201).json(consultation);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getPetHistory(req, res) {
        try {
            const petId = req.params.id;
            const history = await this.patientService.getPetHistory(petId);
            if (!history) {
                return res.status(404).json({ message: 'No history found for this pet' });
            }
            res.status(200).json(history);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default PatientController;