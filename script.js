const searchInput = document.getElementById("search")
const searchForm = document.querySelector(".search_territories")

const filterForm = document.querySelector(".filter_territories")
const filterInputs = [...document.querySelectorAll(".filter_input")]
const highSeasForm = document.querySelector(".high_seas_toggle")
const highSeasInput = document.querySelector(".high_seas_input")

const statsElem = document.querySelector(".dropdown_statistics")

const listOfRelatedElem = document.querySelector(".list_by_country")

const map = L.map("map").setView([25, 0], 3)
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZnJ1Z29mYW4iLCJhIjoiY2t2NWh5ZDZkMTJmeDJ2bzB4azA4bTU3NiJ9.mEDeQcqMZEYaMDmiZpECjw",
    tap: false
  }
).addTo(map)

const colors = ["blue", "yellow", "green", "orange", "violet", "red"]
const territoriesTypes = [
  "enclave_also_exclave",
  "sovereign_enclave",
  "exclave_no_enclave",
  "sovereign_semi_enclave",
  "non_sovereign_semi_enclave",
  "non_sovereign_semi_exclave"
]

let highSeas = false
let currentTerritories = territoriesData
let mapMarkers = []

function start() {
  filterTerritories()
  addTerritoriesToMap(currentTerritories)
  updateStatistics(currentTerritories)
}
start()

// Adding territories to the map
function addTerritoriesToMap(territories) {
  territories.forEach(territorium => {
    const colorIndex = territoriesTypes.indexOf(territorium.type)
    const colorIcon = createColorIcon(colors[colorIndex])
    const marker = L.marker(territorium.coordinates, { icon: colorIcon }).addTo(
      map
    )
    const description = createDescription(territorium)
    marker.bindPopup(description)
    mapMarkers.push(marker)
  })
}

// Removing territories from the map
function removeTerritoriesFromMap(markers) {
  markers.forEach(marker => {
    map.removeLayer(marker)
  })
  markers = []
}

// Creating a popup's description
function createDescription(territorium) {
  let enclavedWithinSpan
  if (!territorium.enclavedWithin) enclavedWithinSpan = ""
  else
    enclavedWithinSpan = `<span>enclaved within ${territorium.enclavedWithin}</span>`
  let exclaveOfSpan
  if (!territorium.exclaveOf) {
    exclaveOfSpan = ""
    enclavedWithinSpan = `<span>Enclaved within ${territorium.enclavedWithin}</span>`
  } else {
    exclaveOfSpan = `<span>Exclave of ${territorium.exclaveOf}, </span>`
  }
  let notesSpan
  if (!territorium.notes) notesSpan = ""
  else notesSpan = `<span>${territorium.notes}</span>`

  let type
  switch (territorium.type) {
    case territoriesTypes[0]:
      type = "Enclave which is also Exclave"
      break
    case territoriesTypes[1]:
      type = "Sovereign Enclave"
      break
    case territoriesTypes[2]:
      type = "Exclave"
      break
    case territoriesTypes[3]:
      type = "Sovereign Semi-enclave"
      break
    case territoriesTypes[4]:
      type = "Non-Sovereign Semi-enclave"
      break
    case territoriesTypes[5]:
      type = "Non-Sovereign Semi-exclave"
      break
  }

  if (!territorium.area) territorium.area = "No Data"
  const coordinates = processCoords(territorium.coordinates)

  return `<h1>${territorium.name}</h1><h2>Area (km<sup>2</sup>): ${territorium.area}</h2><h2>${coordinates}</h2></br><h2>Type: ${type}</h2></br><h2>${exclaveOfSpan}${enclavedWithinSpan}</h2></br><h2>${notesSpan}</h2>`
}

// Conversion of coordinates to user friendly format
function processCoords(rawCoordinates) {
  let latitude = rawCoordinates[0]
  let longitude = rawCoordinates[1]
  if (parseFloat(latitude) < 0) latitude += "°W"
  else latitude += "°E"
  if (parseFloat(longitude) < 0) longitude += "°S"
  else longitude += "°N"

  return `${latitude}, ${longitude}`
}

// Filtering territories by kind
function filterTerritories() {
  removeTerritoriesFromMap(mapMarkers)

  if (!highSeas) {
    currentTerritories = territoriesData.filter(territorium => {
      return territorium.name.toLocaleLowerCase() != "high seas"
    })
  } else currentTerritories = territoriesData;

  const choosenFilters = []
  filterInputs.forEach(input => {
    if (input.checked) choosenFilters.push(input.value)
  })
  currentTerritories = currentTerritories.filter(territorium => {
    return choosenFilters.includes(territorium.type)
  })

  updateStatistics(currentTerritories)

  addTerritoriesToMap(currentTerritories)
}

