function generateUpdateQuery(data, tableName,values) {
    let Data= "", value = "";
    let key, keys;
    // let Tab1 = `UPDATE ${tableName} SET`;
    // let Tab2 = `WHERE ${values};`;
    for (key in data) {
        if (typeof data[key] == 'number') {  
            Data += `${key} = ${data[key]},`;
        }
        else if (typeof values[keys] == 'string') {
            Data += `${key} ='${data[key]}',`;          
        }
        else {
            Data += `${key} ='${data[key]}',`;
        }
    }
    for (keys in values) {
        if (values[keys] == 'number') {
            value += `${keys} = ${values[keys]},`;
        }
        else if (typeof values[keys] == 'string') {
            value += `${keys} = '${values[keys]}',`;
        }
        else {
            value += `${keys} = '${values[keys]}',`;
        }
    }
    Data = Data.slice(0, -1);
    value = value.slice(0, -1);
    let query = `UPDATE ${tableName} SET  ${Data} WHERE ${value} ;`;
    console.log(query);
}
generateUpdateQuery({
    name: "biswajit",
    mobile: 987653345,
    email: "biswajit@gmail.com",
}, "Student",{ID :1});

// function generateUpdateQuery(data, tableName, clauseKey, clauseValue) {
//     // console.log(data);
//     //let zx=[]
//     // for  (let x of  Object.key(data)){
//     //     console.log(data);
//     //     zx.push(x)
//     // }
//     // let zxz = zx.join(', ')
//     let Tab1 = `UPDATE ${tableName} SET`;
//     let Tab2 = `WHERE ${clauseKey} = ${clauseValue};`;
//      let updateString = "";
   
//     for (let    key in data) {  
//         if (!isNaN(`${data[key]}`)) {
//             Tab3 += `${key}`
//         // } else if (i === true || i === false) {
//         //     tab3 += `${i},`
//          }
//         else {
//             Tab3 += `${key},`
//         }    
//         updateString += `${key} = '${data[key]}',`;
//     }
//     Tab3 = Tab3.slice(0, -1);
//     updateString = updateString.slice(0, -1);
   
//     let query = `${Tab1} ${updateString } ${Tab2}`;
//     console.log(query);

// }

// generateUpdateQuery({
//     name: "biswajit",
//     mobile: 987653345,
//     email: "biswajit@gmail.com",
// }, "Student", "ID",  100);
