import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
    from_name:['', Validators.required],
    to_name:'KASOUNDPROD',
    from_email:['', [Validators.required, Validators.email]],
    subject:'Message de reçu',
    message:  ['', Validators.required],
  });

  constructor(private fb: FormBuilder){}

  async send() {
    if (this.form.invalid) {
      // Display a SweetAlert error message for invalid form
      await Swal.fire('Error', 'Veuillez remplir tous les champs correctement', 'error');
      return;
    }

    emailjs.init('TAeVqS0fYiTkdsrmi');

    try {
      let response = await emailjs.send('service_xdeet8b', 'template_37h8j6p', {
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message,
      });

      // Check the response to determine if the email was sent successfully
      if (response && response.status === 200) {
        // Display a SweetAlert success message
        await Swal.fire('Success', 'Message envoyé avec succès', 'success');
        this.form.reset();
      } else {
        // Display a SweetAlert error message if the email was not sent successfully
        await Swal.fire('Error', 'Une erreur s\'est produite lors de l\'envoi du message', 'error');
      }
    } catch (error) {
      // Display a SweetAlert error message in case of an exception
      await Swal.fire('Error', 'Une erreur s\'est produite lors de l\'envoi du message', 'error');
      console.error('Error sending email:', error);
    }
  }
}
