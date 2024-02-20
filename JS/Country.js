const CountryName = new URLSearchParams(location.search).get("name");
console.log(CountryName);


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
  // Set the innerHTML of the iframe

    const CountryDetails = document.querySelector(".stat-section");
    const CountryMapSection = document.querySelector(".country-map-section");

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
              <p><b>Official Name : </b>${data[0].name.official}</p>
              <p><b>Population : </b>${data[0].population}</p>
              <p><b>Region :</b>${data[0].region}</p>
              <p><b>Capital : </b>${data[0].capital}</p>
              <p><b>Languages : </b>${languagesArray.join(", ")}</p>
              <p><b>Map link : </b> <a href="${data[0].maps.googleMaps}" target="_blank" >Google Maps Link</a> </p></div>
          </div>
        </div>
        <div class="country-map-section">
      
        <iframe  src="https://www.google.com/maps/embed/v1/place?q=place_id:${data[0].maps.googleMaps}&key=YOUR_API_KEY"></iframe>
    </div> 
      `
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
