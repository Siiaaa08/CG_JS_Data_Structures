
let birthMonthMap = new Map();

for (let i = 1; i <= 12; i++) {
    birthMonthMap.set(i, []);
}

//50 individuals
for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1; 
    birthMonthMap.get(month).push(`Person${i}`); // Store the individual in the corresponding month
}

console.log("Individuals grouped by birth month:\n");
for (let [month, persons] of birthMonthMap.entries()) {
    console.log(`Month ${month}: ${persons.length} individuals → ${persons.join(", ")}`);
}
