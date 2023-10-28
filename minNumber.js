function minNumber(input) {

    let index = 0;
    let myMinNumber = Number.MAX_SAFE_INTEGER;

    let command = input[index];
    index++;

    while (command !== "Stop") {
        let number = Number(command);

        if (myMinNumber > number) {
            myMinNumber = number;
        }

        command = input[index];
        index++;
    }
    console.log(myMinNumber);
}

minNumber(["100", "99", "80", "70", "Stop"]);