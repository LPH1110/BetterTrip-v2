import { useParams } from 'react-router-dom';
import { UserGroupIcon, ArrowLongRightIcon, FunnelIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames/bind';
import styles from './SearchFlight.module.scss';
import { useEffect } from 'react';

import { useStore } from '~/store';
import { Button, ListBoxPopper, FlightTicket } from '~/components';
import axios from 'axios';

const cx = classNames.bind(styles);

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
    const panel = state[`${ticketType}Panel`];
    const { name, source, departureDate, destination, passengers } = panel;

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const flightTickets = await axios.post('http://localhost:3001/flights/tickets', {
                    source,
                    destination,
                    departureDate,
                });
                console.log(flightTickets.data);
            } catch (e) {
                console.error(e);
            }
        };
        fetchTickets();
    }, []);

    return (
        <section className="pt-4 relative">
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
                <FlightTicket data={panel} />
                <FlightTicket data={panel} />
                <FlightTicket data={panel} />
                <FlightTicket data={panel} />
                <FlightTicket data={panel} />
                <FlightTicket data={panel} />
            </section>
            <div className="rounded-lg max-w-full w-[82.5rem] px-3 py-6 shadow-[0_0_20px_0_rgba(148,163,184,0.3)] bg-white flex items-center justify-between fixed bottom-[5%] left-1/2 -translate-x-1/2">
                <div className="py-1">
                    <h5 className="font-semibold text-lg flex items-center">
                        Total cost:
                        <p className="text-red-400 ml-2">
                            0 <span className="underline">đ</span>
                        </p>
                    </h5>
                    <p className="text-slate-500">(Tax and fee are included in the cost)</p>
                </div>
                <div className="flex items-center">
                    <p className="mr-4 text-slate-500">
                        Chose <span className="font-semibold text-red-400">0/1</span> flights
                    </p>
                    <Button
                        size="medium"
                        type="button"
                        className="font-semibold text-slate-100 bg-sky-500 hover:bg-sky-400 ease-in-out duration-200 rounded-full"
                    >
                        Place ticket
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default SearchFlight;
