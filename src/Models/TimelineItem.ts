export class TimelineItem {
    date: string;
    role?: string;
    companyOrInstitution?: string;
    details?: string;

    constructor(date: string, role?: string, companyOrInstitution?: string, details?: string) {
        this.date = date;
        this.role = role;
        this.companyOrInstitution = companyOrInstitution;
        this.details = details;
    }
}