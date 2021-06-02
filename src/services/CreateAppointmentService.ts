import { startOfHour } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import Appointment from '../models/Appointment';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: Request): Appointment {
    const appointmetnDate = startOfHour(date);

    const findAppointmentInSameDate =
      this.appointmentsRepository.findByDate(appointmetnDate);

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmetnDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;