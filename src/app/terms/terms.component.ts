import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecaptchaErrorParameters } from "ng-recaptcha";

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.isBot = false;
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    this.isBot = true;
  }


  ngOnInit(): void {
  }
  isBot: boolean = true;
  data: any = {};
  name1: boolean = true;
  name2: boolean = false;
  mobile1: boolean = true;
  mobile2: boolean = false;
  email1: boolean = true;
  email2: boolean = false;
  message1: boolean = true;
  message2: boolean = false;
  constructor(private http: HttpClient) { }
  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  sendContact() {
    var valid = this.validateContact();
    if (valid) {
      if (this.isBot) {
        alert("please select Captcha!");
        return;
      }
      this.http.post<any>('http://localhost:8080/vector/wp-content/themes/vector4/contact_mail.php', this.data)
        .subscribe()
    }

    // if (valid) {
    //     jQuery.ajax({
    //         url: "http://localhost:8080/vector/wp-content/themes/vector4/contact_mail.php",
    //         data: 'userName=' + jq(".fname").val() + '&userEmail=' + jq(".femail").val() + '&phone=' + jq(".fmobile").val() + '&content=' + jq(".fmessage").val(),
    //         type: "POST",
    //         success: function(data) {
    //             jq("#mail-status").html(data);
    //         },
    //         error: function() {}
    //     });
    // }
  }
  validateContact() {
    var valid = true;

    if (!this.data?.name) {
      this.name1 = false; this.name2 = true;
      valid = false;
    }
    if (!this.data?.mobile) {
      this.mobile1 = false; this.mobile2 = true;
      valid = false;
    }

    if (!this.data?.mobile?.match(/^\d*(?:\.\d{1,2})?$/)) {
      this.mobile1 = false; this.mobile2 = true;
      valid = false;
    }

    if (!this.data?.email) {
      this.email1 = false; this.email2 = true;
      valid = false;
    }

    if (!this.data?.email?.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
      this.email1 = false; this.email2 = true;
      valid = false;
    }
    if (!this.data?.message) {
      this.message1 = false; this.message2 = true;
      valid = false;
    }

    return valid;
  }
  onChange(key: string, value: string) {
    this.data[key] = value;

    switch (key) {
      case 'name':
        if (value != "") {
          this.name1 = false;
          this.name2 = false;
        } else {
          this.name1 = true;
        }
        break;
      case 'mobile':
        if (value != "") {
          this.mobile1 = false;
          this.mobile2 = false;
        } else {
          this.mobile1 = true;
        }
        break;
      case 'email':
        if (value != "") {
          this.email1 = false;
          this.email2 = false;
        } else {
          this.email1 = true;
        }
        break;
      case 'message':
        if (value != "") {
          this.message1 = false;
          this.message2 = false;
        } else {
          this.message1 = true;
        }
        break;
      default:
        break;
    }
  }
}
