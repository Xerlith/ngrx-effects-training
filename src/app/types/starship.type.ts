import { Contestant } from './contestant.type';

export interface Starship extends Contestant {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: number;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: number;
    starship_class: string;
    pilots: any[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}