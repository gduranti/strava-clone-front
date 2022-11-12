export class Activity {
    id: string;
    user: User;
    type: string;
    date: Date;
    location: string;
    title: string;
    description: string;
    distance: NumberValue;
    elevation: NumberValue;
    pace: NumberValue;
    calories: NumberValue;
    heartRate: NumberValue;
    duration: string;
}

export class User {
    id: string;
    name: string;
}

export class NumberValue {
    value: number;
    unit: string;
}
