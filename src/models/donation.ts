
export class Donation {
    donation_id: number;
    user_id: number = 1;
    amount: number;
    charity_id: number;
    project_id: number = 0;
    frequency: string;
    date: string;
}