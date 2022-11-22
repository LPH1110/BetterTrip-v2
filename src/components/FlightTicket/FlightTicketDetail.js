import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { PlaneDepartureIcon, PlaneLandingIcon } from '~/assets/images/icons';
import { Tooltip } from '~/components';

function FlightTicketDetail() {
    return (
        <section className="p-2 my-2 grid grid-cols-5 rounded-lg w-full bg-white shadow-[0_0_20px_0_rgba(148,163,184,0.3)]">
            <section className="col-span-2">
                <h4 className="text-lg text-sky-500 font-semibold p-2">Flight detail</h4>
                <div className="flex items-center">
                    <div className="p-2 relative">
                        <img
                            className="max-w-[80%]"
                            src="https://flight.hahalolo.com/bb8c9a3f56366b5c501f0db5574d0942.svg"
                        />
                    </div>
                    <div>
                        <div className="font-semibold text-lg flex items-center">
                            <h5>Bamboo Airways</h5>
                            <p className="ml-4">QH1320</p>
                        </div>
                        <div>
                            <p className="text-slate-500">Ticket class: EconomySmart | Airbus A320 320</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {/* Source */}
                    <div className="grid grid-cols-3">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <PlaneDepartureIcon className="w-6 h-6 text-sky-500" />
                            </div>
                            <div>
                                <h5 className="font-semibold">12:25</h5>
                                <p>09/12/2022</p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h5 className="font-semibold">Ho Chi Minh (SGN)</h5>
                            <p>Tan Son Nhat Airport</p>
                        </div>
                    </div>
                    <div className="flex items-center my-3">
                        <div className="mr-4 w-6 h-8 flex justify-center">
                            <span className="w-px h-full bg-sky-500"></span>
                        </div>
                        <p>55 minutes</p>
                    </div>
                    {/* Destination */}
                    <div className="grid grid-cols-3">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <PlaneLandingIcon className="w-6 h-6 text-sky-500" />
                            </div>
                            <div>
                                <h5 className="font-semibold">13:20</h5>
                                <p>09/12/2022</p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h5 className="font-semibold">Da Lat (DLI)</h5>
                            <p>Lien Khuong Airport</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="col-span-3">
                <h4 className="text-lg text-sky-500 font-semibold p-2">Ticket detail</h4>
                <div className="p-2">
                    <table className="w-full">
                        <tr>
                            <th className="p-1.5 text-left">Passenger</th>
                            <th className="p-1.5">Quantity</th>
                            <th className="p-1.5">Ticket price</th>
                            <th className="p-1.5 text-right">Tax and Fee</th>
                            <th className="p-1.5 text-right">Total</th>
                        </tr>
                        <tr className="text-center">
                            <td className="p-1.5 text-left">Adult</td>
                            <td className="p-1.5">1</td>
                            <td className="p-1.5 font-semibold text-sky-500">
                                899.000 <span className="underline">đ</span>
                            </td>
                            <td className="p-1.5 text-right font-semibold text-sky-500">
                                643.000 <span className="underline">đ</span>
                            </td>
                            <td className="p-1.5 text-right font-semibold text-sky-500">
                                1.542.000 <span className="underline">đ</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="p-2 flex justify-end">
                    <h5 className="flex items-center text-xl font-semibold text-slate-600">
                        Total cost:
                        <p className="text-red-500 ml-4">
                            1.542.000 <span className="underline">đ</span>
                        </p>
                    </h5>
                </div>
            </section>
        </section>
    );
}

export default FlightTicketDetail;
