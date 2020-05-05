import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, zip, of } from 'rxjs';

import { Person } from '../types/person.type';
import { Starship } from '../types/starship.type';
import { shareReplay, retry, retryWhen, switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestMakerService {

  private readonly APIAddressRoot = 'https://swapi.dev/api/';
  private readonly PersonAPISuffix = 'people/';
  private readonly StarshipAPISuffix = 'starships/';
  private readonly ArbitraryHighestApiNumber = 100;

  constructor(private http: HttpClient) { }

  private getRN(max) {
    return Math.floor(Math.random()*(max+1)+1);
  }

  private makeRequest<T>(address: string, max: number): Observable<T[]> {
    return of(address).pipe(
      switchMap((address) => 
        zip(
          this.http.get<T>(address+this.getRN(max)),
          this.http.get<T>(address+this.getRN(max))
        )
      ),
      retryWhen(error => error)
    )
  }
  
  // TODO: Make the request types determined by an enum switchcase

  public getPeopleToCompare(): Observable<Person[]> {
    const requestAddress = this.APIAddressRoot + this.PersonAPISuffix;
    return this.makeRequest<Person>(requestAddress, this.ArbitraryHighestApiNumber)
  }

  public getStarshipsToCompare(): Observable<Starship[]> {
    const requestAddress = this.APIAddressRoot + this.StarshipAPISuffix;
    return this.makeRequest<Starship>(requestAddress, this.ArbitraryHighestApiNumber);
  }

}