//import { ConstructorSansProvider } from "@angular/core";
//import { Services } from "@angular/core/src/view";

class Services {
    vaccine: boolean;
    rapidTest: boolean;
    test: boolean;
}

export class Coords {
    type: string;
    coordinates: number[];
}

export class Location {
    _id: string;
    name: string;
    address: string;
    coords: Coords;
    services: Services;
}