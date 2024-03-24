export default function ProfesionalStatement(props: {
    name: String;
    appointmentdetails: string;
    role: string;
    qualification: string;
    experience: string;
    satisfaction: string;
    services: string;
    interest: string;
    
}) {
    return (
        <div className="text-sm m-3">
            <h1 className="font-bold my-5">Professional Statement By {props.name}</h1>
            <h1 className="font-semibold my-5">Appointment Details:</h1>
            <h1>{props.appointmentdetails}</h1>
            <h1 className="font-semibold my-5">Role of Dermatologist:</h1>
            {props.role}
            <div className="flex my-5">
                <h1 className="font-semibold ">Qualifications: </h1>
                {props.qualification}
            </div>

            <div className="flex my-5">
                <h1 className="font-semibold ">Experience:</h1>
                {props.experience}
            </div>

            <div className="flex-col my-5">
                <h1 className="font-semibold ">Patient Satisfaction Score: </h1>
                {props.satisfaction}
            </div>



            <h1 className="font-semibold my-5">Services offered by {props.name}: </h1>
            {props.services}
            <h1 className="font-semibold my-5">Special Interest by {props.name}: </h1>
            {props.interest}
        </div>
    );
}
