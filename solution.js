let list = [];

document.getElementById("submitButton").addEventListener("click", processInput);
document.getElementById("inputBox").addEventListener("keypress", function (event) {
    if (event.key === "Enter")
        processInput();
});
document.getElementById("inputBox").focus();

function processInput() {
    console.log('added event listener');
    let cmd = document.getElementById("inputBox").value;
    let result = processCommand(cmd);
    if (result)
        printToTerminal(result);
    printToTerminal("List: " + list.join(" "));
    document.getElementById("inputBox").value = "";
}

function printToTerminal(text) {
    document.getElementById("terminal").value += text + "\n";
}

function processCommand(cmd) {


    let cmdArgs = cmd.split(" ");
    cmd = cmdArgs.shift();
    switch (cmd) {
        case "append":
            return append(cmdArgs);
            break;
        case "delete":
            return delete_index(cmdArgs);
            break;
        case "roll":
            const option = cmdArgs.shift();
            if (option == 'left') {
                return roll_left();
            }
            else if (option == 'right') {
                return roll_right();
            }
            break;
         case "prepend":
            return prepend(cmdArgs);
            break;
         case "reverse":
              reverse();
            break;
         case "insert":
            return insert(cmdArgs);
            break;
        default:
            return "Error: invalid command";
            break;
    }

}

function append(args) {
    list = list.concat(args);
}

function delete_index(args) {
    const index = args[0];

    if (index > 0 && index < list.length) {
        list.splice(index, 1);
    } else {
        return "Error: invalid index " + args[0];
    }
}

function roll_left() {
    const firstElement = list.shift();
    list.push(firstElement);
}

function roll_right() {
    const lastElement = list.pop();
    list.splice(0, 0, lastElement);
}

function prepend(args) {
  list = args.concat(list);
}

function reverse() {
  list = list.reverse();
}

function insert(args) {
  let index = parseInt(args[0]);
  if (isNaN(index) || index < 0 || index > list.length) {
    return "Error: invalid index " + args[0];
  }
  let stringToInsert = args[1];
  list.splice(index, 0, stringToInsert);
}


