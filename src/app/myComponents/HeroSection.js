'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
} from "@/components/ui/form"

import background from '../../../public/bg.jpg'
import Image from "next/image";

const formSchema = z.object({
  FullName: z.string().min(2).max(50),
  BusinessName: z.string().min(2).max(50),
  PhoneNumber: z.string().min(10).max(10),
});

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20 styles.background">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            User-Centric Excellence: Our App Development Services Tackle Your Pain Points
          </h1>
          <p className="mb-8 font-bold">Experience a seamless digital journey with Desun - Where Every line of code resolves your challenges and elevates your app experience to unparalleled heights.</p>
          <Form {...Form}>
            <form className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-bold mb-4">Leave your contacts and we will call you back within 30 minutes</h2>
              <div className="flex flex-wrap">
                <input type="text" placeholder="Name" className="w-full mb-4 p-2 border border-gray-300 rounded" />
                <input type="tel" placeholder="Phone" className="w-full mb-4 p-2 border border-gray-300 rounded" />
                <input type="email" placeholder="Email" className="w-full mb-4 p-2 border border-gray-300 rounded" />
                <button className="bg-yellow-500 text-white p-2 rounded">Get Consultation</button>
              </div>
            </form>
          </Form>
        </div>
        <div className="md:w-1/2">
          {<Image src={background} className="w-80 h-70 mx-20 rounded"></Image>}
        </div>
      </div>
    </section>
  );
};

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FullName: "",
      BusinessName: "",
      PhoneNumber: "",
    },
  })
}

export default HeroSection;