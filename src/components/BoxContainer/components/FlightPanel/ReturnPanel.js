import React, { useRef } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { RadioGroup } from '@headlessui/react';
import { UserGroupIcon } from '@heroicons/react/24/outline';

import {
    CalendarIcon,
    GroupPeopleIcon,
    PlaneDepartureIcon,
    PlaneLandingIcon,
    SwitchArrowsIcon,
} from '~/assets/images/icons';
import { Button } from '~/components';
import classNames from 'classnames/bind';
import styles from './FlightPanel.module.scss';

const cx = classNames.bind(styles);

function ReturnPanel() {
    const initialValues = {
        source: '',
        destination: '',
        departureDate: '',
        passengers: '',
    };

    const validationSchema = Yup.object().shape({
        source: Yup.string().required(),
        destination: Yup.string().required(),
        passengers: Yup.string().required(),
    });

    const handleErrorMessage = (message, name) => {
        console.log(message);
    };
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema}>
                <Form className="text-lg">
                    <section className="flex">
                        <section className="flex items-center">
                            <section className={cx('form-item', 'p-2')}>
                                <label htmlFor="source" className="text-slate-900 font-semibold">
                                    Departure point
                                </label>
                                <div className={cx('input-container', 'flex items-center relative py-2')}>
                                    <div className="mr-2">
                                        <PlaneDepartureIcon className="text-sky-500" />
                                    </div>
                                    <Field className="w-full outline-none" name="source" type="source" />
                                    <div
                                        className={cx(
                                            'input-line',
                                            'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                        )}
                                    ></div>
                                </div>
                                <ErrorMessage name="source">
                                    {(message) => <span className="text-md text-red-500">{message}</span>}
                                </ErrorMessage>
                            </section>
                            {/* Switch Arrows Button */}
                            <Button className="mx-2 p-2 rounded-full bg-slate-100 hover:bg-slate-200 ease-in-out duration-200">
                                <SwitchArrowsIcon className="text-slate-700" />
                            </Button>
                            <section className={cx('form-item', 'p-2')}>
                                <label htmlFor="destination" className="text-slate-900 font-semibold">
                                    Your Destination
                                </label>
                                <div className={cx('input-container', 'flex items-center relative py-2')}>
                                    <div className="mr-2">
                                        <PlaneLandingIcon className="text-sky-500" />
                                    </div>
                                    <Field className="w-full outline-none" name="destination" type="destination" />
                                    <div
                                        className={cx(
                                            'input-line',
                                            'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                        )}
                                    ></div>
                                </div>
                                <ErrorMessage name="destination">
                                    {(message) => <span className="text-md text-red-500">{message}</span>}
                                </ErrorMessage>
                            </section>
                        </section>
                        <section>
                            <section className="grid grid-cols-2">
                                <section className={cx('form-item', 'p-2')}>
                                    <label htmlFor="departureDate" className="text-slate-900 font-semibold">
                                        Departure Date - Return Date
                                    </label>
                                    <div className={cx('input-container', 'flex items-center relative py-2')}>
                                        <div className="mr-2">
                                            <CalendarIcon className="text-sky-500" />
                                        </div>
                                        <Field
                                            className="w-full outline-none"
                                            name="departureDate"
                                            type="departureDate"
                                        />
                                        <div
                                            className={cx(
                                                'input-line',
                                                'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                            )}
                                        ></div>
                                    </div>
                                    <ErrorMessage name="departureDate">
                                        {(message) => <span className="text-md text-red-500">{message}</span>}
                                    </ErrorMessage>
                                </section>
                                <section className={cx('form-item', 'p-2')}>
                                    <label htmlFor="passengers" className="text-slate-900 font-semibold">
                                        Passengers
                                    </label>
                                    <div className={cx('input-container', 'flex items-center relative py-2')}>
                                        <div className="mr-2">
                                            <UserGroupIcon className="text-sky-500 w-6 h-6" />
                                        </div>
                                        <Field className="w-full outline-none" name="passengers" type="passengers" />
                                        <div
                                            className={cx(
                                                'input-line',
                                                'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                            )}
                                        ></div>
                                    </div>
                                    <ErrorMessage name="passengers">
                                        {(message) => <span className="text-md text-red-500">{message}</span>}
                                    </ErrorMessage>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="flex justify-end items-center">
                        <Button
                            className="text-slate-100 bg-sky-500 rounded-lg hover:bg-sky-400 ease-in-out duration-200"
                            size="large"
                            type="submit"
                        >
                            Search
                        </Button>
                    </section>
                </Form>
            </Formik>
        </div>
    );
}

export default ReturnPanel;
