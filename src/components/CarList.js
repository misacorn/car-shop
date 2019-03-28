import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@material-ui/core/Button";

import AddCar from "./AddCar";

class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  componentDidMount() {
    this.loadCars();
  }

  loadCars = () => {
    fetch("https://carstockrest.herokuapp.com/cars")
      .then(response => response.json())
      .then(jsondata => this.setState({ cars: jsondata._embedded.cars }))
      .catch(err => console.error(err));
  };

  deleteCar = carLink => {
    fetch(carLink.original._links.self.href, { method: "DELETE" })
      .then(res => this.loadCars())
      .catch(err => console.error(err));
  };

  render() {
    const columns = [
      {
        Header: "Brand",
        accessor: "brand"
      },
      {
        Header: "Model",
        accessor: "model"
      },
      {
        Header: "Color",
        accessor: "color"
      },
      {
        Header: "Fuel",
        accessor: "fuel"
      },
      {
        Header: "Year",
        accessor: "year"
      },
      {
        Header: "Price",
        accessor: "price"
      },
      {
        Header: " ",
        filterable: false,
        sortable: false,
        width: 100,
        accessor: "_links.self.href",
        Cell: value => (
          <Button color="secondary" onClick={() => this.deleteCar(value)}>
            DELETE
          </Button>
        )
      }
    ];

    return (
      <div>
        <AddCar />
        <ReactTable
          data={this.state.cars}
          columns={columns}
          sortable={true}
          filterable={true}
        />
      </div>
    );
  }
}

export default CarList;
