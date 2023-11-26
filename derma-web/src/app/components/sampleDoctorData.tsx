const sampleDoctorData = {
    'doctors': [
        {
            id: 1,
            name: "Dr. Umer Mushtaq",
            speciality: "Dermatologist",
            degree: "MBBS, FCPS (Dermatology), CAAAM (USA)",
            isSurgeon: true,
            reviews: 4500,
            experience: "15 Years",
            satisfaction: 97,
            isVarified: true,
            isMale: true,
            videoConsultation: {
                isAvailable: true,
                available: "12 Dec 2020",
                price: 2000,
                timeFrom: "03:00 PM",
                timeTo: "05:00 PM",

            },
            otherConsultations: [
                {
                    id: 0,
                    place: "Lahore",
                    area: "Chughtai Medical Centre, DHA Phase 4",
                    timeFrom: "10:00 AM",
                    timeTo: "01:00 PM",
                    available: "12 Dec 2020",
                    price: 2000,
                    isAvailable: true,
                },
            ]
        },

        {
            id: 2,
            name: "Dr. Amna",
            speciality: "Dermatologist",
            degree: "MBBS, FCPS (Dermatology), CAAAM (USA)",
            isSurgeon: false,
            reviews: 1500,
            experience: "1 Years",
            satisfaction: 60,
            isVarified: false,
            isMale: false,
            videoConsultation: {
                isAvailable: true,
                price: 1000,
                available: "12 Dec 2020",
                timeFrom: "03:00 PM",
                timeTo: "05:00 PM",

            },
            otherConsultations: [
                {
                    id: 0,
                    place: "Lahore",
                    area: "Chughtai Medical Centre, DHA Phase 4",
                    timeFrom: "10:00 AM",
                    timeTo: "01:00 PM",
                    price: 2000,
                    available: "12 Dec 2020",
                    isAvailable: true,
                }
            ]
        }
    ]
}


export default sampleDoctorData;