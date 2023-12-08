export default interface DoctorsSampleDataModel {
    id: number,
    name: string,
    speciality: string,
    degree: string,
    isSurgeon: boolean,
    reviews: number,
    experience: string,
    satisfaction: number,
    isVarified: boolean,
    isMale: boolean,
    videoConsultation: {
        isAvailable: boolean,
        available: string,
        price: number,
        timeFrom: string,
        timeTo: string,

    },
    otherConsultations: Array<{
            id: number,
            place: string,
            area: string,
            timeFrom: string,
            timeTo: string,
            available: string,
            price: number,
            isAvailable: boolean,
        }>
}