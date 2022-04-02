export function calculate(data) {
    let result = []
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (!element.conract.startsWith('PH')) {
            continue;
        }
        const totalTransactionAmount = (element.price * element.quantity) / 10
        const totalTransactionVolume = element.quantity / 10
        const weightedAveragePrice = totalTransactionAmount / totalTransactionVolume

        let existing = result.find(item => item.conract === element.conract)
        if (!!existing) {
            existing.totalTransactionAmount += totalTransactionAmount
            existing.totalTransactionVolume += totalTransactionVolume
            existing.weightedAveragePrice += weightedAveragePrice
        } else {
            const year = '20' + element.conract.substr(2, 2)
            const month = element.conract.substr(4, 2)
            const day = element.conract.substr(6, 2)
            const hour = element.conract.substr(8, 2)
            const dateTime = new Date(Number(year), Number(month) - 1, Number(day), Number(hour))
            result.push({
                dateTime,
                conract: element.conract,
                totalTransactionAmount,
                totalTransactionVolume,
                weightedAveragePrice
            })
        }
    }
    result.sort((a, b) => (a.dateTime > b.dateTime) ? 1 : -1)
    return result
}