import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class EditCar extends Component {
  state = {
    open: false,
    model: "",
    brand: "",
    color: "",
    fuel: "",
    year: "",
    price: ""
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
      brand: this.props.car.brand,
      model: this.props.car.model,
      color: this.props.car.color,
      fuel: this.props.car.fuel,
      year: this.props.car.year,
      price: this.props.car.price
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editCar = () => {
    const newCar = {
      model: this.state.model,
      brand: this.state.brand,
      color: this.state.color,
      fuel: this.state.fuel,
      year: this.state.year,
      price: this.state.price
    };
    this.props.updateCar(this.props.link, newCar);
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New car</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              name="brand"
              label="Brand"
              fullWidth
              value={this.state.brand}
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              name="model"
              label="Model"
              fullWidth
              value={this.state.model}
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              name="color"
              label="Color"
              fullWidth
              value={this.state.color}
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              name="fuel"
              label="Fuel"
              fullWidth
              value={this.state.fuel}
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              name="year"
              label="Year"
              fullWidth
              value={this.state.year}
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              name="price"
              label="Price"
              fullWidth
              value={this.state.price}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.editCar} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <Button onClick={this.handleClickOpen}>EDIT</Button>
      </div>
    );
  }
}
export default EditCar;
