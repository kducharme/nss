const congressWoman = Object.create({}, {
    generalInfo: {
        writable: false, value: {
            fullName: 'Elizabeth Sanger',
            biography: 'Bio goes here',
            missionStatement: 'To save the world.',
            headShot: 'images/Elizabeth.jpeg',
            district: '5th Congressional district of Tennessee',
            familyImage: 'images/family.png',
            constituentImage: 'images/constituents.png'
        }
    },
    platformInfo: {
        writable: false, value: {
            taxes: 'Tax less',
            jobs: 'Create more jobs',
            infrastructure: 'Build more stuff',
            healthCare: 'Keep people healtyhy',
            crime: 'Stop crime, altogether'
        }
    }
})

const getInvolved = Object.create({}, {
    voteURL: { writable: false, value: 'https://www.google.com/vote' },
    volunteerURL: { writable: false, value: 'https://www.google.com/volunteer' },
    eventsCal: { writable: false, value: 'https://www.google.com/calendar' }
})

const volunteerInfo = Object.create({}, {
    volName: { writable: false, value: 'Billy Bob' },
    volAddress: { writable: false, value: '1000 Interstate Drive, Nashville, TN 37209' },
    volEmail: { writable: false, value: 'billy@bob.com' },
    volPhone: { writable: false, value: '800-123-4567' },
    volAvail: {
        writable: true, value: {
            mon: { available: true, time: '9-10am' },
            tue: { available: true, time: '5-7pm' },
            wed: { available: false, time: null },
            thu: { available: false, time: null },
            fri: { available: true, time: '10-11am' },
            sat: { available: true, time: '12pm-8pm' },
            sun: { available: false, time: null }
        }
    },
    volInterests: {
        writable: true, value: {
            dancing: { interest: true },
            polls: { interest: true },
            emails: { interest: false },
            phone: { interest: false }
        }
    }
})

console.log(congressWoman)