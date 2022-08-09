import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Types } from '../models/types';

@Injectable ({
    providedIn: 'root'
})
export class TypesServices{
    private apiURL!: string;
    constructor(private htpp: HttpClient) {}

    getTypes(): Observable<Types[]>{
        
    }
}