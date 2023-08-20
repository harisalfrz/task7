class Testimonial {
    #quote = "";
    #image = "";

    constructor(quote, image) {
        this.#quote = quote;
        this.#image = image;
    }

    get quote() {
        return this.#quote;
    }
    
    get image() {
        return this.#image;
    }

    get author () {
        throw new Error("getAuthor()  method must be implemented.");
    }

    get testimonialHTML() {
        return `
            <div class="testimonial">
                <img src="${this.image}" class="profile-testimonial" />
                <p class="quote">
                    ${this.quote}
                </p>
                <p class="author">- ${this.author}</p>
            </div>
        `;
    }
}

class AuthorTestimonial  extends Testimonial {
    #author = "";

    constructor(author, quote, image) {
        super(quote, image);
        this.#author = author;
    }

    get author() {
        return this.#author;
    }
}

class CompanyTestimonial extends Testimonial {
    #company = "";

    constructor(author, quote, image) {
        super(quote, image);
        this.#company = author;
    }

    get author() {
        return this.#company + " Company";
    }
}

const testimonial1 = new AuthorTestimonial(
    "Mang Oleh",
    "Mantap!!!! berkat blog ini odading mang oleh semakin laris!",
    "images/fotomeme1.jpg"
);

const testimonial2 = new AuthorTestimonial(
    "Fajar Sadboy",
    "HMMM,,, berkat blog ini bab saya lancar sekali!!!",
    "images/fotomeme2.jpg"
);

const testimonial3 = new AuthorTestimonial(
    "Malika",
    "Pokonya ini website terkeren yang ada didunia!!!!!!",
    "images/fotomeme3.jpg"
);

let testimonialData = [testimonial1, testimonial2, testimonial3]
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
    testimonialHTML += testimonialData[i].testimonialHTML
}

document.getElementById("testimonials").innerHTML = testimonialHTML;
