export default function addField(fieldValues, fields){
    for(let i in fields){
        fields[i].push(fieldValues[i])
    }
}
