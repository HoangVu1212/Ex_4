import './App.css';

function App() {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };

  // 1. Print the name of each company using forEach
  companies.forEach(company => console.log(company.name));

  // 2. Print the name of each company that started after 1987
  const companiesAfter1987 = companies.filter(company => company.start > 1987);
  console.log("Companies after 1987:", companiesAfter1987.map(c => c.name));

  // 3. Get only Retail companies, increment their start by 1, and append to DOM
  const retailCompanies = companies
    .filter(company => company.category === "Retail")
    .map(company => ({ ...company, start: company.start + 1 }));

  // 4. Sort the companies by their end date in ascending order
  const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);
  console.log("Sorted companies by end date:", sortedCompanies);

  // 5. Sort the ages array in descending order
  const sortedAges = [...ages].sort((a, b) => b - a);
  console.log("Sorted ages in descending order:", sortedAges);

  // 6. Print the sum of all ages using reduce
  const sumOfAges = ages.reduce((sum, age) => sum + age, 0);
  console.log("Sum of all ages:", sumOfAges);

  // 7. Create a new object with properties of name and category and a method print
  const { name, category } = companies[0];
  const newObject = {
    name,
    category,
    print() {
      console.log(`Company Name: ${this.name}`);
    }
  };
  newObject.print();

  // 8. Function that takes unknown number of arguments and returns their sum
  const sumArgs = (...args) => args.reduce((sum, num) => sum + num, 0);
  console.log("Sum of arguments:", sumArgs(1, 2, 3, 4, 5));

  // 9. Function that takes unknown arguments of any type and returns an array
  const collectArgs = (...args) => {
    let result = [];
    args.forEach(arg => {
      if (Array.isArray(arg)) {
        result = result.concat(arg);
      } else {
        result.push(arg);
      }
    });
    return result;
  };
  console.log("Collected arguments:", collectArgs(1, "hello", [3, 4], 5, [6, 7]));

  // 10. Destructuring property street from person object
  const { address: { street } } = person;
  console.log("Street:", street);

  // 11. Function that increments a number starting from 0 each time it’s called
  const createCounter = () => {
    let count = 0;
    return () => count++;
  };
  const counter = createCounter();
  console.log("Counter:", counter()); // 0
  console.log("Counter:", counter()); // 1
  console.log("Counter:", counter()); // 2

  // 12. Function to destruct query parameters of a URL into an object
  const parseQueryParams = (url) => {
    const queryString = url.split('?')[1];
    if (!queryString) return {};
    return queryString.split('&').reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
  };
  console.log("Parsed query params:", parseQueryParams("https://example.com?name=John&age=30"));

  return (
    <div>
      <h2>Retail Companies:</h2>
      {retailCompanies.map((company, index) => (
        <div key={index}>
          <p>Name: {company.name}</p>
          <p>Category: {company.category}</p>
          <p>Start: {company.start}</p>
          <p>End: {company.end}</p>
        </div>
      ))}
    </div>
  );
}

export default App;



