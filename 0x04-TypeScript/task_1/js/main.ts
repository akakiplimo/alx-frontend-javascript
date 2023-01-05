interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key:string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher1: Teacher = {
  firstName: "Bi",
  lastName: "Asira",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "Nairobi",
  contract: true,
};

//console.log(teacher1);

const director1: Directors = {
  firstName: 'Mike',
  lastName: 'Kip',
  location: 'Keiyo',
  fullTimeEmployee: true,
  numberOfReports: 15,
};

//console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

//console.log(printTeacher);
