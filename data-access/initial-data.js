import Moment from 'moment';

const now = Moment(new Date());

export default [
    {
        _id: 'zti',
        type: 'project',
        deleted: false,
        title: 'ZTI',
        description: 'Lorem Ipsum',
        tasks: [{
            type: 'task',
            nr: 1,
            position: 0,
            title: 'Zadanie 1',
            done: null,
            created: +Moment(now).subtract(8, 'hours'),
            efforts: {
                estimated: 86400000,
                effective: 0
            }
        }, {
            type: 'task',
            nr: 2,
            position: 1,
            title: 'Zadanie 2',
            done: null,
            created: +Moment(now).subtract(20, 'hours'),
            efforts: {
                estimated: 259200000,
                effective: 0
            }
        }, {
            type: 'task',
            nr: 3,
            position: 2,
            title: 'Zadanie 3',
            done: +Moment(now).subtract(2, 'hours'),
            created: +Moment(now).subtract(10, 'hours'),
            efforts: {
                estimated: 129600000,
                effective: 129600000
            }
        }, {
            type: 'task',
            nr: 4,
            position: 3,
            title: 'Zadanie 4',
            done: false,
            created: +Moment(now).subtract(5, 'hours')
        }]
    }
];
