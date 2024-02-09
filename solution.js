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
      case "sort":
        return sort();
        break;
      case "count":
        return count(cmdArgs);
        break;
    default:
      return "Error: invalid command";
      break;
  }
}

function append(args) {
  list = list.concat(args);
}

function sort() {
	list.sort();
}

function count(args) {
	const str = args[0];

	let count = 0;
	for (let item of list) {
		if (item === str) {
			count++;
		}
	}
	return `Count of '${str}': ${count}`;
}

