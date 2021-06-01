import {getRepository } from 'typeorm';
import { Activy } from '../models/Activy';

interface ActivityData {
    name: string;
    activy_date: string;
    course_unit_id: string;
}

class CreateActivityService{

    public async execute({name, activy_date, course_unit_id}: ActivityData):Promise<Activy> {

        const activitiesRepository = getRepository(Activy);

        const activity = activitiesRepository.create({
            name,
            activy_date,
            course_unit_id 
        });

        await activitiesRepository.save(activity);

        return activity;
        
    }

}

export {CreateActivityService}