function password(input) {

    let username = input[0];
    let password = input[1];
    let index = 2;
    let enteredPassword = input[index];
    index++;

    while (true) {
        if (enteredPassword === password){
            console.log(`Welcome ${username}!`);
            break;
        }
        enteredPassword = input[index];
        index++;
    }

}

password(["Nakov", "1234", "Pass", "1324", "1234"]);