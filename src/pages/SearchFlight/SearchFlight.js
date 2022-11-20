import { useParams } from 'react-router-dom';
import { UserGroupIcon, ArrowLongRightIcon, FunnelIcon } from '@heroicons/react/24/outline';

import { useStore } from '~/store';
import { Button, ListBoxPopper } from '~/components';

const filters = [
    {
        id: 0,
        items: [
            {
                id: 0,
                title: 'Ascending price',
            },
            {
                id: 1,
                title: 'Descending price',
            },
            {
                id: 2,
                title: 'All',
            },
        ],
    },
];

function SearchFlight() {
    const [state, dispatch] = useStore();
    const { ticketType } = useParams();
    const { name, source, destination, departureDate, passengers } = state[`${ticketType}Panel`];

    return (
        <section className="pt-4">
            {/* Header */}
            <section className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Your flight results for "{name}"</h1>
                    <p className="py-1 flex items-center text-slate-600 text-lg">
                        <span className="mr-3">
                            <UserGroupIcon className="w-6 h-6" />
                        </span>
                        {passengers.adult > 0 && `${passengers.adult} adult`}
                    </p>
                </div>
                <div>
                    <Button
                        size="medium"
                        className="rounded-full bg-sky-500 hover:bg-sky-400 ease-in-out duration-200 text-white"
                    >
                        Change searchings
                    </Button>
                </div>
            </section>
            {/* Airline */}
            <section className="my-4 p-4 bg-sky-500 text-white rounded-xl">
                <h4 className="text-lg">Friday, 25/11/2022</h4>
                <p className="font-semibold flex items-center text-xl">
                    {source}
                    <span>
                        <ArrowLongRightIcon className="mx-4 w-8 h-8" />
                    </span>
                    {destination}
                </p>
            </section>
            {/* Filter */}
            <section className="my-4 rounded-xl p-4 shadow-[0_0_20px_0_rgba(148,163,184,0.3)] flex items-center justify-between">
                <div>
                    <Button
                        size="small"
                        className="text-lg ease-in-out duration-200 rounded-full border border-sky-400 text-sky-400 hover:text-sky-300 hover:border-sky-300 "
                    >
                        <span className="mr-2">
                            <FunnelIcon className="w-5 h-5" />
                        </span>
                        Filters
                    </Button>
                </div>
                <div className="flex items-center">
                    <span className="text-lg">According: </span>
                    <div>
                        {filters.map((filter) => (
                            <ListBoxPopper data={filter} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Tickets */}
            <section>
                <div className="rounded-lg flex items-center bg-sky-100">
                    <div className="p-3">
                        <img src="https://flight.hahalolo.com/bb8c9a3f56366b5c501f0db5574d0942.svg" />
                    </div>
                    <div className="p-3 flex-1 flex items-center justify-between">
                        <div>
                            <h4 className="text-xl font-semibold">Bamboo Airways</h4>
                            <p className="text-slate-500">Economy Smart</p>
                        </div>
                        <div>
                            <p className="font-semibold">QH1320</p>
                        </div>
                        <div className="text-center">
                            <p>{departureDate}</p>
                            <h4 className="text-2xl font-semibold">12:25</h4>
                            <p className="font-semibold text-slate-700">{source}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-slate-500">55 minutes</p>
                            <p className="text-slate-500">Straight flight</p>
                        </div>
                        <div className="text-center">
                            <p>{departureDate}</p>
                            <h4 className="text-2xl font-semibold">13:20</h4>
                            <p className="font-semibold text-slate-700">{destination}</p>
                        </div>
                        <div>
                            <Button
                                size="small"
                                type="button"
                                className="text-sky-500 hover:underline hover:text-sky-400 ease duration-200"
                            >
                                Details
                            </Button>
                        </div>
                        <div className="flex flex-col items-end">
                            <h4 className="text-xl text-red-400 font-semibold mb-2">
                                1.542.000 <span className="underline">đ</span>
                            </h4>
                            <Button
                                size="small"
                                type="button"
                                className="text-slate-100 rounded-full bg-sky-500 hover:bg-sky-400 ease-in-out duration-200"
                            >
                                Choose
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default SearchFlight;
