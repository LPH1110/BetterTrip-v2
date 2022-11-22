import { Button } from '~/components';
import classNames from 'classnames/bind';
import styles from './FlightTicket.module.scss';
import { useState } from 'react';
import FlightTicketDetail from './FlightTicketDetail';

const cx = classNames.bind(styles);

function FlightTicket({ data }) {
    const [showTicketDetail, setShowTicketDetail] = useState(false);
    const { source, destination, departureDate } = data;

    return (
        <div className={cx('wrapper')}>
            <div className="relative hover:shadow-[0_6px_20px_0_rgba(148,163,184,0.6)] shadow-[0_6px_20px_0_rgba(148,163,184,0.4)] rounded-lg flex items-center">
                <div className="p-3 relative">
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
                        <p className="font-semibold text-slate-800">{source}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-slate-500">55 minutes</p>
                        <p className="text-slate-500">Straight flight</p>
                    </div>
                    <div className="text-center">
                        <p>{departureDate}</p>
                        <h4 className="text-2xl font-semibold">13:20</h4>
                        <p className="font-semibold text-slate-800">{destination}</p>
                    </div>
                    <div>
                        <Button
                            size="small"
                            type="button"
                            onClick={() => setShowTicketDetail(!showTicketDetail)}
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
                {/* Details */}
            </div>
            {showTicketDetail && <FlightTicketDetail />}
        </div>
    );
}

export default FlightTicket;
