import { Address } from "./address.model";
import { Company } from "./company.model";

export interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}