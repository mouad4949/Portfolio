'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { FaLocationArrow } from 'react-icons/fa';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_kakk2ob',
          'POrtfolio_id23016022',
          form.current,
          'bnd0WYIuITlPoZpi5'
        )
        .then(
          () => {
            Swal.fire({
              title: 'Email envoyé !',
              text: 'Votre email a été envoyé avec succès.',
              icon: 'success',
              confirmButtonText: 'OK',
            }).then(() => {
              window.location.reload();
            });
          },
          (error) => {
            Swal.fire({
              title: 'Erreur',
              text: 'Échec de l’envoi de l’email, veuillez réessayer.',
              icon: 'error',
              confirmButtonText: 'OK',
            });
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <div className="isolate px-4 py-10 sm:py-8 lg:px-8">
      <form ref={form} onSubmit={sendEmail} className="mx-auto max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-purple-500">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="from_name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-none px-3.5 py-2 bg-transparent text-white font-medium placeholder:text-white shadow-sm 
                ring-[1px] ring-gray-400 focus:ring-[1px] focus:ring-gray-500 transition duration-200 ease-in-out"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-purple-500">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="to_name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-none px-3.5 py-2 bg-transparent text-white font-medium placeholder:text-white shadow-sm 
                ring-[1px] ring-gray-400 focus:ring-[1px] focus:ring-gray-500 transition duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-purple-500">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="user_email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-none px-3.5 py-2 bg-transparent text-white font-medium placeholder:text-white shadow-sm 
                ring-[1px] ring-gray-400 focus:ring-[1px] focus:ring-gray-500 transition duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-purple-500">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-none px-3.5 py-2 bg-transparent text-white placeholder:text-gray-400 shadow-sm 
                ring-[1px] ring-gray-400 focus:ring-[1px] focus:ring-gray-500 transition duration-200 ease-in-out
                font-[Inter, sans-serif] font-bold"
                defaultValue={''}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          
          
        </div>
      </form>
    </div>
  );
}
