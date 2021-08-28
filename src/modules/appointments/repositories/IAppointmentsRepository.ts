import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  create(date: IAppointmentsRepository): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
