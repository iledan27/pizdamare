console.log('Initial Lecture');

const NUMBER_ONE = 1;
const NUMBER_ZERO = 0;
const intr = [];

console.log(typeof intr[0]);

//if Statement
if (NUMBER_ONE) { // if -> !==0 true otherValues
    console.log('true condition');
} else { // if -> 0 false undefiend null
    console.log('false condition');
}

// and 

if (true && (intr[0] = 17)) { // if -> !==0 true otherValues
    console.log('and true', intr[0]);
} else { // if -> 0 false undefiend null
    console.log('and false', intr[0]);
}

// or 

if (false || (intr[0] = 17)) { // if -> !==0 true otherValues
    console.log('or true', intr[0]);
} else { // if -> 0 false undefiend null
    console.log('or false', intr[0]);
}

if (NUMBER_ONE) {
    intr[0] = NUMBER_ONE;
} else {
    intr[0] = NUMBER_ZERO;
}
//inline if   condition       true         false
intr[0]    = NUMBER_ZERO ? NUMBER_ONE : NUMBER_ZERO

console.log(intr[0]);

// for Statement
const FIVE_GANG = 5;
let teamTen = 10;
const test = [
    "1",
    "2",
    "3",
    "4",
    "5",
];

for (let i = 0; i <= FIVE_GANG + 1; i += 1) {
    if (i === 3) {
        console.log(test[i-1]);
    }
}

//while Statement
let ii = FIVE_GANG;

while (ii) {
    console.log(ii);
    ii-=1;
}

switch(test[FIVE_GANG-2]) {
    case "5": 
        console.log('switch', 5);
        break;
    case "4":
    case "3":
        console.log('switch', '4 sau 3');
    default:
        console.log('cine e ca tine?');
        break;
}