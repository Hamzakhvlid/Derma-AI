
import Arriana from './arriana.png';
import Chance from './chance.png';
import Gateme from './gateme.png';
import Theodat from './theodat.png';
import Doctor from '../datatypes/doctor';
const doctorsData: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Smith',
      specialization: 'Cardiology',
      email: 'drsmith@example.com',
      phoneNumber: '123-456-7890',
      imgUrl : Arriana.src  },
    {
      id: 2,
      name: 'Dr. Johnson',
      specialization: 'Neurology',
      email: 'drjohnson@example.com',
      phoneNumber: '234-567-8901',
      imgUrl : Chance.src
    },
    {
      id: 3,
      name: 'Dr. Williams',
      specialization: 'Orthopedics',
      email: 'drwilliams@example.com',
      phoneNumber: '345-678-9012',
      imgUrl : Gateme.src
    },
    {
      id: 4,
      name: 'Dr. Jones',
      specialization: 'Pediatrics',
      email: 'drjones@example.com',
      phoneNumber: '456-789-0123',
      imgUrl : Theodat.src
    },
   
  ];

  export default doctorsData;