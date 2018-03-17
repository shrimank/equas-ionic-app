import { Student } from '../models/student.model';

export class AttendanceService {

    attendance :Student[] = [];


    addStudentAttendance(students:Student[]){
        this.attendance.push(...students);
    }

    getStudentAttendance(){
        return this.attendance;
    }

    


}