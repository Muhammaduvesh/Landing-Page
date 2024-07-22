'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


const FullDevelopmentCycle = () => {
    return (

        <section className="font-mono py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Full Development Cycle</h2>
                <h4 className="p-3">We use proven Technologies</h4>
                <div className="flex flex-row">
                    <div className="flex flex-col w-3/5 gap-4">
                        <div className="bg-gray-100 p-6 rounded shadow-md">
                            <h3 className="text-xl font-bold mb-4">Web</h3>
                            <p>PHP /Javascript/ Node.JS /Web Socket / Socket.io / Vue.js / Nuxt / MySQL / Laravel / Go Long /Django /Python</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded shadow-md">
                            <h3 className="text-xl font-bold mb-4">Mobile</h3>
                            <p>Swift / kotlin/ Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / unit Test / Navigation</p>
                        </div>
                    </div>
                    <ul className="grid grid-cols-2 mx-10 gap-2">
                        <li className="m-2 border-2 p-2 rounded bg-red-800 w-full">ios Development</li>
                        <li className="m-2 border-2 p-2 rounded bg-red-800 w-full">Web Development</li>
                        <li className="m-2 border-2 p-2 rounded bg-red-800 w-full">Android Development</li>
                        <li className="m-2 border-2 p-2 rounded bg-red-800 w-full">UI/UX Development</li>
                        <li className="m-2 border-2 p-2 rounded bg-red-800 w-full">Testing</li>
                        <li className="m-2 border-2 p-2 rounded bg-red-800 w-full">Launch</li>
                        <li className="m-2 border-2 p-2 rounded bg-red-800 w-full">IT consulting</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FullDevelopmentCycle;
