class QuotesTwo {
    constructor(source) {
        this.source = source
    }

    generateQuotes(nb = 1) {
        this.res = [];

        if (nb < 1) {
            nb = 1
        } else if (nb > 5) {
            nb = 5
        } else {
            nb = nb;
        }

        for (let i = 0; i < nb; i++) {
            let tmp = "";
            let start = [];
            let middle = [];
            let end = [];
    
            this.source.forEach(element => {
                start.push(element.start);
                middle.push(element.middle)
                end.push(element.end);
            });
    
            tmp += start[Math.floor(Math.random() * (start.length))] +  " ";
            tmp += middle[Math.floor(Math.random() * (middle.length))] + " ";
            tmp += end[Math.floor(Math.random() * (end.length))] + " ";
            
            this.res.push(tmp);
        }

        for (let i = 0; i < this.res.length; i++) {
            console.log(this.res[i]);
        }
        return this.res;
    }

    deleteQuotes() {
        if (this.res != "") {
            console.log("Fin des citations");
            return "Fin des citations";
        }
    }
}