import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames/bind';
import styles from './AreaPopper.module.scss';
import { dataStore } from '~/store';

const cx = classNames.bind(styles);

function AreaPopper({ onDispatch, prop }) {
    const { areas } = dataStore;

    const handleClickItem = (area) => {
        onDispatch(prop, { type: 'area', payload: area });
    };

    return (
        <section className="py-6 rounded-lg">
            <h1 className="px-3 text-xl font-semibold">Find common cities or airports</h1>
            <div className={cx('search-container', 'px-2 my-6 flex items-center py-2')}>
                <div className="mr-2">
                    <MagnifyingGlassIcon className="text-sky-500 w-6 h-6" />
                </div>
                <div className={cx('input-container', 'relative')}>
                    <input
                        placeholder="Enter some keywords"
                        className="w-full outline-none"
                        name="searchBar"
                        type="searchBar"
                    />
                    <div
                        className={cx(
                            'input-line',
                            'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                        )}
                    ></div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <h4 className="mb-4 text-xl px-3 text-sky-500">Việt Nam</h4>
                    <ul className="">
                        {areas.map((area) => (
                            <li
                                className={cx(
                                    'area-item',
                                    'cursor-pointer hover:bg-slate-200 rounded-md ease duration-200 p-1',
                                )}
                                key={area.id}
                                onClick={() => handleClickItem(area)}
                            >
                                <span className="px-2 text-[1rem]">{`${area.name} (${area.id})`}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div></div>
            </div>
        </section>
    );
}

export default AreaPopper;
