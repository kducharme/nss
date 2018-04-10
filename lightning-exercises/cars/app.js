const CarFactory = (make, model, year) => {
    return Object.create({}, {
        make: { writable: true, value: make },
        model: { writable: true, value: model },
        yearManufactured: { writable: true, value: year }
    })
}

const malibu = CarFactory("Chevy", "Malibu", 1987)
console.log(malibu)
