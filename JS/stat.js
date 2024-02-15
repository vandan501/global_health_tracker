countriesContainer = document.querySelector(".countries-container");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((country) => {
      console.log(country);


      const countryCard = document.createElement("a");
      countryCard.classList.add("countryCard");

      countryCard.innerHTML =` <img src="${country.flags.svg}" alt="Country-flag-image" class="country-image-card">
      <div class="card-text">
        <h3 class="card-title">${country.name.common}</h3>
        <p><b>Population:</b>${country.population.toLocaleString('en-IN')}</p>
        <p><b>region: </b>${country.region}</p>
        <p><b>Capital: </b>${country.capital}</p>
      </div>`
      countriesContainer.append(countryCard);
    })
  )

  .catch((err) => console.log(err));
