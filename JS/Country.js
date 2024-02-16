const CountryName = new URLSearchParams(location.search).get("name");
console.log(CountryName);

// ...

async function fetchData() {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${CountryName}?fullText=true`
      );
      const data = await response.json();
  
      console.log(data[0]);
      const languages = data[0].languages;
      const languagesArray = Object.entries(languages).map(
        ([code, name]) => `${code}: ${name}`
      );
  
      const CountryDetails = document.querySelector(".stat-section");
      const CountryMapSection = document.querySelector(".country-map-section");
  
      // Display latitude and longitude information
      const latitude = data[0].latlng[0];
      const longitude = data[0].latlng[1];
  
      CountryDetails.innerHTML = `
        <marquee behavior="alternate" direction="">
          <h3>
            <mark>
              In 2019, the global death rate was 7.47 per 1,000 population, while
              in 2021 it reached a rate of 8.72.
            </mark>
          </h3>
        </marquee>
        <div class="stat-section-heading">
          <h1>Country-wise Health Statistics Page</h1>
        </div>
        <div class="stat-section-search-output">
          <div class="country-details">
            <div class="country-image">
              <img
                src="${data[0].flags.svg}"
                class="country-img"
              />
            </div>
            <div class="country-name">
              <h1>${CountryName}</h1>
            </div>
  
            <div>
              <p><b>Nativ Name : </b>${data[0].name.nativeName}</p>
              <p><b>Population : </b>${data[0].population}</p>
              <p><b>Region :</b>${data[0].region}</p>
              <p><b>Capital : </b>${data[0].capital}</p>
              <p><b>Languages : </b>${languagesArray.join(", ")}</p>
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  fetchData();
  