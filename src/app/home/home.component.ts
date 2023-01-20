import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(c => {
        if(Object.keys(c).length !== 0 && c.adultos != '0'){
          this.filter(c);
        }
          
      }).unsubscribe();
      
  }

 private filter(params:any) {

      const urlDesktop = 'https://web.whatsapp.com/';
      const urlMobile = 'whatsapp://';
      const telefono = '527351833020';
      let nombre = params.nombre
      let adultos = params.adultos
      let ninios = params.ninios
      let mensaje = 'send?phone=' + telefono + '&text=Nombre y Apellido:%0A' + nombre + '%0AAdultos:%0A' + adultos + '%0ANiños:%0A' + ninios + ''
      
         if(this.isMobile()) {
             window.open(urlMobile + mensaje, '_blank')
         }else{
             window.open(urlDesktop + mensaje, '_blank')
         }
         this.clearPosParam();
 }
private clearPosParam() {
  this.router.navigate(
    ['.'], 
    { relativeTo: this.route, queryParams: { } }
  );
}

  private isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

enviaWhats( ):any{
  
   
  debugger
 // formulario.addEventListener('submit', (event) => {debugger})
// const formulario = document.querySelector('#formulario');
//  const buttonSubmit = document.querySelector('#submit');
//  const urlDesktop = 'https://web.whatsapp.com/';
//  const urlMobile = 'whatsapp://';
//  const telefono = '525544947430'; 
}
  ngAfterViewInit(): void {


// document.querySelector('#formulario').addEventListener('submit', (event) => {
//   debugger
    
// });


// formulario.addEventListener('submit', (event) => {
//     event.preventDefault()
//     buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
//     buttonSubmit.disabled = true
//     setTimeout(() => {
//         let nombre = document.querySelector('#nombre').value
//         let apellidos = document.querySelector('#apellidos').value
//         let email = document.querySelector('#email').value
//         let mensaje = 'send?phone=' + telefono + '&text=*_Formulario Easy App CODE_*%0A*¿Cual es tu nombre?*%0A' + nombre + '%0A*¿Cuáles son tus apellidos?*%0A' + apellidos + '%0A*¿Cuál es tu correo electrónico?*%0A' + email + ''
//         if(isMobile()) {
//             window.open(urlMobile + mensaje, '_blank')
//         }else{
//             window.open(urlDesktop + mensaje, '_blank')
//         }
//         buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
//         buttonSubmit.disabled = false
//     }, 3000);
// });
  }
   

}
