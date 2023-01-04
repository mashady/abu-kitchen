import React, { Component } from "react";
import "./styles/menu.scss";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";
import MenuMealBox from "./components/menuMealBox";
import { paginate } from "./utils/paginate";
import { getItems, getFeaturesItems } from "./api/menuData";
//import { getGenres } from "./api/genresData";
import { getGenres } from "./services/genreService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
export default class menu extends Component {
  state = {
    allItems: [],
    allGenres: [],
    currentPage: 1,
    pageSize: 6,
    searchQuery: "",
    selectedGenre: [{ name: "all items" }],
  };
  async componentDidMount() {
    const items = await getItems();
    const data = await getGenres();
    const theinsider = data["data"];
    console.log(theinsider["0"]);
    const genres = [{ _id: "", icon: "🍴", name: "all" }, ...theinsider];
    this.setState({ allItems: items, allGenres: genres });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (ii) => {
    this.setState({ selectedGenre: ii, searchQuery: "", currentPage: 1 });
    //console.log(this.state.selectedGenre);
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      searchQuery,
      allItems: allFuckItems,
    } = this.state;

    let filtered = allFuckItems;
    if (searchQuery) {
      filtered = allFuckItems.filter((i) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filtered = allFuckItems.filter((i) => i.genre._id === selectedGenre._id);
    }

    const allItems = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: allItems };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, data: allItems } = this.getPagedData();
    //console.log(allItems);
    const genreSelctor = this.state.selectedGenre["name"];
    console.log(genreSelctor);
    console.log(genreSelctor);

    const allTheFuckenGenres = this.state.allGenres;
    console.log(allTheFuckenGenres);

    return (
      <React.Fragment>
        <Navbar />
        <div className="">
          <div className="main">
            <div className="container">
              <h4>Welcome to abuKitchen 🎈</h4>
              <div className="meals-wraper">
                <div className="sort-box d-flex justify-content-center">
                  {allTheFuckenGenres.map((fuckenGenre) => (
                    <div
                      onClick={() => this.handleGenreSelect(fuckenGenre)}
                      key={fuckenGenre._id}
                      className=""
                    >
                      <a>{fuckenGenre.icon}</a>
                      <span>{fuckenGenre.name}</span>
                    </div>
                  ))}
                </div>
                <div className="meals-container">
                  <h3>
                    All Items
                    <FontAwesomeIcon
                      style={{ marginLeft: "1rem" }}
                      icon={faSort}
                    />
                  </h3>
                  <MenuMealBox featuresItems={allItems} />
                </div>
              </div>
            </div>
          </div>
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}
