let list = [];

document.getElementById("submitButton").addEventListener("click", processInput);
document.getElementById("inputBox").addEventListener("keypress", function(event){
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







