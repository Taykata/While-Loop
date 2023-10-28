function maxNumber(input) {

    let index = 0;
    let myMaxNumber = Number.MIN_SAFE_INTEGER;

    let command = input[index];
    index++;

    while (command !== "Stop") {
        let number = Number(command);

        if (myMaxNumber < number) {
            myMaxNumber = number;
        }

        command = input[index];
        index++;
    }
    console.log(myMaxNumber);
}

maxNumber(["100", "99", "80", "70", "Stop"]);