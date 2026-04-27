function faultyCalculator(x, y, op) {
    ran = Math.random();
    if (ran < 0.1) {
        switch (op) {
            case '+':
                console.log(x - y);
                break;
            case '-':
                console.log(x / y);
                break;
            case '/':
                console.log(x * y);
                break;
            case '*':
                console.log(x ** y);
                break;
            default:
                break;
        }

    } else {
        switch (op) {
            case '+':
                console.log(x + y);
                break;
            case '-':
                console.log(x - y);
                break;
            case '/':
                console.log(x / y);
                break;
            case '*':
                console.log(x * y);
                break;
            default:
                break;
        }
    }
}

faultyCalculator(2, 4, '+');