function toggleHighSeas() {
  highSeas = !highSeas
  filterTerritories()
}

// Creating a list of territories related to searched territorium
function createListOfRelated(territorium_name) {
  const relatedList = []
  territoriesData.forEach(territorium => {
    if (
      territorium.enclavedWithin.toLowerCase() === territorium_name ||
      territorium.exclaveOf.toLowerCase() === territorium_name
    ) {
      relatedList.push(territorium)
    }
  })
  const fragment = document.createDocumentFragment()
  relatedList.forEach((territorium, index) => {
    const div = document.createElement("div")
    div.classList.add("country_list_item")
    div.setAttribute("data-name", `${territorium.name}`)
    div.innerHTML = createDescription(territorium)

    const br = document.createElement("br")
    div.appendChild(br)
    const goButton = document.createElement("button")
    goButton.classList.add("go")
    goButton.innerHTML = "Go!"
    goButton.addEventListener("click", e => {
      const parentElem = e.target.parentElement
      const name = parentElem.dataset.name
      searchForTerritorium(name)
      hideListOfRelated()
    })
    div.appendChild(goButton)
    const br2 = document.createElement("br")
    div.appendChild(br2)

    fragment.appendChild(div)

    const br3 = document.createElement("br")
    fragment.appendChild(br3)
    if (index !== relatedList.length - 1) {
      const line = document.createElement("hr")
      fragment.appendChild(line)
      const br4 = document.createElement("br")
      fragment.appendChild(br4)
    }
  })

  const hideButton = document.createElement("button")
  hideButton.innerText = ">"
  hideButton.classList.add("hide")
  hideButton.addEventListener("click", hideListOfRelated)
  fragment.appendChild(hideButton)

  const deleteButton = document.createElement("button")
  deleteButton.innerHTML = "X"
  deleteButton.classList.add("delete")
  deleteButton.addEventListener("click", closeListOfRelated)
  fragment.appendChild(deleteButton)

  return fragment
}

// Closing list of related territories
function closeListOfRelated() {
  listOfRelatedElem.innerHTML = ""
  listOfRelatedElem.style.display = "none"
}

// Hiding list of related territories
function hideListOfRelated() {
  listOfRelatedElem.classList.toggle("hidden")
  listOfRelatedElem.querySelector(".delete").classList.toggle("hidden")
  const hideButton = listOfRelatedElem.querySelector(".hide")
  hideButton.classList.toggle("hidden")
  if (hideButton.innerText === ">") hideButton.innerText = "<"
  else hideButton.innerText = ">"
}

// Creating a color icons
function createColorIcon(color) {
  const icon = new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
  return icon
}

// Actualising statistics
function updateStatistics(territories) {
  statsElem.innerHTML = `Liczba wyświetlonych terytoriów to: <strong>${territories.length}</strong>`
}

// Searching territories by name
function searchForTerritorium(name) {
  let isTerritorium = false
  territoriesData.forEach(territorium => {
    if (territorium.name.toLowerCase() === name.toLowerCase()) {
      map.setView(territorium.coordinates, 11)
      isTerritorium = true
    }
  })
  return isTerritorium
}

// Searching territories related to the territorium
function searchForRelatedTerritories(name) {
  let country_or_territorium
  territoriesData.forEach(territorium => {
    if (
      territorium.enclavedWithin.toLowerCase() === name ||
      territorium.exclaveOf.toLowerCase() === name
    ) {
      country_or_territorium = name
    }
  })
  if (country_or_territorium) {
    const listOfRelated = createListOfRelated(country_or_territorium)
    listOfRelatedElem.appendChild(listOfRelated)
    listOfRelatedElem.style.display = "block"
    if (listOfRelatedElem.classList.contains("hidden"))
      listOfRelatedElem.classList.remove("hidden")
    return true
  } else {
    return false
  }
}

// Combination of searches of different types
function search(event) {
  event.preventDefault()

  closeListOfRelated()

  const searchedValue = searchInput.value.toLowerCase()
  if (searchedValue.length === 0) return alert("Empty search field!")

  const territorium = searchForTerritorium(searchedValue)
  const relatedTerritories = searchForRelatedTerritories(searchedValue)
  searchInput.value = ""
  if (!territorium && !relatedTerritories)
    return alert(
      "This territorium or country doesn't exist, or it doesn't have related territorial discontinuities"
    )
}

filterForm.addEventListener("change", () => filterTerritories())

highSeasForm.addEventListener("change", () => toggleHighSeas())

searchForm.addEventListener("submit", e => search(e))
