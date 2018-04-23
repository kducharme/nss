// 4. Which salesperson made the most profit?
// 5. Which model was the most popular?
// 6. Which bank provided the most loans to our customers?
const printArea = document.querySelector('#printArea')
const salesData = [];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const totalProfit = () => {
    const el = document.createElement('p')
    let totalSales = 0;
    data.forEach(sale => {
        for (let key in sale) {
            if (key === 'gross_profit') {
                totalSales += sale[key]
                salesData.push(sale[key])
            }
        }
    })
    el.textContent = `Total profit: ${totalSales}`
    printArea.appendChild(el)
}

const bestSalesMonth = () => {
    const el = document.createElement('p')
    const highestSale = salesData.sort((a, b) => a < b ? 1 : -1).splice(0, 1)[0]
    data.forEach(sale => {
        for (let key in sale) {
            if (sale[key] === highestSale) {
                let date = (sale.purchase_date.split('-')[1])
                let salesPerson = sale.sales_agent.first_name + ' ' + sale.sales_agent.last_name;
                if (date.startsWith(0)) {
                    date = date.split('')[1];
                }
                date = months[date - 1];
                el.textContent = `Best sales month: ${date} ($${highestSale}) by ${salesPerson}`
                printArea.appendChild(el)
            }
        }
    })
}

// 3. Which salesperson sold the most cars?
const mostTransactions = () => {
    const el = document.createElement('p')

    const salesPerPerson = data.map(sale => {
        const saleInfo = {};
        saleInfo.profit = sale.gross_profit;
        saleInfo.person = sale.sales_agent.first_name + ' ' + sale.sales_agent.last_name;
        return saleInfo
    })

    const result = [...salesPerPerson.reduce( (total, next) => {
        if (!total.has(next.person)) total.set(next.person, Object.assign({ count: 0 }, next));
        total.get(next.person).count++;
        return total;
    }, new Map).values()];
    
    const mostSales = result.sort((a, b) => a.count < b.count ? 1 : -1).splice(0, 1)[0]
    el.textContent = `The sales person with the most sales is ${mostSales.person} with ${mostSales.count} total sales.`
    printArea.appendChild(el)
}

const mostTotalSales = () => {
    const el = document.createElement('p')

    const salesPerPerson = data.map(sale => {
        const saleInfo = {};
        saleInfo.profit = sale.gross_profit;
        saleInfo.person = sale.sales_agent.first_name + ' ' + sale.sales_agent.last_name;
        return saleInfo
    })

    const result = [...salesPerPerson.reduce( (total, next) => {
        if (!total.has(next.person)) total.set(next.person, Object.assign({ totalSales: 0 }, next));
        total.get(next.person).totalSales;

        return totalSales;
    }, new Map).values()];

    console.log(result)
    
    const mostSales = result.sort((a, b) => a.count < b.count ? 1 : -1).splice(0, 1)[0]
    el.textContent = `The sales person with the most sales is ${mostSales.person} with ${mostSales.count} total sales.`
    printArea.appendChild(el)
}







totalProfit()
bestSalesMonth()
mostTransactions()
mostTotalSales()
