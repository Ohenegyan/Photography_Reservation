export interface UpdateReservation {
   
    Name: string | undefined,
    Email: string | undefined;
    Phone: string | undefined;
    ReservationDate : Date | undefined;
    SessionType : string | undefined;
    ReservationLocation: string | undefined;
    ExpectedNumOfPeople: string | undefined;
    AdditionalInfo: string | undefined;
 }