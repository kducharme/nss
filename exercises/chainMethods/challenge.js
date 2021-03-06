// 5. Which model was the most popular?
// 6. Which bank provided the most loans to our customers?
const printArea = document.querySelector('#printArea')
const salesData = [];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Total profit for 2017
const totalProfit = () => {
    const el = document.createElement('p')
    const totalSales = data.map((a, b) => {
        return a + b.gross_profit
    }, 0)
    // el.textContent = `Total profit: ${totalSales}`
    printArea.appendChild(el)
}

// In which month did they sell the most cars?
const bestSalesMonth = () => {
    const el = document.createElement('p')
    const salesMonths =[];
    const allMonths = data.map(sale => {
        return sale.purchase_date
    }, 0)

    allMonths.forEach(month => {
        month = new Date(month).getMonth()
        month = months[month - 1]
        salesMonths.push(month)
    });

    const bestSales = [...salesMonths.reduce((total, next) => {
        if (!total.has(next)) total.set(next, Object.assign({ count: 0 }, next));
        total.get(next).count++;
        return total;
    }, new Map).values()].sort((a, b) => a.count < b.count ? 1 : -1)[0];

    // console.log(bestSales)

    // el.textContent = `The best sales month was: ${bestMonth}`;
    printArea.appendChild(el)
}

// Which salesperson sold the most cars?
const bestSalesPerson = () => {
    const el = document.createElement('p')
    let allMonths = data.sort((a, b) => a.gross_profit < b.gross_profit ? 1 : -1)

    const result = [...allMonths.reduce((total, next) => {
        if (!total.has(next.sales_agent.last_name)) total.set(next.sales_agent.last_name, Object.assign({ count: 0 }, next));
        total.get(next.sales_agent.last_name).count++;
        return total;
    }, new Map).values()].sort((a, b) => a.count < b.count ? 1 : -1)[0].sales_agent;

    const name = `${result.first_name} ${result.last_name} sold the most cars`;
    el.textContent = name;
    printArea.appendChild(el)
}

// Which salesperson made the most profit?
const mostProfit = () => {
    const el = document.createElement('p')
    let allMonths = data.sort((a, b) => a.gross_profit < b.gross_profit ? 1 : -1)

    const totalSales = data.reduce((a, b) => {
        return a + b.gross_profit
    }, 0)


}

// Which bank provided the most loans to our customers?

const banks = data.reduce((l, s) => {
    const key = s.credit.credit_provider
    if (!l.has(key)) {
        l.set(key, {loans:1 })
    } else {
        let current = l.get(key)
        l.set(key, { loans: current.loans + 1 })
    }
    return l
}, new Map())


const banksArray = [...banks.entries()]
console.log(banksArray)

const sortedBanks = banksArray.sort((c, p) => p[1].loans - c[1].loans)
const topBank = sortedBanks.shift()
console.log(topBank)
const el = document.createElement('span')

const modelOutput = `
${topBank[0]} provided the most loans for customers (${topBank[1].loans} loans).`

el.textContent = modelOutput
printArea.appendChild(el)



totalProfit()
bestSalesMonth()
bestSalesPerson()
