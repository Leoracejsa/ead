import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {LoginPage} from '../../pages/login/login';



@Injectable()
export class UsersProvider {
  private API_URL = 'https://bb-api-uni.herokuapp.com/';

  // private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient) {}

  // createUsers(userUniversityId: number, firstName: string, lastName: string, userDocument: string, 
  //   userBornDate: string, userEmail: string, userPassword: string, userFunction, string, courseId: number){
  //     return new Promise((resolve, reject) => {
  //       var data = {
  //         userUniversityId: userUniversityId,
  //         firstName: firstName,
  //         lastName: lastName,
  //         userDocument: userDocument,
  //         userBornDate: userBornDate,
  //         userEmail: userEmail,
  //         userPassword: userPassword,
  //         userFunction: userFunction,
  //         courseId: courseId
  //       };

  //       this.http.post(this.API_URL, + 'users', data)
  //         .subscribe((result: any) => {
  //           resolve(result.json());
  //         },
  //       (error) => {
  //         reject(error.json());
  //       })
  //     });
  // }


  login(userUniversityId: number, userPassword: string){
      return new Promise((resolve, reject) => {
        var data = {
          userUniversityId: userUniversityId,
          userPassword: userPassword
        };

        this.http.post(this.API_URL, + 'auth', data)
          .subscribe((result: any) => {
            resolve(result.json());
          },
        (error) => {
          reject(error.json());
        })
      });
  }



  getAll(userUniversityId: number){
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users?' + userUniversityId;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json())
        },
      (error) => {
        reject(error.json());
      })
    });
}


get(userUniversityId: number){
  return new Promise((resolve, reject) => {
    let url = this.API_URL + 'users'

    this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json())
      },
    (error) => {
      reject(error.json());
    })
  });
}


}
