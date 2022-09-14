let userMap = new Map();
userMap.set("Rostyslav", "name");
userMap.set(36, "age");
userMap.set(true,"is Front-end developer");
for ( let item  of userMap){
    console.log(`Ключ - ${item[0]}, Значение - ${item[1]}` )
}
