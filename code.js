class Messenger{
    constructor(author,text){
    }
    showHistory(){
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
    send(author,text){
        console.log(`${this.showHistory()} ${this.author=author} : ${this.text=text}`)
    }
}
let messenger = new Messenger()
messenger.send('Ruslan', 'first message')
messenger.send('Ramina', 'second message')
messenger.showHistory()


