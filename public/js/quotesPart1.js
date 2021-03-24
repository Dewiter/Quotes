class QuotesOne {
    constructor(source) {
        console.log(source)
        this.source = (source);
    }

    generateQuotes() {
        this.res = "";

        let start = [];
        let middle = [];
        let end = [];

        this.source.forEach(element => {
            start.push(element.start);
            middle.push(element.middle)
            end.push(element.end);
        });

        this.res += start[Math.floor(Math.random() * (start.length))] +  " ";
        this.res += middle[Math.floor(Math.random() * (middle.length))] + " ";
        this.res += end[Math.floor(Math.random() * (end.length))] + " ";

        console.log(this.res);
        return this.res;
    }

    deleteQuote() {
        if (this.res != "Fin des citations") {
            return "Fin des citations";
        }
    }
}