import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

type Props = {}

function Contact({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:hritikshelar391@gmail.com?subject=${data.subject}&body=Hi, I am ${data.name}. ${data.message} (${data.email})`
  };
  return (
    <div className="h-screen relative items-center justify-evenly text-center flex flex-col md:flex-row overflow-hidden
    max-w-full mx-auto z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#1363DF]">Contact Me</h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">You can get in touch with me!</h4>
            <div className="space-y-5">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#47B5FF] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+91 9325336372</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#47B5FF] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">hritikshelar391@gmail.com</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#47B5FF] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">Vashi, Navi Mumbai - 400703</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} placeholder="Name" className="contactInput"/>
                    <input {...register('email')} placeholder="Email" type="email" className="contactInput"/>
                </div>
                <input {...register('subject')} placeholder="Subject" className="contactInput"/>
                <textarea {...register('message')} placeholder="Message" className="contactInput"/>
                <button type="submit" className="bg-[#47B5FF] text-[#06283D] py-2 px-5 rounded-md font-bold text-xl">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact