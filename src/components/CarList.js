import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

import AddCar from "./AddCar";
import EditCar from "./EditCar";

class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: [], open: false };
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

  saveCar = car => {
    fetch("https://carstockrest.herokuapp.com/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car)
    })
      .then(res => this.loadCars())
      .then(res => this.setState({ open: true }))
      .catch(err => console.error(err));
  };

  updateCar = (link, updatedCar) => {
    fetch(link, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCar)
    })
      .then(res => this.loadCars())
      .catch(err => console.error(err));
  };

  handleClose = () => {
    this.setState({ open: false });
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
        Cell: ({ value, row }) => (
          <EditCar updateCar={this.updateCar} link={value} car={row} />
        )
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
        <AddCar saveCar={this.saveCar} />
        <ReactTable
          data={this.state.cars}
          columns={columns}
          sortable={true}
          filterable={true}
        />
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          message="Car added successfully!"
        />
      </div>
    );
  }
}

export default CarList;
