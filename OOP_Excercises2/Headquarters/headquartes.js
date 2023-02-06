class Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numberOfPages,
    numberOfTimesCheckedOut = 0,
    isDiscarded = false
  ) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ISBN = ISBN;
    this.numberOfPages = numberOfPages;
    this.numberOfTimesCheckedOut = numberOfTimesCheckedOut;
    this.isDiscarded = isDiscarded;
    return this;
  }

  updateCheckoutCount(count) {
    this.numberOfTimesCheckedOut += count;
    return this;
  }
}

class Manual extends Book {
  constructor(title, author, copyrightDate, ISBN, numberOfPages) {
    super(title, author, copyrightDate, ISBN, numberOfPages);
  }

  disposeIfOutdated() {
    const currentYear = new Date().getFullYear();
    if (currentYear - this.copyrightDate > 5) {
      this.isDiscarded = true;
    }
    return this;
  }
}

class Novel extends Book {
  constructor(title, author, copyrightDate, ISBN, numberOfPages) {
    super(title, author, copyrightDate, ISBN, numberOfPages);
  }

  disposeIfOverCheckedOut() {
    if (this.numberOfTimesCheckedOut > 100) {
      this.isDiscarded = true;
    }
    return this;
  }
}

// Creating a new Book object
const book = new Book(
  'The Da Vinci Code',
  'Den Brown',
  2003,
  '9788610009729',
  474
);
console.log(book.title);
console.log(book.numberOfTimesCheckedOut);
book.updateCheckoutCount(3);
console.log(book.numberOfTimesCheckedOut);

// Creating a new Manual object
const manual = new Manual(
  'You Dont Know JS Yet',
  'Kyle Simpson',
  2014,
  '0764506331',
  408
);
console.log(manual.title);
console.log(manual.isDiscarded);
manual.disposeIfOutdated();
console.log(manual.isDiscarded);

//Creating a new Novel object
const novel = new Novel(
  'The Great Gatsby',
  ' F. Scott Fitzgerald',
  1925,
  '0826406149',
  158
);
console.log(novel.title);
console.log(novel.isDiscarded);
novel.disposeIfOverCheckedOut();
console.log(novel.isDiscarded);

