const readline =  require('readline-sync')

function start(){
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	function askAndReturnSearchTerm(){
		return readline.question('Difinir termo da wikipedia: ')
	}
	function askAndReturnPrefix(){
		const prefixes = ['whois', 'whats is', 'the history of']
		const SelectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose on option: ')
		const SelectedPrefixText = prefixes[SelectedPrefixIndex]

		return SelectedPrefixText


	}	
	console.log(content)
}

start()