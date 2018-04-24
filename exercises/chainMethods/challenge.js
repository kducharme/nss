// 4. Which salesperson made the most profit?
// 5. Which model was the most popular?
// 6. Which bank provided the most loans to our customers?
const printArea = document.querySelector('#printArea')
const salesData = [];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Total profit for 2017
const totalProfit = () => {
    const el = document.createElement('p')
    const totalSales = data.reduce((a, b) => {
        return a + b.gross_profit
    }, 0)
    el.textContent = `Total profit: ${totalSales}`
    printArea.appendChild(el)
}

// In which month did they sell the most cars?
const bestSalesMonth = () => {
    const el = document.createElement('p')
    let bestMonth = data.sort((a, b) => a.gross_profit < b.gross_profit ? 1 : -1).splice(0, 1)[0].purchase_date.split('-')[1]

    if (bestMonth.startsWith(0)) {
        bestMonth = bestMonth.split('')[1];
    }
    bestMonth = months[bestMonth - 1];
    el.textContent = `The best sales month was: ${bestMonth}`;
    printArea.appendChild(el)
}

// Which salesperson sold the most cars?
const bestSalesPerson =() => {
    const el = document.createElement('p')

    let allMonths = data.sort((a, b) => a.gross_profit < b.gross_profit ? 1 : -1)

    const result = [...allMonths.reduce( (total, next) => {
        if (!total.has(next.sales_agent.last_name)) total.set(next.first_name, Object.assign({ count: 0 }, next));
        total.get(next.person).count++;

        return total;
    }, new Map).values()];

    console.log(result)

    el.textContent = result;
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


}







totalProfit()
bestSalesMonth()
mostTotalSales()
bestSalesPerson()
