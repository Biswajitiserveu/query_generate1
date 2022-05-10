function generateInsertQuery(table, data) {
    let zx = []
    for (let x of Object.keys(data)) {
        zx.push(x)
    }
    let zxy = zx.join(', ')
    let tab1 = `insert into ${table}(${zxy}) `
    let tab2 = `values(`
    let tab3 = ``;
    let tab4 = ')';
    for (let i of Object.values(data)) {
        if (!isNaN(i)) {
            tab3 += `${i},`
        } else if (i === true || i === false) {
            tab3 += `${i},`
        }
        else {
            tab3 += `"${i}",`
        }
    }
    tab3 = tab3.slice(0, -1);
    const insetQuery = `${tab1}${tab2}${tab3}${tab4}`;
    console.log(insetQuery);
}
const table = "student"
const data = {

    "Name": "biswajit",
    "email": "biswajitmatia@gmail.com",
    "mobile": 956677766,
    "type": true
}
 let generateQuery = generateInsertQuery(table, data)