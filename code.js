class Message {
    constructor(author, text, createdAt, allMessages) {
        this.author = author;
        this.text = text;
        this.createdAt = createdAt;
        this.allMessages = [];
    }
}

class Messenger extends Message {
    constructor(author, text, createdAt, allMessages) {
        super(author, text, createdAt);
    }
    show_history() {
        let now = this.date;
        this.allMessages.forEach((item) => {
            console.log(`${item.date.getHours()}:${item.date.getMinutes()}:${item.name}:${item.texter}}`)
        })
    }
    send(author, text) {
        this.allMessages.push({ name: author, texter: text, date: new Date() })
    }
}


let messenger = new Messenger();
messenger.send('Ruslan', 'first message');
messenger.send('Ramina', 'second message');
messenger.show_history();


