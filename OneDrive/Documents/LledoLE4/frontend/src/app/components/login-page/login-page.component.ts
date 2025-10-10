import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage implements OnInit{
  form:any = {
    username:null,
    password:null
  }
  constructor(
    private AuthService: AuthServiceService,
    private TokenStorage: TokenStorageService,
    private http: HttpClient,
    private router: Router){ }
  
  ngOnInit(): void {
    if(this.TokenStorage.getToken()){
      this.AuthService.isLoggedIn=true;
      this.router.navigate([this.AuthService.redirectUrl]);
    }
  }
  onSubmit(){
    const {username,password} = this.form;
    this.http.post<LoginPostData>("http://localhost:5049/api/Login/login",{username,
      password}).subscribe(data =>{
        this.TokenStorage.saveToken(data.id_token);
        this.TokenStorage.saveUser(data.id);
        this.router.navigate([this.AuthService.redirectUrl]);
        window.location.reload();
      })
  }

}

export interface LoginPostData{
  id_token: string;
  id: number;
}
