function selectquery(data, tableName, value) {
  let tablekeys = "", values = "";
  tablekeys = data.join(',');
  for (key in value) {
    if (typeof value[key] == 'number') {
      values += `${key} = ${value[key]},`;
    }
    else if (typeof value[key] == 'string') {
      values += `${key} = '${value[key]}',`;
    }
    else {
      values += `${key} = '${value[key]}',`;
    }
  }
  values = values.slice(0, -1);
  let query = `select ${tablekeys} from  ${tableName} where ${values};`
  console.log(query);
}
selectquery(['id', 'name'],
  "DB", { id: 56, name: "Biswajit" })



// function SelectQuery(data, tableName) {
//     let tab1 = `${tableName} ;
//     let Tab2 = `WHERE ${clauseKey} = ${clauseValue};`;
//     let tableKeys = "",
//         tableValues = "";
//     for (let key in data) {
//         tableKeys += `${key},`;
//         tableValues += `'${data[key]}',`
//     }
//     updateString = updateString.slice(0, -1);
//     let = `${Tab1} ${updateString} ${Tab2}`;
//     console.log(query);
//     // sql`
// //   SELECT c1.student_id
// //   FROM student_name cmn1
// //   INNER JOIN student c1 ON c1.id = cmn1.student_id
// //   WHERE cmn1.id = ${studentId}
// // `;

//     tableKeys = tableKeys.slice(0, -1);
//     tableValues = tableValues.slice(0, -1);
//     let query = `${tab1}${tableKeys}${tab2} ${tab3}${tableValues}${tab4}`;
//     console.log(query);
// }





// // sql`
// //   SELECT c1.student_id
// //   FROM student_name cmn1
// //   INNER JOIN student c1 ON c1.id = cmn1.student_id
// //   WHERE cmn1.id = ${studentId}
// // `;