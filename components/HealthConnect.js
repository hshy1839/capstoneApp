import { requestPermission, aggregateRecord  } from 'react-native-health-connect';

const requestPermissions = () => {
  requestPermission([
    {
      accessType: 'read',
      recordType: 'ActiveCaloriesBurned',
    },
    {
      accessType: 'read',
      recordType: 'Steps',
    },
    {
        accessType: 'read',
        recordType: 'SleepSession',
      },
  ]).then((permissions) => {
    console.log('Granted permissions ', { permissions });
  });
};
const aggregateSampleData = () => {
    aggregateRecord({
      recordType: 'Steps',
      timeRangeFilter: {
        operator: 'between',
        startTime: '2024-01-01T12:00:00.405Z',
        endTime: '2024-05-21T23:53:15.405Z',
      },
    }).then((result) => {
      console.log('Steps record: ', { result }); 
    });
  };