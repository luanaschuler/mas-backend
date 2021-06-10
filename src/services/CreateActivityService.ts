import {getRepository } from 'typeorm';
import { Activy } from '../models/Activy';

interface ActivityData {
    name: string;
    activy_date: string;
    grade: number;
    courseUnitId: string;
}

class CreateActivityService{

    async execute({name, activy_date, grade, courseUnitId}: ActivityData) {

        const activyRepository = getRepository(Activy);

        const activy = activyRepository.create({
            name,
            activy_date,
            grade,
            courseUnitId 
        });

        await activyRepository.save(activy);

        return activy;
        
    }

}

export {CreateActivityService}